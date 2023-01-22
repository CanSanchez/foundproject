import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import logo from '../public/logo/paw.png'
import Button from '../comps/Button'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Found</title>
        <meta name="description" content="Found is an app that digitizes missing pet posters. It aims to elimate paper wastes, boost exposure, and bring your best friend back home quickly and safely." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap" rel="stylesheet" />
      </Head>
      <main className={styles.main}>
        <div className={styles.wrappercolumn}>
          <Image src={logo} width={100}></Image>
          <h1 className={styles.heading}>Never lose your <br></br> best friend again</h1>

          <Button name='Get Started'></Button>
            
          </div>
      </main>
    </>
  )
}
