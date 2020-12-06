import Head from 'next/head';
import styles from '../styles/Home.module.css';
import NavbarComponent from '../components/navbar';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import {TabMenu} from 'primereact/tabmenu';
import cn from 'classname';
import DestinationApi from '../api/DestinationApi';
import {useState} from 'react';
import Cards from '../components/Cards';
import {Button} from 'primereact/button';

const tabMenuItem = [
  {label: 'Nature'},
  {label: 'Religi'},
  {label: 'Historical'},
  {label: 'Culture'},
  {label: 'Modern'},
  {label: 'Others'},
];

export default function Home(props) {
  const [tabMenuActive, setTabMenuActive] = useState(tabMenuItem[0]);

  const handleTabMenuChange = (event) => {
    setTabMenuActive(event.value);
  };

  const handleViewMoreClick = () => {
    console.log('view more');
  };

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
              We provides free JSON API for anyone to use it.
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

        <section id={styles.explore}>
          <h2 className={styles.explore__title}>
            Explore Indonesia
          </h2>
          <div className={cn('card', styles.tab__menu)}>
            <TabMenu
              model={tabMenuItem}
              activeItem={tabMenuActive}
              onTabChange={(e) => handleTabMenuChange(e)}
            />
          </div>
          <div className={cn(styles.card__wrap)}>
            <Cards data={props[tabMenuActive.label.toLowerCase()]} />
          </div>
          <Button
            onClick={handleViewMoreClick}
            label="View more"
            className="p-button-outlined"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const nature = await DestinationApi
      .getDestinationsByCategory({category: 'alam', limit: 6});
  const religi = await DestinationApi
      .getDestinationsByCategory({category: 'religi', limit: 6});
  const culture = await DestinationApi
      .getDestinationsByCategory({category: 'budaya', limit: 6});
  const historical = await DestinationApi
      .getDestinationsByCategory({category: 'sejarah', limit: 6});
  const modern = await DestinationApi
      .getDestinationsByCategory({category: 'modern', limit: 6});
  const others = await DestinationApi
      .getDestinationsByCategory({category: 'lainnya', limit: 6});

  return {
    props: {
      nature, religi, culture, historical, modern, others,
    },
  };
}
