import styles from './page.module.css'
import { BsSearch } from "react-icons/bs";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.contenedor}>
        <div className={styles.slogan}>
          <h1>Busca lo que quieras</h1>
          <h1>al precio que quieras</h1>
        </div>
        <div className={styles.search}>
          <input type='text' placeholder='Búsqueda'/>
          <BsSearch 
            className={styles.search_button}
          />
        </div>
      </div>
    </main>
  )
}
