import Link from "next/link"

import styles from '../styles/Header.module.css'
import UserBox from "./UserBox"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.head_elements}`}>
        <UserBox />
      </div>
    </header>
  )
}

export default Header
