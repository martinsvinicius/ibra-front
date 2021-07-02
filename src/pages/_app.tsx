import { ToastContainer } from 'react-toastify';

import type { AppProps } from 'next/app';

import { GlobalStyle } from '../styles/global';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        pauseOnHover
        draggable
        closeOnClick
      />
    </>
  );
}
export default MyApp;
