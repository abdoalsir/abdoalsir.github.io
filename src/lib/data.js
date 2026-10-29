import bundledProjects from '../data/projects.json'
import bundledPapers from '../data/papers.json'
import bundledSessions from '../data/sessions.json'
import { SHEET } from '../data/config.js'
import { useSheet } from './useSheet.js'

const figsByRepo = Object.fromEntries(bundledProjects.filter((p) => p.githubLink).map((p) => [p.githubLink, p.figures]))

export function useProjects() {
  const s = useSheet('projects', SHEET.projects, bundledProjects)
  const all = s.source === 'sheet'
    ? s.data.map((p) => ({ ...p, figures: figsByRepo[p.githubLink] || [] }))
    : s.data
  const done = all.filter((p) => p.status !== 'in-progress' && p.status !== 'draft')
  const upcoming = all.filter((p) => p.status === 'in-progress')
  return { ...s, projects: done, upcoming }
}

export function usePapers() {
  const s = useSheet('papers', SHEET.papers, bundledPapers)
  return { ...s, papers: s.data }
}

export function useSessions() {
  const s = useSheet('sessions', SHEET.sessions, bundledSessions.map((x) => ({ ...x, year: Number(x.date.slice(0, 4)) })))
  const sessions = [...s.data].sort((a, b) => (a.date < b.date ? 1 : -1))
  return { ...s, sessions }
}

export function sessionStats(sessions) {
  const sum = (a) => a.reduce((t, x) => t + x.hours, 0)
  const by = (key) => {
    const m = new Map()
    for (const s of sessions) { const k = s[key] || '—'; const e = m.get(k) || { key: k, n: 0, h: 0 }; e.n++; e.h += s.hours; m.set(k, e) }
    return [...m.values()]
  }
  const years = by('year').sort((a, b) => a.key - b.key)
  const orgs = by('organization').sort((a, b) => b.h - a.h)
  const online = sessions.filter((s) => /online/i.test(s.format))
  const unis = new Set(sessions.map((s) => s.university).filter((u) => u && u !== '—'))
  const yearSpan = years.length ? years[years.length - 1].key - years[0].key + 1 : 0
  return {
    count: sessions.length, hours: sum(sessions), universities: unis.size, yearSpan, years, orgs,
    online: { n: online.length, h: sum(online) },
    physical: { n: sessions.length - online.length, h: sum(sessions) - sum(online) },
  }
}
