import { useState } from 'react'
import { SHEET, PROFILE } from '../data/config.js'
import { useProjects, usePapers, useSessions } from '../lib/data.js'
import { CATEGORIES } from '../data/categories.js'

const FORMS = {
  Projects: [
    ['shortTitle', 'Short title'], ['fullTitle', 'Full title'], ['category', 'Category', CATEGORIES.filter((c) => c.slug !== 'all').map((c) => c.slug)],
    ['degreeType', 'Client degree (MD, MBBS…)'], ['year', 'Year'], ['sampleSize', 'Sample size (e.g. N = 157 patients)'],
    ['description', 'Description', 'area'], ['researchQuestion', 'Research question', 'area'],
    ['methods', 'Methods (separate with ;)'], ['tools', 'Tools (separate with ;)'], ['githubLink', 'GitHub link'], ['presentationLink', 'Presentation link (optional)'],
    ['status', 'Status', ['completed', 'in-progress']],
  ],
  Papers: [
    ['shortTitle', 'Short title'], ['title', 'Full title'], ['type', 'Type (Qualitative study, Thesis…)'], ['status', 'Status'], ['year', 'Year'],
    ['role', 'My role'], ['design', 'Design'], ['sample', 'Sample'], ['summary', 'Summary', 'area'],
    ['stats', 'Headline numbers (31|surgeons;4.2%|adequate equipment)'], ['link', 'Link (optional)'], ['pdf', 'PDF link (optional)'],
  ],
  Sessions: [
    ['session', 'Session title'], ['date', 'Date (YYYY-MM-DD)'], ['organization', 'Organisation'], ['university', 'University'],
    ['format', 'Format', ['Online', 'Physical']], ['language', 'Language'], ['hours', 'Hours'],
  ],
}
const SOURCES = { Projects: 'projects', Papers: 'papers', Sessions: 'sessions' }

function Status({ label, hook }) {
  const count = hook.projects?.length ?? hook.papers?.length ?? hook.sessions?.length
  const url = SHEET[SOURCES[label]]
  const live = hook.source === 'sheet'
  return (
    <div className="admin-status">
      <strong>{label}</strong>
      <span className={`pill ${live ? 'pill-ok' : 'pill-warn'}`}>{live ? 'Live from sheet' : url ? 'Sheet failed → using built-in data' : 'Built-in data (sheet not connected)'}</span>
      <span className="mono">{count} rows</span>
      {hook.error && <span className="mono" style={{ color: '#b45309' }}>{hook.error}</span>}
    </div>
  )
}

export default function Admin() {
  const projects = useProjects(), papers = usePapers(), sessions = useSessions()
  const [tab, setTab] = useState('Projects')
  const [vals, setVals] = useState({})
  const [copied, setCopied] = useState(false)
  const fields = FORMS[tab]

  const row = fields.map(([k]) => String(vals[tab + k] ?? '').replace(/[\t\r\n]+/g, ' ')).join('\t')
  async function copy() {
    try { await navigator.clipboard.writeText(row); setCopied(true); setTimeout(() => setCopied(false), 2000) } catch { window.prompt('Copy this row:', row) }
  }

  return (
    <section>
      <div className="container admin">
        <div className="kicker">Control panel</div>
        <h1 className="section-title">Update the site without touching code</h1>
        <p className="section-sub">
          The site reads its projects, papers and training sessions from your Google Sheet. Add a row there and it
          appears here within about five minutes. No terminal, no git, no deploy.
        </p>

        <div className="admin-card">
          <h2 className="h-sm">Connection</h2>
          <Status label="Projects" hook={projects} />
          <Status label="Papers" hook={papers} />
          <Status label="Sessions" hook={sessions} />
          <div style={{ marginTop: 16, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {SHEET.editUrl
              ? <a className="btn btn-primary btn-sm" href={SHEET.editUrl} target="_blank" rel="noreferrer">Open the Google Sheet ↗</a>
              : <span className="open-note" style={{ margin: 0 }}>Sheet not connected yet. Follow README-ADMIN.md once (about 10 minutes).</span>}
          </div>
        </div>

        <div className="admin-card">
          <h2 className="h-sm">Row builder</h2>
          <p style={{ fontSize: '0.92rem' }}>
            Fill in the form, press <strong>Copy row</strong>, then click the first empty cell in column A of the matching
            tab in your sheet and paste. Each field lands in the right column.
          </p>
          <div className="filter-bar">
            {Object.keys(FORMS).map((t) => (
              <button key={t} className={`filter-chip${tab === t ? ' active' : ''}`} onClick={() => setTab(t)}>{t}</button>
            ))}
          </div>
          <div className="admin-form">
            {fields.map(([k, label, opt]) => (
              <label key={k} className={opt === 'area' ? 'wide' : ''}>
                <span>{label}</span>
                {Array.isArray(opt) ? (
                  <select value={vals[tab + k] ?? ''} onChange={(e) => setVals({ ...vals, [tab + k]: e.target.value })}>
                    <option value="">—</option>{opt.map((o) => <option key={o}>{o}</option>)}
                  </select>
                ) : opt === 'area' ? (
                  <textarea rows="3" value={vals[tab + k] ?? ''} onChange={(e) => setVals({ ...vals, [tab + k]: e.target.value })} />
                ) : (
                  <input value={vals[tab + k] ?? ''} onChange={(e) => setVals({ ...vals, [tab + k]: e.target.value })} />
                )}
              </label>
            ))}
          </div>
          <button className="btn btn-primary" onClick={copy}>{copied ? 'Copied ✓' : 'Copy row'}</button>
          <p className="mono" style={{ fontSize: '0.78rem', marginTop: 14 }}>Column order: {fields.map(([k]) => k).join(' · ')}</p>
        </div>

        <p style={{ fontSize: '0.85rem' }}>
          Figures for a new project load automatically from the <code>5_figures</code> folder of its GitHub repository.
          This page is read-only; only the owner of the Google Sheet can change what the site shows.
          {PROFILE.email ? '' : ''}
        </p>
      </div>
    </section>
  )
}
