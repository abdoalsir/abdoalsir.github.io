// ============================================================
//  SITE SETTINGS — edit this one file for links and the sheet.
// ============================================================

export const PROFILE = {
  name: 'Abdulrahman Sirelkhatim Tagalsir Ali',
  email: 'abdulrahmanalsir4@gmail.com',
  github: 'https://github.com/abdoalsir',
  // Paste your real LinkedIn URL between the quotes:
  linkedin: 'https://www.linkedin.com/in/abdulrahman-sirelkhatim-18585b22a/',
  // Formspree form ID for the contact form (the part after /f/):
  formspreeId: 'xwleozle',
}

// ------------------------------------------------------------
//  GOOGLE SHEET (the "admin dashboard")
//  After following README-ADMIN.md, paste the three "Publish to web
//  → CSV" links here. Leave a link empty ('') and that page simply
//  uses the data bundled in the site.
// ------------------------------------------------------------
export const SHEET = {
  projects: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQRJKtSiKMScCwMt5veVUUl50udUUC5jxXTWLOR_ylhPyKWbeoPSfkMKUZYyaGhng0S1WhRxRaIKpoR/pub?gid=1762776004&single=true&output=csv',
  papers: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQRJKtSiKMScCwMt5veVUUl50udUUC5jxXTWLOR_ylhPyKWbeoPSfkMKUZYyaGhng0S1WhRxRaIKpoR/pub?gid=1395232083&single=true&output=csv',
  sessions: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQRJKtSiKMScCwMt5veVUUl50udUUC5jxXTWLOR_ylhPyKWbeoPSfkMKUZYyaGhng0S1WhRxRaIKpoR/pub?gid=1012130023&single=true&output=csv',
  // Link that opens the sheet for editing (for the /admin page button):
  editUrl: 'https://docs.google.com/spreadsheets/d/1t9vq-G1xY1_BBzsGlg74fbcZsVqVYkblnRDowm0HzTc/edit?usp=sharing',
}

// CV downloads. Files live in /public/cv/. Leave `full` empty to hide that button.
export const CV_FILES = {
  onePage: '/cv/Abdulrahman_Sirelkatim_CV_1Page.pdf',
  twoPage: '/cv/Abdulrahman_Sirelkatim_CV_2Page.pdf',
  full: '/cv/Abdulrahman_Sirelkatim_CV_Full.pdf',
}

// Profile photo: put the file at /public/photo/profile.jpg (square, 400px+).
export const PHOTO = '/photo/profile.jpg'

// Numbers shown on the home page that are not computed from the data.
export const COUNTS = { delivered: 25 }
