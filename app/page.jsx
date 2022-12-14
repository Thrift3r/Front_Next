'use client'

import styles from './page.module.css'

import Link from 'next/link';
import { BsSearch } from "react-icons/bs";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {

  const router = useRouter()

  const [textSearch, setTextSearch] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [minPrice, setMinprice] = useState('')

  const path = `/searches/search?text=${textSearch}&maxprice=${maxPrice}&minprice=${minPrice}`

  const handleSubmit = e => {
    e.preventDefault()
    router.push(path)
  }

  return (
    <main className={styles.main}>
      <div className={styles.contenedor}>
        <div className={styles.slogan}>
          <h1>Busca lo que quieras</h1>
          <h1>al precio que quieras</h1>
        </div>
        <div className={styles.search}>
          <form onSubmit={handleSubmit}>
            <input 
              type='text' 
              placeholder='Búsqueda' 
              value={textSearch} 
              onChange={e => setTextSearch(e.target.value)}
            />
          </form>
          <Link href={path}>
            <BsSearch 
                className={styles.search_button}
              />
          </Link>
        </div>
      </div>
    </main>
  )
}
