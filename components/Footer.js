import Link from "next/link"
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_links}>
        <Link href="">Aviso Legal</Link>
        <Link href="">Política de privacidad</Link>
        <Link href="">Política de cookies</Link>
      </div>
    </div>
  )
}

export default Footer
