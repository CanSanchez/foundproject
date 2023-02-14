import Map from '../components/map/';
import styles from '@/styles/Map.module.css'
import Head from 'next/head'
import PetCard from '../components/PetCard';
import React, { useState, useEffect } from 'react';
import { prisma } from '@/server/db/client';

export default function Home( { posts } ) {

  return (
    <>
        <Head>
            <title>Found: Home</title>
            <meta name="description" content="Found is an app that digitizes missing pet posters. It aims to elimate paper wastes, boost exposure, and bring your best friend back home quickly and safely." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/logo_symbol_color.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap" rel="stylesheet" />
        </Head>
        <main className={styles.main}>
            <div className={styles.wrappercolumn}>
                <Map />
                <div className={styles.postContainer}>
                    <h1 className={styles.postTitle}>Recent Posts</h1>
                    <div className={styles.postList}>
                        {posts.map((post) => (
                    <PetCard
                        key={post.id}
                        pettype={post.petType}
                        petname={post.petName}
                        color={post.petColor}
                        breed={post.petBreed}
                        description={post.petDescription}
                        location={post.lastLocation}
                         />
                        ))}
                    </div>         
                </div>
            </div>
        </main>
    </>
)
}

//serversideprops

export async function getServerSideProps() {
  
    const post = await prisma.post.findMany({
        orderBy: {
            createdAt: "desc"
        }
    });

    return {
        props: {
            posts: JSON.parse(JSON.stringify(post))
        }  
    }
}

