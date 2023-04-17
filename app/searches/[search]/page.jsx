'use client'

import { useSearchParams } from "next/navigation"
import useSWR from 'swr';

import Product from "../../components/Product/Product"
import styles from "./search.module.css"

export default function SearchProducts() {

  const searchParams = useSearchParams()

  const text = searchParams.get('text')
  const maxPrice = searchParams.get('maxprice')
  const minPrice = searchParams.get('minprice')

  const { data, error } = useSWR(`http://127.0.0.1:8000/products/${text}`, async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  });

  console.log(`http://127.0.0.1:8000/product/${text}`)
  console.log(data)

  console.log(error)

  if (error) return <div>Failed to load data</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
        <div className={styles.search_list}>
          {
          data.map( e => (
              <Product 
                key={e.id}
                data={e}
              />
            ))}
        </div>
    </div>
  )
}
