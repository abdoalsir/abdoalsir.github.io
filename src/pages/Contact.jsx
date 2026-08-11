import Reveal from '../components/Reveal.jsx'

export default function Contact() {
  return (
    <section>
      <div className="container">
        <Reveal>
          <h1 className="section-title">Contact</h1>
        </Reveal>

        <div className="contact-grid">
          <Reveal as="div">
            <ul className="contact-list">
              <li>
                <strong>Email</strong><br />
                <a href="mailto:abdulrahmanalsir4@gmail.com">abdulrahmanalsir4@gmail.com</a>
              </li>
              <li>
                <strong>LinkedIn</strong><br />
                <a href="https://www.linkedin.com/in/abdulrahman-sirelkhatim-18585b22a/" target="_blank" rel="noreferrer">
                  https://www.linkedin.com/in/abdulrahman-sirelkhatim-18585b22a/
                </a>
              </li>
              <li>
                <strong>GitHub</strong><br />
                <a href="https://github.com/abdoalsir" target="_blank" rel="noreferrer">github.com/abdoalsir</a>
              </li>
              <li>
                <strong>Research Presentations</strong><br />
                <a
                  href="https://drive.google.com/drive/folders/1-irrFo4RHEPPAnktyGTrFWLTLPqpm1gH?usp=drive_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  View thesis defense presentations (Google Drive) ↗
                </a>
              </li>
            </ul>
            <div className="open-note">
              I am currently open to remote data analysis collaborations, research assistant positions,
              and graduate study opportunities.
            </div>
          </Reveal>

          <Reveal as="div">
            {/* Replace YOUR_FORM_ID with your real Formspree endpoint from formspree.io */}
            <form className="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />
              <textarea name="message" rows="6" placeholder="Message" required />
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
