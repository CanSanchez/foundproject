import '@/styles/globals.css'
import Router from 'next/router';
import LoadingSpinner from '@/components/loadingSpinner';
import { useState } from 'react'

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);

  Router.events.on('routeChangeStart', () => {
    console.log("Router is changing...");
    setIsLoading(true);

  

  });

  Router.events.on('routeChangeComplete', () => {
    console.log("Router changing is complete!");
    setIsLoading(false);

    // Set a timeout of 1.5 seconds before showing the spinner
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  });

  Router.events.on('routeChangeError', () => {
    console.log("Router changing is having error");
    setIsLoading(false);
  });

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <Component {...pageProps} />
    </>
  );
}
