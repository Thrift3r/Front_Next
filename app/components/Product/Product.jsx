import styles from './product.module.css'
import Image from 'next/image'

export default function Product({key, data}) {

  console.log(data)

  return (
    <div className={styles.product_box} >
      <p>{data.title}</p>
      <Image 
        src={data.images[0]}
        alt={data.title}
        width={150}
        height={150}
      />
      <p>{data.description}</p>
      <p>{data.price}</p>
    </div>
  )
}
