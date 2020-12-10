/* eslint-disable react/prop-types */
import Head from 'next/head';
import '../styles/globals.css';
import 'nprogress/nprogress.css';
import 'primereact/resources/themes/md-light-deeppurple/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Router from 'next/router';
import NProgress from 'nprogress';
import NavbarComponent from '../components/navbar';
import Footer from '../components/Footer';

NProgress.configure({showSpinner: false, minimum: 0.2});
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({Component, pageProps}) {
  return <>
    <Head>
      <link rel="shortcut icon" href="/icons/logo.png" />
    </Head>
    <NavbarComponent />
    <Component {...pageProps} />
    <Footer />
  </>;
}

export default MyApp;
