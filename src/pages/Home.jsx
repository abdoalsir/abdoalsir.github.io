import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import PulseSignature from '../components/PulseSignature.jsx'
import projects from '../data/projects.json'

const CATEGORY_COUNT = new Set(projects.map((p) => p.category)).size

export default function Home() {
  return (
    <>
      <section className="hero">
        <PulseSignature />
        <div className="container">
          <div className="hero-eyebrow">Medical Graduate · Health Data Scientist</div>
          <h1>Abdulrahman Sirelkhatim</h1>
          <p className="hero-tagline">Bridging clinical medicine and computational research</p>
          <p className="hero-sentence">
            First-generation medical graduate (MBBS, Sudan University of Science and Technology) with
            {' '}{projects.length} completed data analysis projects across {CATEGORY_COUNT} research areas —
            from infectious disease and mental health to medical education, delivered through revolution,
            pandemic, and ongoing conflict.
          </p>
          <div className="hero-ctas">
            <Link to="/projects" className="btn btn-primary">View Research Portfolio</Link>
            <Link to="/cv" className="btn btn-outline">Download CV</Link>
          </div>
        </div>
      </section>

      <section className="section-white">
        <div className="container about-grid">
          <Reveal>
            <img
                src="/photo/profile.jpg"
                alt="Abdulrahman Sirelkhatim"
                style={{ width: 220, height: 220, borderRadius: 16, objectFit: 'cover' }}
              />
            <ul className="stat-list">
              <li><span className="stat-num">{projects.length}</span>research projects completed</li>
              <li><span className="stat-num">10+</span>medical specialties covered</li>
              <li><span className="stat-num">7</span>years of organizational leadership</li>
              <li><span className="stat-num">800+</span>students served as SUMSA President</li>
            </ul>
          </Reveal>
          <Reveal as="div" className="about-text">
            <h2 className="section-title">About</h2>
            <p>
              I'm a medical graduate (MBBS, SUST, 2026) and health data scientist combining clinical
              training with advanced statistical and machine learning skills. Since October 2025 I've
              delivered {projects.length}+ complete data analysis projects for MD, MBBS, Clinical Master, and
              Doctoral researchers across infectious disease, psychiatry, ophthalmology, maternal health,
              and public health — full-service work from study design through publication-ready
              visualizations and thesis defense presentations.
            </p>
            <p>
              Alongside research, I've held senior leadership roles including President of SUMSA
              (Sudan University Medical Students' Association, 800+ members) and Deputy Director at the
              Sudanese Consortium for Surgical Development — building organizational systems (mobile
              apps, certificate platforms, digital archives) while maintaining medical education through
              revolution, COVID-19, a faculty strike, and ongoing armed conflict.
            </p>
            <p>
              My current focus is bringing clinical neuroscience training together with machine learning
              for computational neuroscience research — starting with an explainable brain tumour
              classification project informed by what a clinician actually needs from a diagnostic model.
            </p>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal>
            <h2 className="section-title">Skills</h2>
            <p className="section-sub">Clinical training and computational tooling, applied together.</p>
          </Reveal>
          <div className="skills-grid">
            <Reveal className="skill-card" as="div">
              <h3>Statistical Analysis</h3>
              <div className="skill-tags">Regression modeling · Survival analysis · Diagnostic evaluation (ROC, sensitivity/specificity) · Hypothesis testing · SPSS · Python (statsmodels, SciPy)</div>
            </Reveal>
            <Reveal className="skill-card" as="div">
              <h3>Machine Learning</h3>
              <div className="skill-tags">scikit-learn · Supervised & unsupervised learning · Model evaluation · Cross-validation · GeoPandas / geospatial analysis</div>
            </Reveal>
            <Reveal className="skill-card" as="div">
              <h3>Software Development</h3>
              <div className="skill-tags">Python · Flutter · HTML/CSS/PHP · SQL · Git/GitHub · Google Apps Script</div>
            </Reveal>
            <Reveal className="skill-card" as="div">
              <h3>Clinical Foundation</h3>
              <div className="skill-tags">MBBS clinical rotations (14+ specialties) · ACLS & BLS certified · Neuroscience & neuroanatomy · Research methodology</div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-white">
        <div className="container">
          <Reveal style={{ textAlign: 'center' }}>
            <h2 className="section-title">Explore the research</h2>
            <p className="section-sub" style={{ margin: '0 auto 28px' }}>
              {projects.length} projects spanning infectious disease, mental health, non-communicable
              disease, medical education, maternal &amp; child health, and healthcare systems research.
            </p>
            <Link to="/projects" className="btn btn-primary">Browse All Projects</Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
