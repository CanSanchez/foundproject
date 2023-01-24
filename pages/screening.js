import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Button from '../components/Button'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div>
          <h1 className={styles.heading}>Tell us what happened?</h1>
          <Button name='I found a pet'></Button>
          <Button name='I lost a pet'></Button> 
        </div>
      </main>
    </>
  )
}