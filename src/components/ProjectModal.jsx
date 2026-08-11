import { useEffect } from 'react'
import { categoryColor, categoryLabel } from '../data/categories.js'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!project) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        <div className="modal-cat">
          <span className="tag-pill" style={{ background: categoryColor(project.category) }}>
            {categoryLabel(project.category)}
          </span>
        </div>
        <h2 className="modal-title">{project.fullTitle}</h2>
        <div className="card-meta" style={{ marginBottom: 20 }}>
          <span className="badge">{project.degreeType}</span>
          <span className="badge">{project.year}</span>
          <span className="badge">{project.sampleSize}</span>
        </div>

        <div className="modal-section">
          <div className="modal-label">Research Question</div>
          <p>{project.researchQuestion}</p>
        </div>

        <div className="modal-section">
          <div className="modal-label">Overview</div>
          <p>{project.description}</p>
        </div>

        <div className="modal-section">
          <div className="modal-label">Methods</div>
          <div className="modal-methods">
            {project.methods.map((m) => (
              <span className="badge" key={m}>{m}</span>
            ))}
          </div>
        </div>

        <div className="modal-section">
          <div className="modal-label">Tools</div>
          <div className="modal-methods">
            {project.tools.map((t) => (
              <span className="badge" key={t}>{t}</span>
            ))}
          </div>
        </div>

        <div className="modal-links">
          <a href={project.githubLink} target="_blank" rel="noreferrer" className="btn btn-primary">
            View Repository ↗
          </a>
          {project.hasPresentation && project.presentationLink && (
            <a href={project.presentationLink} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ color: 'var(--navy)', borderColor: 'var(--border)' }}>
              Presentation ↗
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
