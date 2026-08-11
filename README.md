# Abdulrahman Sirelkhatim — Portfolio Website

React + Vite portfolio site showcasing 23 medical research projects, deployed to
GitHub Pages at [abdoalsir.github.io](https://abdoalsir.github.io).

## Structure

```
src/
  components/     Navbar, Footer, ProjectCard, ProjectModal, FilterBar, Reveal, PulseSignature
  pages/          Home, Projects, Research, CV, Contact
  data/
    projects.json     ← all project data lives here
    categories.js      category labels + colors
  index.css       design tokens + all styling
admin/
  add-project.mjs ← local tool for adding new projects (see below)
public/
  cv/             1-page and 2-page CV PDFs
  photo/          profile photo goes here
  404.html        GitHub Pages SPA routing fix
```

## Running locally

```bash
npm install
npm run dev        # http://localhost:5173
```

## Adding a new project — no code editing required

```bash
npm run admin
```

This starts a local, private form in your terminal. It walks you through the
project's details, writes the entry into `src/data/projects.json` in the right
format, then automatically runs `git add`, `git commit`, and `git push` for
you. GitHub Pages rebuilds automatically after the push — usually live within
a minute or two.

Nothing here is public-facing. It only runs on your machine using your own
`git` login, so there's no login page, no OAuth app, nothing that can be
accessed by anyone else.

If you'd rather publish immediately instead of waiting for GitHub Pages to
rebuild on its own, also run:

```bash
npm run deploy
```

## Manual edits

You can also edit `src/data/projects.json` directly in any text editor — it's
a plain JSON array. Just keep the same field names as the existing entries.
After editing, commit and push as usual (or use `npm run admin` next time to
skip the manual JSON editing).

## Swapping in the real profile photo

Drop the photo at `public/photo/profile.jpg`, then replace the
`photo-placeholder` div in both `src/pages/Home.jsx` and `src/pages/CV.jsx`
with:

```jsx
<img
  src="/photo/profile.jpg"
  alt="Abdulrahman Sirelkhatim"
  style={{ width: 220, height: 220, borderRadius: 16, objectFit: 'cover' }}
/>
```

## Contact form

The contact form in `src/pages/Contact.jsx` posts to Formspree. Create a free
form at [formspree.io](https://formspree.io) and replace `YOUR_FORM_ID` in
that file with your real form ID.

## Deployment

```bash
npm run deploy
```

Builds the site and pushes it to the `gh-pages` branch. First time only: in
the repo's Settings → Pages, set the source to the `gh-pages` branch.
