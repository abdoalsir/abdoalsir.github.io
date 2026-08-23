import Reveal from '../components/Reveal.jsx'

const MILESTONES = [
  { title: 'Cross-Cultural Collaboration & Setup', desc: 'Prepared the repository and project board for open-source, cross-team contribution.' },
  { title: 'Problem Identification', desc: 'Conducted the initial domain study and framed the actionable research questions.' },
  { title: 'Data Collection', desc: 'Decided on the data model, identified relevant sources (IOM DTM, HOT OSM), then collected, cleaned, documented, and hosted the dataset.' },
  { title: 'Data Analysis', desc: 'Applied geospatial analysis techniques and produced results with a non-technical summary.' },
  { title: 'Communicating Results', desc: 'Translated findings into a clear message and prepared a communication strategy and dashboard artifact.' },
  { title: 'Final Presentation', desc: 'Presented the communication artifact, project evolution, learnings, and next steps.' },
]

export default function HCICS() {
  return (
    <section>
      <div className="container">
        <Reveal>
          <span className="status-badge" style={{ background: 'rgba(22,163,74,0.15)', color: '#16a34a', borderColor: '#16a34a' }}>
            ● Completed — MIT Emerging Talent Program Capstone
          </span>
          <h1 className="section-title">
            Humanitarian Crisis Intelligence and Communication System (HCICS)
          </h1>
          <p className="hero-tagline" style={{ color: 'var(--teal)' }}>
            A data-driven framework for Sudan's public health information crisis
          </p>
          <a
            href="https://github.com/abdoalsir/ET6-ELO2-HCICS"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
            style={{ marginTop: 12, marginBottom: 40 }}
          >
            View Repository ↗
          </a>
        </Reveal>

        <Reveal as="div" className="modal-section" style={{ maxWidth: 760 }}>
          <h2 style={{ fontSize: '1.3rem' }}>Why This Project</h2>
          <p>
            Sudan's ongoing conflict has produced a public health information breakdown alongside the
            humanitarian crisis itself — fragmented reports, scattered geospatial data, and no shared
            picture of where displaced populations and health services actually overlap. HCICS was built
            to turn that fragmented data into actionable intelligence for public health decision-makers,
            supporting a shift from reactive crisis response toward an adaptive one.
          </p>
          <p>
            Developed as the graduation capstone for the MIT Emerging Talent Program, the project
            delivers a minimum viable product: a working data pipeline and visualization platform
            demonstrating the full concept end to end.
          </p>
        </Reveal>

        <Reveal as="div">
          <h2 style={{ fontSize: '1.3rem', marginTop: 40 }}>MVP Components</h2>
          <div className="callout-grid">
            <div className="callout">
              <span className="callout-num">01</span>
              <strong>Data Aggregation Engine</strong> — collects, cleans, and fuses structured
              humanitarian and geospatial data (IOM DTM, HOT OSM) into a single source of truth.
            </div>
            <div className="callout">
              <span className="callout-num">02</span>
              <strong>Crisis Analysis Core</strong> — geospatial analysis mapping the relationship between
              displaced population centers and available health services.
            </div>
            <div className="callout">
              <span className="callout-num">03</span>
              <strong>Communication Platform</strong> — a public-facing dashboard translating the analysis
              into interactive maps and actionable insight.
            </div>
          </div>
        </Reveal>

        <Reveal as="div">
          <h2 style={{ fontSize: '1.3rem', marginTop: 40, marginBottom: 20 }}>Project Milestones</h2>
          <ol className="phase-list">
            {MILESTONES.map((m) => (
              <li key={m.title}>
                <strong style={{ color: 'var(--navy)' }}>{m.title}</strong>
                <p style={{ margin: '4px 0 0' }}>{m.desc}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal as="div">
          <h2 style={{ fontSize: '1.3rem', marginTop: 40 }}>Data Sources</h2>
          <div className="dataset-grid">
            <div className="dataset-card">
              <h4>IOM Displacement Tracking Matrix (DTM)</h4>
              <ul>
                <li>Number, location, and movement of internally displaced persons</li>
                <li>Accessed via API</li>
              </ul>
            </div>
            <div className="dataset-card">
              <h4>Humanitarian OpenStreetMap Team (HOT) Data</h4>
              <ul>
                <li>Locations and types of health facilities (hospitals, clinics)</li>
                <li>Open geospatial data source</li>
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal as="div">
          <h2 style={{ fontSize: '1.3rem', marginTop: 40, marginBottom: 16 }}>Tech Stack</h2>
          <div className="tech-stack">
            {['Python', 'Pandas', 'GeoPandas', 'Folium', 'Shapely', 'Streamlit / Dash', 'Git'].map((t) => (
              <span className="tech-pill" key={t}>{t}</span>
            ))}
          </div>
        </Reveal>

        <Reveal as="div" style={{ marginTop: 40, maxWidth: 760, marginBottom: 20 }}>
          <h2 style={{ fontSize: '1.3rem' }}>Ethical Framework</h2>
          <p>
            Working with humanitarian data on vulnerable displaced populations demanded a strong ethical
            foundation: privacy-protective handling of sensitive location data, a human-in-the-loop
            validation process to guard against bias and misinterpretation in geospatial correlation, and
            a transparent approach so that the Ministry of Health and humanitarian partners can be
            accountable for data-driven decisions.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
