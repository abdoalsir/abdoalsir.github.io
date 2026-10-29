import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import PulseSignature from '../components/PulseSignature.jsx'
import Photo from '../components/Photo.jsx'
import { useProjects, usePapers, useSessions, sessionStats } from '../lib/data.js'
import { COUNTS } from '../data/config.js'

export default function Home() {
  const { projects } = useProjects()
  const { papers } = usePapers()
  const { sessions } = useSessions()
  const st = sessionStats(sessions)

  const tiles = [
    { to: '/projects', num: projects.length, label: 'analysis projects documented', sub: `${COUNTS.delivered} delivered in total` },
    { to: '/research', num: papers.length, label: 'papers, reports and proposals', sub: 'trauma care, stroke, rural health, neuroimaging AI' },
    { to: '/training', num: st.hours, label: 'hours of facilitation', sub: `${st.count} sessions · ${st.universities} universities` },
    { to: '/cv', num: '800+', label: 'students led as SUMSA President', sub: 'plus SCSD, MedSIN, IFMSA roles' },
  ]

  return (
    <>
      <section className="hero">
        <PulseSignature />
        <div className="container hero-grid">
          <div>
            <div className="hero-eyebrow">Medical Graduate · Health Data Scientist</div>
            <h1>Abdulrahman Sirelkhatim Tagalsir Ali</h1>
            <p className="hero-tagline">Bridging clinical medicine and computational research</p>
            <p className="hero-sentence">
              MBBS (Sudan University of Science and Technology, 2026). I analyse clinical data for researchers,
              study how Sudan's health system holds up under conflict, and am building a deep-learning project on
              African brain MRI. All of it done through revolution, a pandemic, a strike and a war.
            </p>
            <div className="hero-ctas">
              <Link to="/projects" className="btn btn-primary">See the work</Link>
              <Link to="/cv" className="btn btn-outline">Read my journey</Link>
            </div>
          </div>
          <div className="hero-photo"><Photo /></div>
        </div>
      </section>

      <section className="section-white tight">
        <div className="container">
          <div className="home-tiles">
            {tiles.map((t) => (
              <Link to={t.to} className="home-tile" key={t.to}>
                <span className="home-tile-num">{t.num}</span>
                <span className="home-tile-label">{t.label}</span>
                <span className="home-tile-sub">{t.sub}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container about-grid">
          <Reveal as="div" className="about-text">
            <div className="kicker">About</div>
            <h2 className="section-title">Clinical training, applied to data</h2>
            <p>
              Since October 2025 I have delivered {COUNTS.delivered} data analysis projects for MD, MBBS, clinical
              master and doctoral researchers across 10+ specialties: study design, cleaning, regression and
              survival models, diagnostic evaluation, publication-ready figures and thesis defence slides.
            </p>
            <p>
              Alongside that I co-authored qualitative studies on mass casualty preparedness in Sudanese hospitals,
              wrote my graduation thesis on stroke awareness, and helped run a post-conflict baseline assessment at Um Katti
              Hospital. I have held senior roles as SUMSA President and SCSD Deputy Director.
            </p>
            <p>
              Next: graduate study in computational neuroscience. The neuroimaging project is the first step,
              built around what a clinician actually needs from a diagnostic model.
            </p>
          </Reveal>
          <Reveal as="div">
            <div className="kicker">Toolkit</div>
            <ul className="toolkit">
              <li><strong>Statistics</strong><span>Regression · survival · ROC · SPSS · statsmodels</span></li>
              <li><strong>Machine learning</strong><span>scikit-learn · TensorFlow · Grad-CAM · GeoPandas</span></li>
              <li><strong>Tools</strong><span>Python · SQL · Git/GitHub · Google Apps Script</span></li>
              <li><strong>Clinical</strong><span>10 clinical rotations · survey methodology · scientific writing</span></li>
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  )
}
