import { useEffect, useState } from 'react'
import { parseCSV } from './csv.js'

const split = (v, sep = ';') => (v ? v.split(sep).map((s) => s.trim()).filter(Boolean) : [])
const num = (v, d = 0) => (v === '' || v == null || isNaN(Number(v)) ? d : Number(v))

export const mappers = {
  projects: (r, i) => ({
    id: num(r.id, i + 1),
    shortTitle: r.shortTitle,
    fullTitle: r.fullTitle || r.shortTitle,
    category: r.category,
    degreeType: r.degreeType,
    year: num(r.year, ''),
    sampleSize: r.sampleSize,
    description: r.description,
    researchQuestion: r.researchQuestion,
    methods: split(r.methods),
    tools: split(r.tools),
    githubLink: r.githubLink,
    presentationLink: r.presentationLink || null,
    hasPresentation: !!r.presentationLink,
    status: (r.status || 'completed').toLowerCase(),
    figures: [], // filled automatically from the repo's 5_figures folder
  }),
  papers: (r, i) => ({
    id: num(r.id, i + 1),
    title: r.title,
    shortTitle: r.shortTitle || r.title,
    type: r.type,
    status: r.status,
    year: num(r.year, ''),
    role: r.role,
    design: r.design,
    sample: r.sample,
    summary: r.summary,
    stats: r.stats,
    link: r.link,
    pdf: r.pdf,
  }),
  sessions: (r, i) => ({
    id: i + 1,
    session: r.session,
    date: r.date,
    organization: r.organization,
    university: r.university,
    format: r.format,
    language: r.language || 'English',
    hours: num(r.hours),
  }),
}

// Normalise a date typed in a sheet (2022-07-15, 15/07/2022, 7/15/2022) to YYYY-MM-DD.
export function isoDate(v) {
  if (!v) return ''
  if (/^\d{4}-\d{2}-\d{2}/.test(v)) return v.slice(0, 10)
  const d = new Date(v)
  return isNaN(d) ? '' : d.toISOString().slice(0, 10)
}

/**
 * useSheet(kind, url, fallback)
 * Returns { data, source: 'sheet' | 'bundled', error, count }.
 * Starts with the bundled data (instant), swaps to the live sheet when it loads.
 * If the sheet fails or is empty, the bundled data stays — the site never breaks.
 */
export function useSheet(kind, url, fallback) {
  const [state, setState] = useState({ data: fallback, source: 'bundled', error: null })
  useEffect(() => {
    if (!url) return
    let dead = false
    const bust = Math.floor(Date.now() / 300000) // refresh at most every 5 minutes
    fetch(`${url}${url.includes('?') ? '&' : '?'}_=${bust}`)
      .then((r) => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.text() })
      .then((t) => {
        const rows = parseCSV(t)
        const data = rows.map(mappers[kind]).filter((x) => (x.shortTitle || x.title || x.session))
        if (kind === 'sessions') data.forEach((s) => { s.date = isoDate(s.date); s.year = Number((s.date || '').slice(0, 4)) || 0 })
        if (!data.length) throw new Error('Sheet is empty')
        if (!dead) setState({ data, source: 'sheet', error: null })
      })
      .catch((e) => { if (!dead) setState((s) => ({ ...s, error: String(e.message || e) })) })
    return () => { dead = true }
  }, [kind, url])
  return state
}
