import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Form.module.css'
import Button from '../components/Button'
import { handleClientScriptLoad } from 'next/script'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import FormComponent from '@/components/Form'

export default function LostPage({type}) {

  const router = useRouter();

  const [formType, setFormType] = useState(type);
  console.log(formType);
  console.log(type);

  const handleSubmit = async ({ petType, petName, petColor, petBreed, lastLocation, contactPhone, contactEmail, petDescription, petImage, latitude, longitude }) => {

    console.log(latitude, longitude)
    try {
      const { data } = await axios.post('/api/posts', {
        formType: formType,
        petType,
        petName,
        petColor,
        petBreed,
        lastLocation,
        contactPhone,
        contactEmail,
        petDescription,
        petImage,
        latitude,
        longitude
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
        <title>Found: Find Pet</title>
        <meta name="description" content="Found is an app that digitizes missing pet posters. It aims to elimate paper wastes, boost exposure, and bring your best friend back home quickly and safely." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo_symbol_color.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap" rel="stylesheet" />
      </Head>
      <main className={styles.main}>
        <Link href='/home' className={styles.link} style={{position: 'fixed', top: '1em', right:'1em'}}>Skip to Home</Link>
        <div className={styles.wrappercolumn}>
          <FormComponent onSubmit={handleSubmit} type={type}/>
        </div> 
      </main>
    </>
  )
}

export async function getServerSideProps(context) {
  const { type } = context.query;
  return {
    props: {
      type: JSON.parse(JSON.stringify(type))
    }
  }
}