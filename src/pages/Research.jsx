import Reveal from '../components/Reveal.jsx'

const PHASES = [
  { title: 'Dataset Acquisition and Exploration', desc: 'Sourcing and exploring the Kaggle Western MRI dataset and the Nigerian African MRI dataset.' },
  { title: 'Baseline Model Training (Transfer Learning)', desc: 'Training a transfer-learning classifier on the Western dataset as the performance baseline.' },
  { title: 'Domain Shift Evaluation (Performance Gap Analysis)', desc: 'Evaluating the baseline model on African MRI data to quantify the cross-domain performance gap.' },
  { title: 'Grad-CAM Explainability Analysis', desc: 'Testing whether Grad-CAM attention maps stay clinically meaningful on African data, or track scanner artefacts instead.' },
  { title: 'Mobile Deployment Prototype (Flutter + TFLite)', desc: 'Converting the model to TensorFlow Lite and building an offline-capable Flutter prototype for low-connectivity clinical settings.' },
]

export default function Research() {
  return (
    <section>
      <div className="container">
        <Reveal>
          <span className="status-badge">● Active Research — In Progress</span>
          <h1 className="section-title">
            Evaluating Deep Learning Brain Tumour Classification Performance on African Neuroimaging Data
          </h1>
          <p className="hero-tagline" style={{ color: 'var(--teal)' }}>
            With Grad-CAM Explainability and Offline Mobile Deployment
          </p>
          <a
            href="https://github.com/abdoalsir/african-neuroimaging-ai"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
            style={{ marginTop: 12, marginBottom: 40 }}
          >
            View Repository ↗
          </a>
        </Reveal>

        <Reveal as="div" className="modal-section" style={{ maxWidth: 760 }}>
          <h2 style={{ fontSize: '1.3rem' }}>Why This Research</h2>
          <p>
            Brain tumour classifiers built on Western datasets now report accuracy near 99% — but none of
            them have been tested against African MRI data, which is typically produced on low-field
            scanners and drawn from a different patient demographic entirely. A Nigerian neuroimaging
            dataset published in <em>Scientific Data</em> (2025) opened this question for the first time.
          </p>
          <p>
            BraTS-Africa exists as a related resource, but it covers tumour segmentation only — the
            classification performance gap on African data remains completely unstudied. No published
            work has evaluated whether Grad-CAM explainability holds up on African scans, and no offline
            mobile deployment tool exists for this specific clinical use case.
          </p>
          <p>
            This project sets out to measure that gap directly, test whether model attention stays
            clinically meaningful outside the data it was trained on, and prototype a deployment path that
            works without reliable connectivity.
          </p>
        </Reveal>

        <Reveal as="div">
          <h2 style={{ fontSize: '1.3rem', marginTop: 40 }}>Research Questions</h2>
          <div className="callout-grid">
            <div className="callout">
              <span className="callout-num">01</span>
              What is the magnitude of the classification performance gap between Western-trained models and African MRI data?
            </div>
            <div className="callout">
              <span className="callout-num">02</span>
              Do Grad-CAM attention maps remain clinically meaningful on African data, or do they reflect scanner artefacts?
            </div>
            <div className="callout">
              <span className="callout-num">03</span>
              Can a TensorFlow Lite model maintain acceptable performance for offline mobile deployment?
            </div>
          </div>
        </Reveal>

        <Reveal as="div">
          <h2 style={{ fontSize: '1.3rem', marginTop: 40, marginBottom: 20 }}>Methodology</h2>
          <ol className="phase-list">
            {PHASES.map((p) => (
              <li key={p.title}>
                <strong style={{ color: 'var(--navy)' }}>{p.title}</strong>
                <p style={{ margin: '4px 0 0' }}>{p.desc}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal as="div">
          <h2 style={{ fontSize: '1.3rem', marginTop: 40 }}>Datasets</h2>
          <div className="dataset-grid">
            <div className="dataset-card">
              <h4>Kaggle Brain Tumour MRI Dataset</h4>
              <ul>
                <li>7,023 images</li>
                <li>4 classes: glioma, meningioma, pituitary adenoma, no tumour</li>
                <li>High-field Western clinical source</li>
                <li>Role: training data</li>
              </ul>
            </div>
            <div className="dataset-card">
              <h4>Nigerian Neuroimaging Dataset (Scientific Data, 2025)</h4>
              <ul>
                <li>0.3T and 1.5T scanners</li>
                <li>African clinical source</li>
                <li>Role: evaluation data</li>
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal as="div">
          <h2 style={{ fontSize: '1.3rem', marginTop: 40, marginBottom: 16 }}>Tech Stack</h2>
          <div className="tech-stack">
            {['Python', 'TensorFlow / Keras', 'TensorFlow Lite', 'Grad-CAM', 'Flutter', 'GeoPandas', 'Jupyter', 'Git'].map((t) => (
              <span className="tech-pill" key={t}>{t}</span>
            ))}
          </div>
        </Reveal>

        <Reveal as="div" style={{ marginTop: 40, maxWidth: 760 }}>
          <h2 style={{ fontSize: '1.3rem' }}>Clinical Context</h2>
          <p>
            This project is informed directly by clinical training in neurology and neuroanatomy.
            A glioma carries a fundamentally different prognosis from a meningioma — not just as a label
            difference, but in terms of what a clinician actually needs to know and act on. That
            distinction shapes how the explainability evaluation in this project is designed, rather than
            treating Grad-CAM output as a generic visual sanity check.
          </p>
        </Reveal>

        <Reveal as="div" style={{ marginTop: 32, maxWidth: 760, marginBottom: 20 }}>
          <h2 style={{ fontSize: '1.3rem' }}>Institutional Pathway</h2>
          <p>
            The Sudanese Consortium for Surgical Development holds a signed MoU with Sudan's Federal
            Ministry of Health, providing an institutional pathway for proposing clinical deployment once
            a validated prototype exists.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
