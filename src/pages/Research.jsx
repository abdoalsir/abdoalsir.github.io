import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { usePapers } from '../lib/data.js'

function Stats({ stats }) {
  if (!stats) return null
  return (
    <div className="paper-stats">
      {stats.split(';').map((s) => {
        const [n, l] = s.split('|')
        return (
          <div key={s}>
            <span className="paper-stat-num">{n}</span>
            <span className="paper-stat-label">{l}</span>
          </div>
        )
      })}
    </div>
  )
}

export default function Research() {
  const { papers } = usePapers()
  return (
    <section>
      <div className="container">
        <Reveal>
          <div className="kicker">Research</div>
          <h1 className="section-title">Papers, reports and proposals</h1>
          <p className="section-sub">
            Studies I have worked on, from conflict-zone trauma care to community stroke awareness,
            plus the deep-learning project I am running now.
          </p>
        </Reveal>

        <ol className="paper-list">
          {papers.map((p, i) => (
            <Reveal as="li" className="paper" key={p.id}>
              <div className="paper-index">{String(i + 1).padStart(2, '0')}</div>
              <div className="paper-body">
                <div className="paper-tags">
                  <span className="badge">{p.type}</span>
                  <span className="badge badge-status">{p.status}</span>
                  <span className="badge">{p.year}</span>
                </div>
                <h2 className="paper-title">{p.title}</h2>
                <p className="paper-summary">{p.summary}</p>
                <Stats stats={p.stats} />
                <dl className="paper-facts">
                  <div><dt>My role</dt><dd>{p.role}</dd></div>
                  <div><dt>Design</dt><dd>{p.design}</dd></div>
                  <div><dt>Sample</dt><dd>{p.sample}</dd></div>
                </dl>
                <div className="paper-links">
                  {p.link && (p.link.startsWith('/') ? <Link to={p.link} className="btn btn-primary btn-sm">Read the project →</Link> : <a href={p.link} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">Open ↗</a>)}
                  {p.pdf && <a href={p.pdf} target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm">PDF ↗</a>}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal as="div" className="research-more">
          <Link to="/hcics" className="project-link-card">
            <div className="project-link-card-title">HCICS — Humanitarian Crisis Intelligence and Communication System</div>
            <div className="project-link-card-meta">MIT Emerging Talent capstone · Completed</div>
            <div className="project-link-card-desc">Geospatial platform linking displaced populations to health facilities in Sudan. Read more →</div>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
