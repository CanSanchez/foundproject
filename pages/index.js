import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Lottie from 'lottie-react'
import catBall from '../public/animations/cat_ball.json'
import Button from '../components/Button'
import { useRouter } from 'next/router';

export default function LandingPage() {

  const router = useRouter();

  return (
    <>
      <Head>
        <title>Found</title>
        <meta name="description" content="Found is an app that digitizes missing pet posters. It aims to elimate paper wastes, boost exposure, and bring your best friend back home quickly and safely." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo_symbol_color.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap" rel="stylesheet" />
      </Head>
      <main className={styles.main}>
        <div className={styles.wrappercolumn}>
          <div className={styles.animationcontainer} style={{marginBottom: '-90px', marginTop: '-100px'}}>
            <Lottie animationData={catBall} loop={true} width={200} height={200}/>
          </div>
          <h1 className={styles.heading}>Never lose your <br></br> bestfriend again</h1>
          <Button name='Get Started' onClick={()=>router.push('/screening')}></Button>
        </div>
      </main>
    </>
  )
}
