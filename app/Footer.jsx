import './globals.css'

import Link from "next/link"


export default function Footer() {
  return (
    <div className="footer">
      <div className="footer_links">
        <Link href="/legal">Aviso Legal</Link>
        <Link href="/privacity">Política de privacidad</Link>
        <Link href="/cookies">Política de cookies</Link>
      </div>
    </div>
  )
}
