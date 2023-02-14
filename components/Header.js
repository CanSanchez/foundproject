import Head from 'next/head'
import { Inter } from '@next/font/google'

// This component is used to set the meta tags for each page

export default function Header( props ) {
    <>
        <Head>
            <title>{props.title}</title>
            <meta name="description" content="Found is an app that digitizes missing pet posters. It aims to elimate paper wastes, boost exposure, and bring your best friend back home quickly and safely." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/logo_symbol_color.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap" rel="stylesheet" />
        </Head>
    </>
}
