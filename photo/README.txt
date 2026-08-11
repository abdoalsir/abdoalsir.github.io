Put the profile photo here as: profile.jpg (square crop, min 400x400px)

Then update the two `photo-placeholder` divs in:
- src/pages/Home.jsx
- src/pages/CV.jsx

to:
<img src="/photo/profile.jpg" alt="Abdulrahman Sirelkhatim" style={{ width: 220, height: 220, borderRadius: 16, objectFit: 'cover' }} />
