import { useEffect, useState } from 'react'

const IMG = /\.(png|jpe?g|gif|webp|svg)$/i
const cache = new Map()

function repoOf(link) {
  const m = /github\.com\/([^/]+)\/([^/#?]+)/.exec(link || '')
  return m ? { owner: m[1], repo: m[2].replace(/\.git$/, '') } : null
}
const pretty = (name) => name.replace(/\.[^.]+$/, '').replace(/^\d+[_-]?/, '').replace(/[_-]+/g, ' ').trim()

/** Lists images in <repo>/5_figures through the GitHub API (per-visitor limit, cached for the session). */
export async function loadFigures(githubLink) {
  const r = repoOf(githubLink)
  if (!r) return []
  const key = `${r.owner}/${r.repo}`
  if (cache.has(key)) return cache.get(key)
  try {
    const hit = sessionStorage.getItem('figs:' + key)
    if (hit) { const v = JSON.parse(hit); cache.set(key, v); return v }
  } catch { /* storage unavailable */ }
  try {
    const res = await fetch(`https://api.github.com/repos/${key}/contents/5_figures`)
    if (!res.ok) throw new Error(String(res.status))
    const list = await res.json()
    const figs = list
      .filter((f) => f.type === 'file' && IMG.test(f.name))
      .map((f) => ({ url: `https://raw.githubusercontent.com/${key}/main/5_figures/${encodeURIComponent(f.name)}`, caption: pretty(f.name) }))
    cache.set(key, figs)
    try { sessionStorage.setItem('figs:' + key, JSON.stringify(figs)) } catch { /* ignore */ }
    return figs
  } catch {
    cache.set(key, [])
    return []
  }
}

export function useFigures(project, enabled = true) {
  const [figs, setFigs] = useState(project.figures || [])
  useEffect(() => {
    if (!enabled || (project.figures && project.figures.length)) return
    let dead = false
    loadFigures(project.githubLink).then((f) => { if (!dead && f.length) setFigs(f) })
    return () => { dead = true }
  }, [project, enabled])
  return figs
}
