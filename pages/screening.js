import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Button from '../components/Button'
import Lottie from 'lottie-react'
import blackCat from '../public/animations/black-cat.json'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.wrappercolumn}>
          <div className={styles.animationcontainer} style={{marginBottom: '0%', marginTop: '-40%'}}>
            <Lottie animationData={blackCat} loop={true} />
          </div>
          <h1 className={styles.heading}>Tell us what happened?</h1>
          <Button name='I found a pet'></Button>
          <Button name='I lost a pet'></Button>
          <a href='#' className={styles.link} style={{marginTop: '2em'}}>Skip to Homepage</a> 
        </div>
      </main>
    </>
  )
}