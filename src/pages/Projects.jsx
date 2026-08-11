import { useMemo, useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import FilterBar from '../components/FilterBar.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import ProjectModal from '../components/ProjectModal.jsx'
import projects from '../data/projects.json'

export default function Projects() {
  const [active, setActive] = useState('all')
  const [selected, setSelected] = useState(null)

  const counts = useMemo(() => {
    const c = { all: projects.length }
    for (const p of projects) c[p.category] = (c[p.category] || 0) + 1
    return c
  }, [])

  const filtered = active === 'all' ? projects : projects.filter((p) => p.category === active)

  return (
    <section>
      <div className="container">
        <Reveal>
          <h1 className="section-title">Research Portfolio</h1>
          <p className="section-sub">
            {projects.length} completed data analysis projects across six research areas. Click any
            project for the full research question, methods, and repository.
          </p>
        </Reveal>

        <FilterBar active={active} onChange={setActive} counts={counts} />

        <div className="project-grid">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={setSelected} />
          ))}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
