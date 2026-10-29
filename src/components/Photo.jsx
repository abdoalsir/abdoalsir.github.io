import { useState } from 'react'
import { PHOTO } from '../data/config.js'

export default function Photo({ className = '' }) {
  const [broken, setBroken] = useState(false)
  if (broken) return <div className={`photo-placeholder ${className}`}>Photo coming soon</div>
  return <img src={PHOTO} alt="Abdulrahman Sirelkhatim" className={`photo ${className}`} onError={() => setBroken(true)} />
}
