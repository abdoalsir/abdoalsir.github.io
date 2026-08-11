import { CATEGORIES } from '../data/categories.js'

export default function FilterBar({ active, onChange, counts }) {
  return (
    <div className="filter-bar">
      {CATEGORIES.map((c) => (
        <button
          key={c.slug}
          className={`filter-chip${active === c.slug ? ' active' : ''}`}
          onClick={() => onChange(c.slug)}
        >
          {c.label} {counts[c.slug] ? `(${counts[c.slug]})` : ''}
        </button>
      ))}
    </div>
  )
}
