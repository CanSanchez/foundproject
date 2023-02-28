import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Lottie from 'lottie-react'
import catBall from '../public/animations/cat_ball.json'
import Button from '../components/Button'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'
import LoadingSpinner from '@/components/loadingSpinner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };
  


  return (
    <>
      <Head>
        <title>Found</title>
        <meta name="description" content="Found is an app that digitizes missing pet posters. It aims to elimate paper wastes, boost exposure, and bring your best friend back home quickly and safely." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo_symbol_color.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap" rel="stylesheet" />
      </Head>
      <LoadingSpinner />
      <main className={styles.main}>
        {/* {isLoading ? (
      <LoadingSpinner />
      ) : (
          <p>Hi</p>
      )} */}
      </main>
    </>
  )
}
