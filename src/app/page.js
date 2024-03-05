import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
        <a
            href="http://localhost:3000/products"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://localhost:3000/products
          </a>
        </p>
        <div> 
            By{' Vinicius Monteiro'}

        </div>
      </div>
    </main>
  )
}
