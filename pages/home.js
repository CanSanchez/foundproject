import Head from 'next/head'
import Map from '../components/map/';
import styles from '@/styles/Home.module.css'

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
    <main className={styles.home}>
        <div className={styles.wrappercolumn}>
            <Map />
        </div>
    </main>
    </>
)
}