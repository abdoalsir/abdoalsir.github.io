import Reveal from '../components/Reveal.jsx'
import Accordion from '../components/Accordion.jsx'
import StatStrip from '../components/StatStrip.jsx'
import { Link } from 'react-router-dom'

const STATS = [
  { num: '28', label: 'Data analysis projects delivered' },
  { num: '800+', label: 'Students served as SUMSA President' },
  { num: '2,800+', label: 'Documents archived from scratch' },
  { num: '43', label: 'Facilitation sessions, 100+ hours' },
  { num: '400+', label: 'Voters in the 2026 SUMSA election' },
  { num: '371', label: 'Partnership letters drafted' },
  { num: '650', label: 'Patients served leading a field mission' },
  { num: '66,000', label: 'People covered in a rural health baseline study' },
]

export default function CV() {
  return (
    <section>
      <div className="container cv-layout">
        <Reveal as="aside" className="cv-sidebar">
          <div className="photo-placeholder" style={{ width: '100%', height: 180 }}>
            [ Photo placeholder ]
          </div>
          <h3>Contact</h3>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem' }}>
            Omdurman, Sudan<br />
            +249 908 115 725<br />
            <a href="mailto:abdulrahmanalsir4@gmail.com">abdulrahmanalsir4@gmail.com</a><br />
            <a href="https://github.com/abdoalsir" target="_blank" rel="noreferrer">GitHub ↗</a><br />
            <a href="#" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            {/* ↑ replace with your real LinkedIn URL */}
          </p>
          <a href="/cv/Abdulrahman_Sirelkatim_CV_1Page.pdf" className="btn btn-primary cv-download" download>
            Download 1-Page CV
          </a>
          <a href="/cv/Abdulrahman_Sirelkatim_CV_2Page.pdf" className="btn btn-outline cv-download" download>
            Download 2-Page CV
          </a>
        </Reveal>

        <div>
          <Reveal>
            <h1 className="section-title">My Journey</h1>
            <p className="section-sub">
              Seven years of clinical training, organizational leadership, and data science —
              built through revolution, a pandemic, a faculty strike, and an ongoing war.
            </p>
          </Reveal>

          <Reveal as="div" style={{ marginBottom: 8 }}>
            <p>
              First-generation medical graduate (MBBS, Sudan University of Science and Technology, 2026)
              and health data scientist, with progressively responsible leadership roles across medical
              student organizations serving 800+ members, national and international healthcare networks,
              and a surgical development consortium — all while completing medical education through four
              major disruptions. I combine clinical neuroscience training with machine learning and
              statistical analysis, aimed at health data science research and graduate study in
              computational neuroscience.
            </p>
          </Reveal>

          <Reveal as="div">
            <StatStrip stats={STATS} />
          </Reveal>

          {/* ===================== EDUCATION ===================== */}
          <Reveal as="div" className="journey-section" style={{ marginTop: 48 }}>
            <div className="journey-section-head">
              <span className="journey-section-num">01</span>
              <h2>Education</h2>
            </div>
            <div className="cv-entry">
              <div className="cv-entry-title">Bachelor of Medicine, Bachelor of Surgery (MBBS)</div>
              <div className="cv-entry-meta">Sudan University of Science and Technology · Nov 2018 – Jul 2026 · GPA 3.22/4.0</div>
              <p style={{ marginTop: 6 }}>
                Maintained academic progression through the 2019 revolution (10-month closure), COVID-19
                (6-month closure), a 2021 faculty strike (6 months), and ongoing displacement since the
                April 2023 armed conflict. Graduation thesis: "KAP Study on Stroke Awareness Among
                Sudanese Population 2025" — Grade A.
              </p>
            </div>
            <div className="cv-entry">
              <div className="cv-entry-title">Certificate in Computer &amp; Data Science</div>
              <div className="cv-entry-meta">MIT Emerging Talent Program · Nov 2024 – Dec 2025 · 5% acceptance rate</div>
              <p style={{ marginTop: 6 }}>
                Capstone: the <Link to="/hcics">Humanitarian Crisis Intelligence and Communication System</Link>.
              </p>
            </div>
            <div className="cv-entry">
              <div className="cv-entry-title">Pan African Youth Leadership Program</div>
              <div className="cv-entry-meta">University of Texas at Austin · US Department of State · Jul 2017</div>
            </div>
            <div className="cv-entry">
              <div className="cv-entry-title">Access Micro-scholarship Program</div>
              <div className="cv-entry-meta">US Embassy Khartoum · Nov 2015 – Nov 2017</div>
              <p style={{ marginTop: 6 }}>
                Two-year program for outstanding high school students — 600+ hours of intensive English
                instruction, ICDL computer skills, and community service.
              </p>
            </div>
          </Reveal>

          {/* ===================== PROFESSIONAL EXPERIENCE ===================== */}
          <Reveal as="div" className="journey-section">
            <div className="journey-section-head">
              <span className="journey-section-num">02</span>
              <h2>Professional Experience</h2>
            </div>
            <div className="cv-entry">
              <div className="cv-entry-title">Freelance Health Data Analyst</div>
              <div className="cv-entry-meta">Self-Employed · Oct 2025 – Present</div>
              <ul style={{ color: 'var(--text-soft)', paddingLeft: 20, marginTop: 8 }}>
                <li>28 complete data analysis projects for MD, MBBS, Clinical Master, and Doctoral researchers across 10+ specialties</li>
                <li>Full-service support: study design, data cleaning, regression modeling, survival analysis, diagnostic evaluation</li>
                <li>11 thesis defense presentations prepared — all clients successfully defended</li>
                <li>Earned first income within 6 weeks while supporting family through displacement</li>
              </ul>
            </div>
            <div className="cv-entry">
              <div className="cv-entry-title">Deputy Director, Resources &amp; Excellence Management</div>
              <div className="cv-entry-meta">Sudanese Consortium for Surgical Development (SCSD) · Aug 2024 – May 2026</div>
              <ul style={{ color: 'var(--text-soft)', paddingLeft: 20, marginTop: 8 }}>
                <li>Led recruitment across 4 departments — 80+ applications reviewed, 20–30 interviews conducted</li>
                <li>Defined KPIs for every organizational position, from Chief Visionary Officer to entry-level officers</li>
                <li>Built the consortium's website from scratch (HTML/CSS/PHP, 16+ pages) and trained staff to maintain it</li>
                <li>Acted as department director during a 5-week absence, attending executive board meetings</li>
              </ul>
            </div>
          </Reveal>

          {/* ===================== LEADERSHIP ===================== */}
          <Reveal as="div" className="journey-section">
            <div className="journey-section-head">
              <span className="journey-section-num">03</span>
              <h2>Organizational Leadership — SUMSA</h2>
            </div>
            <p className="journey-section-intro">
              Seven progressively senior roles across the Sudan University Medical Students' Association,
              the largest medical student body at SUST.
            </p>

            <Accordion
              title="President"
              meta="800+ students · Mar – Dec 2025"
              defaultOpen
              bullets={[
                "Rebuilt SUMSA from near-collapse — personally recruited the executive committee and restored full operational capacity within 2 months",
                "Built the SUMSA M&E mobile app: term management, member database, weighted 5-pillar evaluation, automated award generation",
                "Built a Windows certificate generation program with QR-code verification and bulk generation",
                "Co-coordinated MedXplore 2025 — a 7-day orientation program for 465 students (56% of the student body)",
                "Led SPDP, a 16-session professional development program attended by 216 members",
                "Led constitutional reform ratified by 400+ voters — every proposed amendment passed",
                "Headed the Elections Committee: built an automated vote-tabulation system for 400+ voters, results announced within 24 hours",
              ]}
            />
            <Accordion
              title="Secretary General"
              meta="7-member executive committee · Feb – Dec 2023"
              defaultOpen
              bullets={[
                "Directed all association operations as de facto president (no president elected that year)",
                "Built a 2,800+ document digital archive from scratch over 3 months, sourced from 38+ email accounts and multiple platforms",
                "Organized 36 meetings, drafted every agenda, and published minutes within 48 hours each time",
                "Coordinated fundraising that raised the SDG equivalent of ~$5,000, supporting 98+ war-affected students",
                "Achieved 100% constitutional compliance across the term",
                "Diagnosed 3 systemic organizational defects and proposed the archive, evaluation system, and credit-hours system later implemented as President",
              ]}
            />
            <Accordion
              title="Head of Elections Committee"
              meta="Oct – Dec 2025"
              bullets={[
                "Managed the full 2026 electoral process: nominations, eligibility verification, voting, and results",
                "Built a Google Forms voting system with 4-section identity verification",
                "Built a Google Sheets App Script to tabulate 400+ votes by batch — results announced within 24 hours",
              ]}
            />
            <Accordion
              title="Fundraising Committee Head"
              meta="8-member committee · Jun – Dec 2025"
              bullets={[
                "Led an 8-member committee supporting students financially affected by the April 2023 conflict",
                "Directed ~$500 equivalent in support to 15+ students since June 2025",
                "Committee total since August 2023: 98+ students supported, ~$5,000 equivalent raised",
              ]}
            />
            <Accordion
              title="External Affairs Secretary"
              meta="Jun 2022 – Jan 2023"
              bullets={[
                "Drafted and managed 371 letters to government bodies, NGOs, and international organizations — a single-day record of 59 letters for a funding deadline",
                "Secured $14,000+ in financial and in-kind support for the White Nile Medical Mission",
                "Represented the association at external events and signed collaboration contracts",
              ]}
            />
            <Accordion
              title="Students Council Member (Board Member)"
              meta="2019–2021, 2022, 2023, 2025"
              bullets={[
                "Approved internal regulations, strategic plans, and periodic performance reports",
                "Oversaw and monitored executive committee activities",
                "Sat on 7 interview committees across SUMSA and MedSIN-SUMSA",
              ]}
            />
            <Accordion
              title="Batch Coordinator"
              meta="SUST College of Medicine · May 2022 – Jul 2026"
              bullets={[
                "Primary liaison between a 4-member coordination team and an academic batch of 130+ students",
                "Coordinated batch-wide academic support and communication with faculty and administration through final years of medical school",
              ]}
            />
          </Reveal>

          {/* ===================== INTERNATIONAL ===================== */}
          <Reveal as="div" className="journey-section">
            <div className="journey-section-head">
              <span className="journey-section-num">04</span>
              <h2>International Experience — IFMSA / MedSIN-Sudan</h2>
            </div>
            <p className="journey-section-intro">
              Seven roles across Sudan's national representative body in the International Federation of
              Medical Students' Associations, spanning exchange programs and global health education.
            </p>

            <Accordion
              title="General Assistant, SCOPE National"
              meta="MedSIN-Sudan · Jan – Dec 2023"
              bullets={[
                "Organized the first-ever Online General Assembly post-conflict, achieving one of the highest satisfaction rates of any standing committee",
                "Represented MedSIN-Sudan SCOPE at IFMSA international sessions and delegation meetings",
              ]}
            />
            <Accordion
              title="Capacity Building Development Assistant, SCOPE National"
              meta="MedSIN-Sudan · Jul – Dec 2021"
              defaultOpen
              bullets={[
                "Organized the first national SCOPE activity in 5 years — a 3-day Global Health and Universal Health Coverage workshop",
                "Founded TNEF (Training National Exchange Facilitators): designed the curriculum and governance framework, growing certified facilitators from 7 to 20+; now an official SCOPE Sudan program",
                "Drafted the first-ever SCOPE Sudan Capacity Building Guidelines",
                "Named \"Assistant of the Term\" — 100% of planned objectives achieved",
              ]}
            />
            <Accordion
              title="Vice President for External Affairs"
              meta="MedSIN-SUMSA · Jun 2022 – Jan 2023"
              bullets={[
                "Represented SUMSA at national LMO meetings with the MedSIN-Sudan Executive Board",
                "Sat on the MedSIN-SUMSA 3-year strategy drafting committee",
              ]}
            />
            <Accordion
              title="Local Exchange Officer (LEO), SCOPE"
              meta="MedSIN-SUMSA · Jun 2021 – May 2022"
              bullets={[
                "Organized and facilitated training sessions; submitted monthly committee reports",
                "Advanced exchange-program activation requirements, securing dean's approval",
              ]}
            />
            <Accordion
              title="Development Assistant, SCOPE"
              meta="MedSIN-SUMSA · Jun 2020 – Jan 2021"
              bullets={[
                "Supported SCOPE office establishment during its founding phase",
                "Co-organized 2 training sessions including international IFMSA facilitator coordination",
              ]}
            />
            <Accordion
              title="SCOPE Initiatives Reform — Small Working Group"
              meta="IFMSA International Team · Nov 2023 – Jun 2024"
              bullets={[
                "Researched and drafted sections of the SCOPE Initiatives manual, distributed to SCOPE members worldwide",
              ]}
            />
            <Accordion
              title="SCOPE Plenary Secretary"
              meta="MedSIN-Sudan General Assembly · 2022"
              bullets={["Managed plenary sessions: presentation, attendance, minutes, and voting oversight"]}
            />
            <p style={{ marginTop: 10, fontSize: '0.9rem' }}>
              <strong>Total facilitation record:</strong> 43 sessions, 100+ hours across 7 years (2019–2026).
              Certified Facilitator, IFMSA PRET Training, Egypt (2022).
            </p>
          </Reveal>

          {/* ===================== FIELD & CLINICAL ===================== */}
          <Reveal as="div" className="journey-section">
            <div className="journey-section-head">
              <span className="journey-section-num">05</span>
              <h2>Field &amp; Clinical Experience</h2>
            </div>

            <div className="callout" style={{ borderLeftColor: 'var(--teal)', marginBottom: 20 }}>
              <strong style={{ color: 'var(--navy)' }}>Rural Health Trainee — Um Katti Hospital, Karari Locality</strong>
              <p style={{ marginTop: 8, marginBottom: 0 }}>
                As part of an 8-member student team, conducted the first comprehensive post-conflict
                epidemiological baseline assessment of the sole referral facility for ~66,000 people
                across 19 villages. Co-designed and administered a stratified household survey of 262
                households (1,355 persons), conducted 26 key informant interviews, and built 8
                standardized structured-observation checklists spanning infrastructure, drug availability,
                and reproductive health programme performance. Co-authored the final report submitted to
                SUST's Department of Community Medicine. (April 2026)
              </p>
            </div>

            <div className="cv-entry">
              <div className="cv-entry-title">Group Head, SUMSA Medical Mission — Garri Area</div>
              <div className="cv-entry-meta">Khartoum State · April 2026</div>
              <p style={{ marginTop: 6 }}>
                Led a field deployment of 32 students, 8 lab members, a pharmacist, and security, serving
                600–650 patients in one of Khartoum's most war-affected areas — overseeing 6 offices from
                clinics to health education.
              </p>
            </div>
            <div className="cv-entry">
              <div className="cv-entry-title">Vice Head, Organizing Committee — SUMSA Medical Mission</div>
              <div className="cv-entry-meta">Garri · Dec 2025 – Apr 2026</div>
            </div>
            <div className="cv-entry">
              <div className="cv-entry-title">Executive Board Representative — White Nile State Medical Mission</div>
              <div className="cv-entry-meta">Jan 2023</div>
            </div>
            <div className="cv-entry">
              <div className="cv-entry-title">MBBS Clinical Training</div>
              <div className="cv-entry-meta">SUST · 2022 – 2026 · Multiple teaching hospitals</div>
              <p style={{ marginTop: 6 }}>
                Full clinical rotations across 14 specialties including Internal Medicine, Surgery,
                OB/GYN, Pediatrics, Psychiatry, Ophthalmology, and Emergency Medicine.
              </p>
            </div>
          </Reveal>

          {/* ===================== SELECTED PROJECTS ===================== */}
          <Reveal as="div" className="journey-section">
            <div className="journey-section-head">
              <span className="journey-section-num">06</span>
              <h2>Selected Projects</h2>
            </div>

            <Link to="/projects" className="project-link-card">
              <div className="project-link-card-title">28 Medical Research Data Analysis Projects</div>
              <div className="project-link-card-meta">Freelance · Python · SPSS · 2024–2026</div>
              <div className="project-link-card-desc">
                Infectious disease, psychiatry, ophthalmology, maternal health, and medical education
                research. Full portfolio →
              </div>
            </Link>

            <Link to="/hcics" className="project-link-card">
              <div className="project-link-card-title">Humanitarian Crisis Intelligence and Communication System</div>
              <div className="project-link-card-meta">MIT Emerging Talent Capstone · Python · GeoPandas · Streamlit</div>
              <div className="project-link-card-desc">
                Geospatial platform fusing IOM displacement data with health-facility data for Sudan. Read more →
              </div>
            </Link>

            <div className="project-link-card" style={{ borderLeftColor: 'var(--border)', cursor: 'default' }}>
              <div className="project-link-card-title">SUMSA M&amp;E Mobile App + Windows Certificate System</div>
              <div className="project-link-card-meta">Flutter · Windows · VBA · 2025</div>
              <div className="project-link-card-desc">
                A 5-pillar weighted evaluation system and an HTML-template, QR-verified certificate
                generator, both built and deployed for SUMSA's 800+ members.
              </div>
            </div>

            <div className="project-link-card" style={{ borderLeftColor: 'var(--border)', cursor: 'default' }}>
              <div className="project-link-card-title">SpaceX Falcon 9 Landing Prediction</div>
              <div className="project-link-card-meta">IBM Data Science Capstone · Python · scikit-learn · Plotly · 2024</div>
              <div className="project-link-card-desc">
                Predicted rocket landing success using classification models, with an interactive
                dashboard visualization.
              </div>
            </div>
          </Reveal>

          {/* ===================== SKILLS ===================== */}
          <Reveal as="div" className="journey-section">
            <div className="journey-section-head">
              <span className="journey-section-num">07</span>
              <h2>Technical Skills</h2>
            </div>
            <div className="skill-cat-grid">
              <div className="skill-cat-card">
                <h4>Programming &amp; Data Science</h4>
                <p>Python (pandas, NumPy, scikit-learn, SciPy, statsmodels, GeoPandas) · SPSS · SQL · Jupyter · VS Code</p>
              </div>
              <div className="skill-cat-card">
                <h4>Software Development</h4>
                <p>Flutter · HTML/CSS/PHP · Windows app development · Git/GitHub · Google Apps Script</p>
              </div>
              <div className="skill-cat-card">
                <h4>Productivity &amp; Collaboration</h4>
                <p>Microsoft Office &amp; Google Workspace (advanced) · Notion · Asana · digital archive management</p>
              </div>
              <div className="skill-cat-card">
                <h4>Clinical &amp; Medical</h4>
                <p>ACLS &amp; BLS certified · full clinical rotations across 14+ specialties · study design &amp; survey methodology</p>
              </div>
            </div>
          </Reveal>

          <Reveal as="div" className="journey-section">
            <div className="journey-section-head">
              <span className="journey-section-num">08</span>
              <h2>Leadership &amp; Soft Skills</h2>
            </div>
            <div className="skill-cat-grid">
              <div className="skill-cat-card">
                <h4>Executive Leadership</h4>
                <p>Crisis leadership · delegation &amp; succession planning · systems design &amp; process optimization</p>
              </div>
              <div className="skill-cat-card">
                <h4>People &amp; Resource Management</h4>
                <p>Cross-functional team building · recruitment · financial stewardship under scarcity</p>
              </div>
              <div className="skill-cat-card">
                <h4>Communication &amp; Engagement</h4>
                <p>Stakeholder management · written and verbal communication</p>
              </div>
              <div className="skill-cat-card">
                <h4>Adaptability &amp; Mindset</h4>
                <p>Resilience · comfort with ambiguity · growth mindset</p>
              </div>
            </div>
          </Reveal>

          {/* ===================== CERTIFICATIONS ===================== */}
          <Reveal as="div" className="cv-section">
            <h3>Certifications &amp; Professional Development</h3>
            <ul style={{ color: 'var(--text-soft)', paddingLeft: 20 }}>
              <li>IBM Data Science Professional Certificate — Coursera, 2024</li>
              <li>DeepLearning.AI Mathematics for ML and Data Science — Coursera, 2025</li>
              <li>Google Project Management Professional Certificate — Coursera, 2024</li>
              <li>IBM Data Science Fundamentals with Python and SQL — Coursera, 2024</li>
              <li>MITx 6.00.1x &amp; 6.00.2x, Introduction to CS &amp; Computational Thinking — edX, 2025</li>
              <li>MIT Emerging Talent Program — Foundation Track, 2024</li>
              <li>Advanced Cardiac Life Support (ACLS) — 2024–2026 · Basic Life Support (BLS) — 2024–2026</li>
              <li>Certified Facilitator — IFMSA PRET Training, Egypt, 2022</li>
              <li>Research Methodology Workshop — MedStat, 2021</li>
            </ul>
          </Reveal>

          <Reveal as="div" className="cv-section">
            <h3>Languages</h3>
            <ul style={{ color: 'var(--text-soft)', paddingLeft: 20 }}>
              <li>Arabic — Native</li>
              <li>English — Fluent (C1), 600+ hours of intensive instruction</li>
            </ul>
          </Reveal>

          <Reveal as="div" style={{ marginTop: 8, marginBottom: 40 }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-soft)' }}>
              References available upon request — from SUMSA, SCSD, MedSIN-Sudan, MIT Emerging Talent
              Program, and freelance research clients.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
