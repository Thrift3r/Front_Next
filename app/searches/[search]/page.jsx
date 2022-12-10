'use client'

import { useSearchParams } from "next/navigation"

import Product from "../../components/Product/Product"
import styles from "./search.module.css"

export default function SearchProducts() {

  const searchParams = useSearchParams()

  const text = searchParams.get('text')
  const maxPrice = searchParams.get('maxprice')
  const minPrice = searchParams.get('minprice')

  console.log(text)
  console.log(maxPrice)
  console.log(minPrice)


  return (
    <div>
        <div className={styles.search_list}>
          <Product />
        </div>
    </div>
  )
}
