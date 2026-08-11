import Reveal from '../components/Reveal.jsx'

export default function CV() {
  return (
    <section>
      <div className="container cv-layout">
        <Reveal as="aside" className="cv-sidebar">
          <img
            src="/photo/profile.jpg"
            alt="Abdulrahman Sirelkhatim"
            style={{ width: 220, height: 220, borderRadius: 16, objectFit: 'cover' }}
          />
          <h3>Contact</h3>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem' }}>
            Omdurman, Sudan<br />
            +249 908 115 725<br />
            <a href="mailto:abdulrahmanalsir4@gmail.com">abdulrahmanalsir4@gmail.com</a><br />
            <a href="https://github.com/abdoalsir" target="_blank" rel="noreferrer">GitHub ↗</a><br />
            <a href="#" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </p>
          <a href="/cv/Abdulrahman_Sirelkatim_CV_1Page.pdf" className="btn btn-outline cv-download" download>
            Download 1-Page CV
          </a>
          <a href="/cv/Abdulrahman_Sirelkatim_CV_2Page.pdf" className="btn btn-outline cv-download" download>
            Download 2-Page CV
          </a>
          <a href="/cv/Abdulrahman_Sirelkatim_CV_Full.pdf" className="btn btn-outline cv-download" download>
            Download Full CV
          </a>
        </Reveal>

        <div>
          <Reveal>
            <h1 className="section-title">Curriculum Vitae</h1>
            <p className="section-sub">
              Medical Graduate · Health Data Scientist · Organizational Leader
            </p>
          </Reveal>

          <Reveal as="div" className="cv-section">
            <h3>Education</h3>
            <div className="cv-entry">
              <div className="cv-entry-title">Bachelor of Medicine, Bachelor of Surgery (MBBS)</div>
              <div className="cv-entry-meta">Sudan University of Science and Technology (SUST) · Nov 2018 – Jul 2026 · Final GPA 3.22/4.0</div>
              <p style={{ marginTop: 6 }}>
                Academic progression maintained through the 2019 revolution, COVID-19, a 2021 faculty
                strike, and the ongoing armed conflict since April 2023. Graduation thesis: "KAP Study on
                Stroke Awareness Among Sudanese Population 2025" — Grade A.
              </p>
            </div>
            <div className="cv-entry">
              <div className="cv-entry-title">Certificate in Computer &amp; Data Science</div>
              <div className="cv-entry-meta">MIT Emerging Talent Program · Nov 2024 – Dec 2025 · 5% acceptance rate</div>
            </div>
            <div className="cv-entry">
              <div className="cv-entry-title">IBM Data Science Professional Certificate</div>
              <div className="cv-entry-meta">Coursera · Feb 2024 · 10-course specialization</div>
            </div>
            <div className="cv-entry">
              <div className="cv-entry-title">Mathematics for Machine Learning and Data Science Specialization</div>
              <div className="cv-entry-meta">DeepLearning.AI, Coursera · Jun 2025</div>
            </div>
            <div className="cv-entry">
              <div className="cv-entry-title">Introduction to Computer Science / Computational Thinking (6.00.1x, 6.00.2x)</div>
              <div className="cv-entry-meta">MITx, edX · Apr–May 2025</div>
            </div>
            <div className="cv-entry">
              <div className="cv-entry-title">Google Project Management Professional Certificate</div>
              <div className="cv-entry-meta">Coursera · Aug 2024</div>
            </div>
          </Reveal>

          <Reveal as="div" className="cv-section">
            <h3>Professional Experience</h3>
            <div className="cv-entry">
              <div className="cv-entry-title">Freelance Health Data Analyst — Self-Employed</div>
              <div className="cv-entry-meta">Oct 2025 – Present · Remote, Sudan</div>
              <p style={{ marginTop: 6 }}>
                23+ complete data analysis projects delivered for MD, MBBS, Clinical Master, and Doctoral
                researchers across 10+ medical specialties. Full-service statistical support from study
                design through publication-ready visualizations and thesis defense presentations.
              </p>
            </div>
            <div className="cv-entry">
              <div className="cv-entry-title">Deputy Director, Resources &amp; Excellence Management</div>
              <div className="cv-entry-meta">Sudanese Consortium for Surgical Development (SCSD) · Aug 2024 – May 2026</div>
              <p style={{ marginTop: 6 }}>
                Led recruitment across 4 departments (80+ applications), defined KPIs organization-wide,
                and built the consortium's website from scratch.
              </p>
            </div>
          </Reveal>

          <Reveal as="div" className="cv-section">
            <h3>Leadership</h3>
            <div className="cv-entry">
              <div className="cv-entry-title">President — Sudan University Medical Students' Association (SUMSA)</div>
              <div className="cv-entry-meta">Mar – Dec 2025 · 800+ students</div>
              <p style={{ marginTop: 6 }}>
                Rebuilt SUMSA's executive capacity from near-collapse; built the association's M&amp;E
                mobile app and certificate generation system; led constitutional reform ratified by 400+
                voters.
              </p>
            </div>
            <div className="cv-entry">
              <div className="cv-entry-title">Secretary General — SUMSA</div>
              <div className="cv-entry-meta">Feb – Dec 2023</div>
              <p style={{ marginTop: 6 }}>
                Directed association operations as de facto president; built a 2,800+ document digital
                archive from scratch; led fundraising that supported 98+ war-affected students.
              </p>
            </div>
            <div className="cv-entry">
              <div className="cv-entry-title">External Affairs Secretary — SUMSA</div>
              <div className="cv-entry-meta">Jun 2022 – Jan 2023</div>
              <p style={{ marginTop: 6 }}>
                Drafted 371 letters to government, NGO, and private-sector partners; secured $14,000+ in
                support for medical mission activities.
              </p>
            </div>
          </Reveal>

          <Reveal as="div" className="cv-section">
            <h3>International Experience</h3>
            <div className="cv-entry">
              <div className="cv-entry-title">MedSIN-Sudan / IFMSA — SCOPE National &amp; Local Roles</div>
              <div className="cv-entry-meta">2020 – 2024</div>
              <p style={{ marginTop: 6 }}>
                General Assistant and Capacity Building Development Assistant for SCOPE National; founded
                the TNEF facilitator training program; 43 facilitation sessions (100+ hours) delivered
                across 7 years.
              </p>
            </div>
            <div className="cv-entry">
              <div className="cv-entry-title">Pan African Youth Leadership Program</div>
              <div className="cv-entry-meta">University of Texas at Austin · US Department of State · Jul 2017</div>
            </div>
          </Reveal>

          <Reveal as="div" className="cv-section">
            <h3>Certifications</h3>
            <ul style={{ color: 'var(--text-soft)', paddingLeft: 20 }}>
              <li>IBM Data Science Professional Certificate — Coursera, 2024</li>
              <li>DeepLearning.AI Mathematics for ML and Data Science — Coursera, 2025</li>
              <li>Google Project Management Professional Certificate — Coursera, 2024</li>
              <li>MIT Emerging Talent Program — Foundation Track, 2024</li>
              <li>Advanced Cardiac Life Support (ACLS) — 2024–2026</li>
              <li>Basic Life Support (BLS) — 2024–2026</li>
              <li>Certified Exchange Facilitator — IFMSA PRET Training, Egypt, 2022</li>
              <li>Research Methodology Workshop — MedStat, 2021</li>
            </ul>
          </Reveal>

          <Reveal as="div" className="cv-section">
            <h3>Languages</h3>
            <ul style={{ color: 'var(--text-soft)', paddingLeft: 20 }}>
              <li>Arabic — Native</li>
              <li>English — Fluent (C1)</li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
