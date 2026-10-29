import { useMemo, useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import FilterBar from '../components/FilterBar.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import ProjectModal from '../components/ProjectModal.jsx'
import { useProjects } from '../lib/data.js'

export default function Projects() {
  const { projects, upcoming } = useProjects()
  const [active, setActive] = useState('all')
  const [selected, setSelected] = useState(null)

  const counts = useMemo(() => {
    const c = { all: projects.length }
    for (const p of projects) c[p.category] = (c[p.category] || 0) + 1
    return c
  }, [projects])

  const filtered = active === 'all' ? projects : projects.filter((p) => p.category === active)

  return (
    <section>
      <div className="container">
        <Reveal>
          <div className="kicker">Data analysis</div>
          <h1 className="section-title">Research Portfolio</h1>
          <p className="section-sub">
            {projects.length} completed analyses so far, each with its own repository. Open a project for the
            research question, methods and figures.
          </p>
        </Reveal>

        <FilterBar active={active} onChange={setActive} counts={counts} />

        <div className="project-grid">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={setSelected} />
          ))}
        </div>

        {upcoming.length > 0 && active === 'all' && (
          <div className="upcoming">
            <div className="kicker">In progress</div>
            <div className="upcoming-grid">
              {upcoming.map((p) => (
                <div className="upcoming-card" key={p.id}>
                  <span className="upcoming-dot" />
                  <div>
                    <strong>{p.shortTitle}</strong>
                    <p>{p.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
