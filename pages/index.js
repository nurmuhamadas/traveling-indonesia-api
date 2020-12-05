import Head from 'next/head';
import styles from '../styles/Home.module.css';
import NavbarComponent from '../components/navbar';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Traveling Indonesia</title>
      </Head>

      <NavbarComponent />

      <main></main>

      <footer></footer>
    </div>
  );
}
