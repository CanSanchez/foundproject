import Map from '../components/map/';
import styles from '@/styles/Map.module.css'
import Head from 'next/head'
import PetCard from '../components/PetCard';
import React, { useState, useEffect } from 'react';
import { prisma } from '@/server/db/client';
import Navbar from '@/components/Navbar';

export default function Home( { posts } ) {

    console.log(posts);

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
                <Map posts={posts} />
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
                        formtype={post.formType}
                        image={post.petImage}
                        date={post.createdAt}
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

