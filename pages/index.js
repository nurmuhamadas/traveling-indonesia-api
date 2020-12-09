import Head from 'next/head';
import {useRouter} from 'next/router';
import styles from '../styles/Home.module.css';
import SearchBar from '../components/SearchBar';
import {TabMenu} from 'primereact/tabmenu';
import cn from 'classname';
import DestinationApi from '../api/DestinationApi';
import {useState} from 'react';
import Cards from '../components/Cards';
import {Button} from 'primereact/button';
import {categoriesItem} from '../templates/props';


export default function Home(props) {
  const router = useRouter();
  const [category, setCategory] = useState('religi');
  const [inputName, setInputName] = useState('');
  const [tabMenuActive, setTabMenuActive] = useState(categoriesItem[0]);

  const handleTabMenuChange = (event) => {
    setTabMenuActive(event.value);
    setCategory(event.value.value);
  };

  const handleViewMoreClick = () => {
    router.push(`/destination/?categories=${category}`);
  };

  const handleInputChange = (e) => {
    setInputName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/destination/?name=${inputName}`);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Traveling Indonesia</title>
      </Head>

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
            <SearchBar
              handleSubmit={handleSubmit}
              handleInputChange={handleInputChange}
            />
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
              model={categoriesItem}
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
    </div>
  );
}

export async function getServerSideProps() {
  const nature = await DestinationApi
      .searchDestination({categories: 'alam', limit: 6, page: 2});
  const religi = await DestinationApi
      .searchDestination({categories: 'religi', limit: 6});
  const culture = await DestinationApi
      .searchDestination({categories: 'budaya', limit: 6});
  const historical = await DestinationApi
      .searchDestination({categories: 'sejarah', limit: 6});
  const modern = await DestinationApi
      .searchDestination({categories: 'modern', limit: 6, page: 1});
  const others = await DestinationApi
      .searchDestination({categories: 'lainnya', limit: 6});

  return {
    props: {
      nature, religi, culture, historical, modern, others,
    },
  };
}
