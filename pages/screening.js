import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Button from '../components/Button'
import Lottie from 'lottie-react'
import blackCat from '../public/animations/black-cat.json'
import Link from 'next/link'
import { useRouter } from 'next/router';

export default function Home() {

  const router = useRouter();

  const handleClick = (type) => {
    router.push(
      {
        pathname: '/formpage',
        query: { type: type },
      }
    );
    console.log(router.query.type);
  }


  return (
    <>
     <Head>
        <title>Found: Getting Started</title>
        <meta name="description" content="Found is an app that digitizes missing pet posters. It aims to elimate paper wastes, boost exposure, and bring your best friend back home quickly and safely." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo_symbol_color.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap" rel="stylesheet" />
      </Head>
      <main className={styles.main}>
        <div className={styles.wrappercolumn}>
          <div className={styles.animationcontainer} style={{marginBottom: '0%', marginTop: '-40%'}}>
            <Lottie animationData={blackCat} loop={true} />
          </div>
          <h1 className={styles.heading}>Tell us what happened?</h1>
          <Button name='I found a pet' onClick={()=>handleClick('found')}></Button>
          <Button name='I lost a pet' onClick={()=>handleClick('lost')}></Button>
          <Link href='/home' className={styles.link} style={{marginTop: '3em'}}>Skip to Home</Link>
        </div>
      </main>
    </>
  )
}