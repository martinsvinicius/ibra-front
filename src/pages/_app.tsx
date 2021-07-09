import { ToastContainer } from 'react-toastify';

import type { AppProps } from 'next/app';

import { GlobalStyle } from '../styles/global';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';
import { LanguageProvider } from '../hooks/useLanguage';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Head>
        <title>IBRA</title>
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        pauseOnHover
        draggable
        closeOnClick
      />
    </LanguageProvider>
  );
}
export default MyApp;
