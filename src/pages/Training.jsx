import { useMemo, useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import StatStrip from '../components/StatStrip.jsx'
import { useSessions, sessionStats } from '../lib/data.js'

function Bars({ rows, unit, labelKey = 'key', valueKey = 'h' }) {
  const max = Math.max(...rows.map((r) => r[valueKey]), 1)
  return (
    <div className="bars">
      {rows.map((r) => (
        <div className="bar-row" key={r[labelKey]}>
          <span className="bar-label">{r[labelKey]}</span>
          <span className="bar-track"><span className="bar-fill" style={{ width: `${(r[valueKey] / max) * 100}%` }} /></span>
          <span className="bar-val">{r[valueKey]}{unit}</span>
        </div>
      ))}
    </div>
  )
}

export default function Training() {
  const { sessions } = useSessions()
  const st = useMemo(() => sessionStats(sessions), [sessions])
  const [year, setYear] = useState('all')
  const [fmt, setFmt] = useState('all')
  const [q, setQ] = useState('')

  const rows = sessions.filter((s) =>
    (year === 'all' || String(s.year) === year) &&
    (fmt === 'all' || s.format === fmt) &&
    (!q || `${s.session} ${s.organization} ${s.university}`.toLowerCase().includes(q.toLowerCase())))

  const stats = [
    { num: String(st.count), label: 'Sessions facilitated' },
    { num: String(st.hours), label: 'Training hours' },
    { num: String(st.universities), label: 'Universities reached' },
    { num: String(st.yearSpan), label: 'Years active' },
  ]

  return (
    <section>
      <div className="container">
        <Reveal>
          <div className="kicker">Training</div>
          <h1 className="section-title">Facilitation portfolio</h1>
          <p className="section-sub">
            IFMSA-certified facilitator (PRET, Egypt, 2022). Sessions on exchange programmes, global health,
            leadership, teamwork and professional skills for medical students across Sudan.
          </p>
        </Reveal>

        <Reveal as="div"><StatStrip stats={stats} /></Reveal>

        <div className="chart-grid">
          <Reveal as="div" className="chart-card">
            <h3>Sessions by year</h3>
            <Bars rows={st.years.map((y) => ({ key: y.key, h: y.n }))} unit="" />
          </Reveal>
          <Reveal as="div" className="chart-card">
            <h3>Hours by organisation</h3>
            <Bars rows={st.orgs.slice(0, 7).map((o) => ({ key: o.key, h: o.h }))} unit="h" />
          </Reveal>
          <Reveal as="div" className="chart-card">
            <h3>Online vs in person</h3>
            <div className="split">
              <span className="split-a" style={{ flex: st.online.n || 1 }}>{st.online.n} online</span>
              <span className="split-b" style={{ flex: st.physical.n || 1 }}>{st.physical.n} in person</span>
            </div>
            <p style={{ fontSize: '0.85rem', margin: '10px 0 0' }}>
              {st.online.h} h online · {st.physical.h} h in person
            </p>
          </Reveal>
        </div>

        <Reveal as="div" className="log-head">
          <h2 className="h-sm" style={{ margin: 0 }}>Session log</h2>
          <div className="log-filters">
            <input type="search" placeholder="Search sessions…" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search sessions" />
            <select value={year} onChange={(e) => setYear(e.target.value)} aria-label="Year">
              <option value="all">All years</option>
              {[...st.years].reverse().map((y) => <option key={y.key} value={String(y.key)}>{y.key}</option>)}
            </select>
            <select value={fmt} onChange={(e) => setFmt(e.target.value)} aria-label="Format">
              <option value="all">Any format</option>
              <option>Online</option>
              <option>Physical</option>
            </select>
          </div>
        </Reveal>

        <div className="table-wrap">
          <table className="plain-table log-table">
            <thead><tr><th>Date</th><th>Session</th><th>Organisation</th><th>University</th><th>Format</th><th>Hours</th></tr></thead>
            <tbody>
              {rows.map((s) => (
                <tr key={s.id}>
                  <td className="mono">{s.date ? s.date.slice(0, 7) : ''}</td>
                  <td><strong>{s.session}</strong></td>
                  <td>{s.organization}</td>
                  <td>{s.university}</td>
                  <td>{s.format}</td>
                  <td className="mono">{s.hours}</td>
                </tr>
              ))}
              {!rows.length && <tr><td colSpan="6">No sessions match.</td></tr>}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: '0.85rem' }}>Showing {rows.length} of {sessions.length} sessions. All delivered in English.</p>
      </div>
    </section>
  )
}
