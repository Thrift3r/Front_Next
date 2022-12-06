import Image from 'next/image'
import Link from 'next/link'

import styles from './navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logomarca}>
          <Link href='/' className={styles.logomarca__link}>
            <Image src='/logo.svg' height={100} width={100} alt='Logo Thrift3r'/>
            <h1>Thrift3r</h1>
          </Link>
        </div>
        <div>
            
        </div>
      </div>
    </div>
  )
}
