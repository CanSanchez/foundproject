import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Form.module.css'
import Button from '../components/Button'
import LostForm from '@/components/LostForm'
import { handleClientScriptLoad } from 'next/script'
import { useRouter } from 'next/router'
import { useState } from 'react'
import axios from 'axios'


const inter = Inter({ subsets: ['latin'] })

export default function LostPage() {

  const handleSubmit = async ({ petType, petName, petColor, petBreed, lastLocation, contactPhone, contactEmail, petDescription, petImage, title}) => {
    try {
      const { data } = await axios.post('/api/posts', {
        petType,
        petName,
        petColor,
        petBreed,
        lastLocation,
        contactPhone,
        contactEmail,
        petDescription,
        petImage,
        title
      });
      console.log(data);
      router.push('/home');
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <>
     <Head>
        <title>Found: Lost Pet</title>
        <meta name="description" content="Found is an app that digitizes missing pet posters. It aims to elimate paper wastes, boost exposure, and bring your best friend back home quickly and safely." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo_symbol_color.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap" rel="stylesheet" />
      </Head>
      <main className={styles.main}>
        <div className={styles.wrappercolumn}>
          <LostForm onSubmit={handleSubmit}/>
        </div> 
      </main>
    </>
  )
}