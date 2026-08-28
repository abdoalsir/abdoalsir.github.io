import { useState } from 'react'

export default function Accordion({ title, meta, summary, bullets, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="accordion-item">
      <button className="accordion-head" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <div>
          <div className="accordion-title">{title}</div>
          {meta && <div className="accordion-meta">{meta}</div>}
        </div>
        <span className={`accordion-caret${open ? ' open' : ''}`}>⌄</span>
      </button>
      {summary && <p className="accordion-summary">{summary}</p>}
      {open && bullets && (
        <ul className="accordion-bullets">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
