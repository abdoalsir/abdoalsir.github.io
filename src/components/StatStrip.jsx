export default function StatStrip({ stats }) {
  return (
    <div className="stat-strip">
      {stats.map((s) => (
        <div className="stat-strip-item" key={s.label}>
          <div className="stat-strip-num">{s.num}</div>
          <div className="stat-strip-label">{s.label}</div>
        </div>
      ))}
    </div>
  )
}
