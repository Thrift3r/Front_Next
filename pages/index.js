import Layout from '../components/Layout'

import styles from '../styles/Index.module.css'

export default function Home() {
  return (
    <Layout
      title={'Index'}
    >
      <div className={styles.index_page}>
        <div>
          <div className={styles.index_intro}>
            <h1>
              Busca lo que quieras <br/> 
              al precio que quieras
            </h1>
          </div>
          <div className={styles.search_box}>

          </div>
        </div>
      </div>
    </Layout>
  )
}
