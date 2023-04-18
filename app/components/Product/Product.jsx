import Link from 'next/link'
import styles from './product.module.css'
import Image from 'next/image'

export default function Product({key, data}) {

  console.log(data)

  return (
    <div className={styles.product_box} >
      <Image 
        className={styles.image}
        src={data.images[0]}
        alt={data.title}
        width={350}
        height={250}
      />
      <p className={styles.tittle}>{data.title}</p>
      <p className={styles.description}>{data.description}</p>
      <div className={styles.foot}>
        <p className={styles.price}>{data.price}€</p>
        <Link 
          className={styles.link}
          href={`https://es.wallapop.com/item/${data.url}`} 
          target="_blank"
        >Comprar</Link>
      </div>
    </div>
  )
}
