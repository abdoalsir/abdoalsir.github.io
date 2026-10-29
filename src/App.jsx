import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Research from './pages/Research.jsx'
import Neuroimaging from './pages/Neuroimaging.jsx'
import HCICS from './pages/HCICS.jsx'
import Training from './pages/Training.jsx'
import CV from './pages/CV.jsx'
import Contact from './pages/Contact.jsx'
import Admin from './pages/Admin.jsx'

function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/research" element={<Research />} />
          <Route path="/research/neuroimaging" element={<Neuroimaging />} />
          <Route path="/hcics" element={<HCICS />} />
          <Route path="/training" element={<Training />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
