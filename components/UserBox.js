import { FaUserCircle } from "react-icons/fa";
import { FiSettings, FiHeart, FiBell } from "react-icons/fi";

import styles from "../styles/UserBox.module.css"

const UserBox = () => {
  return (
    <div className={styles.relative}>
    <div className={styles.user_min}>
      <div className={styles.user_box}>
        <h3 className={styles.user_name}>Acceder</h3>
        <div className={styles.user_img}>
          <FaUserCircle color="darkgrey"/>
        </div>
      </div>
      <div className={styles.user_menu}>
        <a><FiBell />Alertas</a>
        <a><FiHeart />Favoritos</a>
        <a><FiSettings />Configuración</a>
      </div>
    </div>
    </div>


  )
}

export default UserBox
