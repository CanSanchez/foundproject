import styles from '@/styles/About.module.css'
import Head from 'next/head'
import PetCard from '../components/PetCard';
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Lottie from 'lottie-react'
import aboutAnimation from '@/public/animations/about.json'


export default function About( ) {

  return (
    <>
        <Head>
            <title>Found: Home</title>
            <meta name="description" content="Found is an app that digitizes missing pet posters. It aims to elimate paper wastes, boost exposure, and bring your best friend back home quickly and safely." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/logo_symbol_color.ico" />
        </Head>
        
        <main className={styles.main}>
            <Navbar />
            <div className={styles.wrappercolumn}>
                <h1 className={styles.heading}>About Us</h1>
                <div className={styles.animationcontainer}>
                    <Lottie animationData={aboutAnimation} loop={true} width={200} height={200}/>
                </div>
                <div className={styles.columnflex}>
                    <p>
                    Found is a web application that allows users to post lost and found pets. It aims to elimate paper wastes, boost exposure, and bring your best friend back home quickly and safely.
                    </p>
                </div>
            </div>
        </main>
    </>
)
}