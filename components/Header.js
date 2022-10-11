import Link from "next/link"
import styles from '../styles/Header.module.css'
import { FaUserCircle } from "react-icons/fa";


const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.head_elements}`}>
        <div className={styles.user_box}>
          <h3 className={styles.user_name}>Guest</h3>
          <div className={styles.user_img}>
            <FaUserCircle color="darkgrey"/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
