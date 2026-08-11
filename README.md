# Abdulrahman Sirelkhatim — Portfolio

🔗 **Live site:** [abdoalsir.github.io](https://abdoalsir.github.io)

Personal portfolio of Abdulrahman Sirelkhatim Tagalsir Ali — medical graduate
(MBBS) and health data scientist. Showcases 23 completed medical research
data analysis projects across infectious disease, mental health,
non-communicable diseases, medical education, maternal & child health, and
healthcare systems, plus an active research project applying deep learning
to brain tumour classification on African neuroimaging data.

## Pages

| Page | Description |
|---|---|
| **Home** | Introduction, bio, and skills overview |
| **Projects** | All 23 research projects, filterable by category, with a detail modal for each (research question, methods, tools, GitHub link) |
| **Research** | Deep dive into the ongoing African Neuroimaging AI project — motivation, research questions, methodology, datasets, tech stack |
| **CV** | Full curriculum vitae with downloadable 1-page and 2-page PDF versions |
| **Contact** | Contact details, links, and a message form |

## Tech Stack

- **React 19 + Vite** — app framework and build tooling
- **React Router** — client-side routing
- **Plain CSS** (`src/index.css`) — design system with CSS custom properties, no framework
- **gh-pages** — deployment to GitHub Pages
- **Formspree** — contact form backend

## Project Structure

```
src/
  components/       Navbar, Footer, ProjectCard, ProjectModal, FilterBar, Reveal, PulseSignature
  pages/            Home, Projects, Research, CV, Contact
  data/
    projects.json   All project data — the single source of truth for the Projects page
    categories.js   Category labels and colors
  index.css         Design tokens and all styling
admin/
  add-project.mjs   Local CLI tool for adding new projects (see below)
public/
  cv/               1-page and 2-page CV PDFs
  photo/            Profile photo
  404.html          GitHub Pages SPA routing fix
```

## Running Locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Adding a New Project

No code editing required — run:

```bash
npm run admin
```

This opens a local, private prompt in your terminal that walks you through
the new project's details (title, category, methods, tools, GitHub link,
etc.), writes it into `src/data/projects.json` in the correct format, and
automatically runs `git add`, `git commit`, and `git push`. GitHub Pages
rebuilds automatically after the push.

This tool only runs on your own machine using your own git credentials —
there's no login, no public admin page, nothing anyone else can access.

## Deploying

```bash
npm run deploy
```

Builds the site and pushes the built files to the `gh-pages` branch, which
is what GitHub Pages actually serves. (Settings → Pages → Source must be set
to the `gh-pages` branch — a one-time setup step.)

## License

Personal portfolio — content and project data © Abdulrahman Sirelkhatim.
