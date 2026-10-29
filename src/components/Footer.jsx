import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        © {new Date().getFullYear()} Abdulrahman Sirelkatim — Medical Research Portfolio · <Link to="/admin" className="footer-admin">Admin</Link>
      </div>
    </footer>
  )
}
