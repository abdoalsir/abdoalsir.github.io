import { categoryColor, categoryLabel } from '../data/categories.js'

export default function ProjectCard({ project, onOpen }) {
  return (
    <button className="project-card reveal in-view" onClick={() => onOpen(project)}>
      <div className="card-top">
        <span className="card-num">#{String(project.id).padStart(2, '0')}</span>
        <span className="tag-pill" style={{ background: categoryColor(project.category) }}>
          {categoryLabel(project.category)}
        </span>
      </div>
      <h3 className="card-title">{project.shortTitle}</h3>
      <p className="card-desc">{project.description}</p>
      <div className="card-meta">
        <span className="badge">{project.degreeType}</span>
        <span className="badge">{project.year}</span>
      </div>
      <div className="card-actions">
        <a
          href={project.githubLink}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          GitHub ↗
        </a>
        {project.hasPresentation && project.presentationLink && (
          <a
            href={project.presentationLink}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            Presentation ↗
          </a>
        )}
      </div>
    </button>
  )
}
