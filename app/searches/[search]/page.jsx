'use client'

import { useSearchParams } from "next/navigation"

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
        hello world
    </div>
  )
}
