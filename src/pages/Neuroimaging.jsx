import Reveal from '../components/Reveal.jsx'

const OBJECTIVES = [
  ['Baseline', 'Fine-tune a pretrained CNN (MobileNet or EfficientNet) on the Kaggle brain tumour MRI set until it matches published performance, so any later gap is a domain-shift finding and not a weak model.'],
  ['Domain shift', 'Run the model on the Nigerian clinical MRI set. It contains no tumours, so every tumour prediction is a false positive: a specificity stress test, not a like-for-like accuracy comparison.'],
  ['Explainability', 'Test whether Grad-CAM stays trustworthy under shift using three metrics that need no radiologist annotations.'],
  ['Offline deployment', 'Quantise to TensorFlow Lite (float16), wrap it in a minimal Flutter prototype, and measure what quantisation costs on both datasets.'],
]
const METRICS = [
  ['Sanity check', 'Randomise the model weights step by step. If the Grad-CAM map barely changes, it never reflected the model.'],
  ['Perturbation faithfulness (AOPC)', 'Mask the highlighted region and measure the drop in confidence, focusing on the false positives.'],
  ['Consistency', 'Check that cases with the same predicted class get spatially consistent explanations, within each dataset.'],
]
const TIMELINE = [
  ['1', '27 Aug – 3 Sep', 'Literature review, proposal lock'],
  ['2–3', '4 – 18 Sep', 'Data acquisition and preprocessing'],
  ['4–7', '19 Sep – 17 Oct', 'Baseline training'],
  ['8–10', '18 Oct – 8 Nov', 'Domain-shift evaluation'],
  ['11–13', '9 – 30 Nov', 'Explainability analysis'],
  ['14–15', '1 – 15 Dec', 'Mobile deployment'],
  ['16', '15 – 22 Dec', 'Write-up'],
]
const LIMITS = [
  'The datasets do not match: tumour-labelled training data against tumour-free evaluation data. This is a robustness stress test and is described that way throughout.',
  'No radiologist is available to annotate ground-truth regions, so explainability relies on annotation-free metrics.',
  'Faithfulness metrics can disagree with each other. All are reported, including disagreements.',
  'The training set covers three tumour types plus no tumour, narrower than real clinical practice.',
  'Single-author project without an ethics board. Both datasets are public and de-identified.',
]

export default function Neuroimaging() {
  return (
    <section>
      <div className="container">
        <Reveal>
          <span className="status-badge">● Active research · proposal dated 27 Aug 2026</span>
          <h1 className="section-title">
            Evaluating Deep Learning Brain Tumour Classification on African Neuroimaging Data
          </h1>
          <p className="hero-tagline" style={{ color: 'var(--teal)' }}>
            With Grad-CAM explainability and offline mobile deployment
          </p>
          <a href="https://github.com/abdoalsir/african-neuroimaging-ai" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ marginTop: 12, marginBottom: 40 }}>
            View repository ↗
          </a>
        </Reveal>

        <Reveal as="div" className="modal-section" style={{ maxWidth: 760 }}>
          <h2 className="h-sm">The question</h2>
          <p>
            Brain tumour classifiers routinely report over 95% accuracy, almost always on high-field
            scanners in Western hospitals. Sudan's imaging looks different: conflict has left most
            facilities non-operational and the remaining centres often run lower-field scanners.
          </p>
          <p>
            So the question is not how accurate the model is, but <strong>how much worse it gets, and
            whether its reasoning can still be trusted, when the data looks different from what it was
            trained on.</strong> No African brain tumour classification benchmark exists. BraTS-Africa covers segmentation only.
          </p>
        </Reveal>

        <Reveal as="div">
          <h2 className="h-sm" style={{ marginTop: 40 }}>Four objectives</h2>
          <div className="callout-grid callout-grid-4">
            {OBJECTIVES.map(([t, d], i) => (
              <div className="callout" key={t}>
                <span className="callout-num">0{i + 1}</span>
                <strong>{t}.</strong> {d}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal as="div">
          <h2 className="h-sm" style={{ marginTop: 40 }}>Datasets</h2>
          <div className="dataset-grid">
            <div className="dataset-card">
              <h4>Kaggle Brain Tumor MRI</h4>
              <ul>
                <li>7,023 images, 4 classes: glioma, meningioma, pituitary adenoma, no tumour</li>
                <li>High-field Western clinical source</li>
                <li>Role: training and held-out test</li>
              </ul>
            </div>
            <div className="dataset-card">
              <h4>Nigerian clinical MRI (Wogu et al., 2025)</h4>
              <ul>
                <li>T1, T2 and FLAIR from 0.3T and 1.5T scanners</li>
                <li>Healthy controls, dementia, Parkinson's disease. No tumours.</li>
                <li>Role: domain-shift evaluation, split by field strength and condition</li>
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal as="div">
          <h2 className="h-sm" style={{ marginTop: 40 }}>Measuring whether the explanations can be trusted</h2>
          <ol className="phase-list">
            {METRICS.map(([t, d]) => (
              <li key={t}><strong style={{ color: 'var(--navy)' }}>{t}</strong><p style={{ margin: '4px 0 0' }}>{d}</p></li>
            ))}
          </ol>
        </Reveal>

        <Reveal as="div">
          <h2 className="h-sm" style={{ marginTop: 40 }}>16-week plan</h2>
          <table className="plain-table">
            <thead><tr><th>Weeks</th><th>2026</th><th>Deliverable</th></tr></thead>
            <tbody>{TIMELINE.map((r) => <tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td></tr>)}</tbody>
          </table>
          <p style={{ fontSize: '0.9rem' }}>Self-funded: the only anticipated cost is internet access.</p>
        </Reveal>

        <Reveal as="div">
          <h2 className="h-sm" style={{ marginTop: 40 }}>Stated limitations</h2>
          <ul className="plain-list">{LIMITS.map((l) => <li key={l}>{l}</li>)}</ul>
        </Reveal>

        <Reveal as="div" style={{ marginBottom: 20 }}>
          <h2 className="h-sm" style={{ marginTop: 40 }}>Tech stack</h2>
          <div className="tech-stack">
            {['Python', 'TensorFlow / Keras', 'TensorFlow Lite', 'Grad-CAM', 'Flutter', 'Jupyter', 'Git'].map((t) => <span className="tech-pill" key={t}>{t}</span>)}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
