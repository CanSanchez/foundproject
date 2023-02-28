import Head from 'next/head'
import styles from '@/styles/Form.module.css'
import LostForm from '@/components/LostForm'
import axios from 'axios'

export default function LostPage() {

  const handleSubmit = async ({ petType, petColor, petBreed, lastLocation, contactPhone, contactEmail, petDescription, petImage, title}) => {
    try {
      const { data } = await axios.post('/api/posts', {
        petType,
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

        <h1 className={styles.heading}>You're a hero! <br></br> Let's find the owner 🏠</h1>
      
        <div className={styles.wrappercolumn}>
          <LostForm onSubmit={handleSubmit}/>
        </div> 

      </main>
    </>
  )
}