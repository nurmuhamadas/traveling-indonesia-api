import Head from 'next/head';
import styles from '../styles/Home.module.css';
import NavbarComponent from '../components/navbar';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Traveling Indonesia</title>
      </Head>

      <NavbarComponent />

      <main>
        <section id={styles.hero__section}>
          <img
            alt="Bromo Mount"
            width={1280}
            height={650}
            className={styles.hero__image}
            src="/images/hero-image.png"
          />
          <div className={styles.hero__element}>
            <h1 className={styles.tagline}>
              WELCOME TO TRAVELING INDONESIA
            </h1>
            <h3 className={styles.second_tagline}>
              An open-source database of Indonesian Tour Destination.
              We provides free JSON API for anyone to use it Support Us:
            </h3>
            <SearchBar />
          </div>
        </section>
        <section id={styles.advantages}>
          <div className={styles.adv__wrap}>
            <div className={styles.adv__part}>
              <p className={styles.count}>682</p>
              <p className={styles.info}>Tour destinations</p>
            </div>
            <div className={styles.adv__part}>
              <p className={styles.count}>150+</p>
              <p className={styles.info}>Cities in Indonesia</p>
            </div>
            <div className={styles.adv__part}>
              <p className={styles.count}>34</p>
              <p className={styles.info}>Provinces in Indonesia</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
