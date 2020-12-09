import {useState} from 'react';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {Dropdown} from 'primereact/dropdown';
import {RadioButton} from 'primereact/radiobutton';
import {InputNumber} from 'primereact/inputnumber';
import {MultiSelect} from 'primereact/multiselect';
import SearchBar from '../../components/SearchBar';
import Cards from '../../components/Cards';
import styles from '../../styles/Destination.module.css';
import DestinationApi from '../../api/DestinationApi';
import {categoriesItem, sorterItem} from '../../templates/props';

export default function DestinationPage(props) {
  const router = useRouter();
  const [sorter, setSorter] = useState('');
  const [order, setOrder] = useState('false');
  const [destinationPerPage, setDestinationPerPage] = useState(20);
  const [categoryInput, setCategoryInput] = useState('');
  const [inputName, setInputName] = useState('');

  const handleSorterChange = (e) => {
    setSorter(e.value);
    router.push(generateUrl({sort: e.value}));
  };

  const handleOrderChange = (e) => {
    setOrder(e.value);
    router.push(generateUrl({desc: e.value}));
  };

  const handleLimitChange = (e) => {
    setDestinationPerPage(e.value);
    router.push(generateUrl({limit: e.value}));
  };

  const handleCategoriesChange = (e) => {
    setCategoryInput(e.value);
    router.push(generateUrl({categories: e.value.join(',')}));
  };

  const handleInputChange = (e) => {
    setInputName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(generateUrl({name: inputName}));
  };

  const generateUrl = ({
    limit = destinationPerPage, page = 0, desc = order, sort = sorter,
    name = inputName, location = '', categories = '', rating = '',
  }) => {
    // eslint-disable-next-line max-len
    return `/destination/?limit=${limit}&page=${page}&sort=${sort}&desc=${desc}&name=${name}&location=${location}&categories=${categories}&rating=${rating}`;
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Traveling Indonesia</title>
      </Head>

      <main id={styles.destination}>
        <h1 className={styles.title} style={{marginBottom: '3rem'}}>
          Explore Indonesia
        </h1>
        <SearchBar
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
        />
        <div className={styles.filter}>
          <div className={styles.filter__item}>
            <label htmlFor="sort">Sort by</label>
            <Dropdown
              id="sort"
              value={sorter}
              options={sorterItem}
              onChange={(e) => handleSorterChange(e)}
              placeholder="Sort by"
            />
          </div>
          <div className={styles.filter__item}>
            <label htmlFor="order">Order</label>
            <div className="p-field-radiobutton">
              <RadioButton
                id="asc"
                value="false"
                name="asc"
                onChange={(e) => handleOrderChange(e)}
                checked={order === 'false'} />
              <label htmlFor="asc">Ascending</label>
            </div>
            <div className="p-field-radiobutton">
              <RadioButton
                id="desc"
                value="true"
                name="order"
                onChange={(e) => handleOrderChange(e)}
                checked={order === 'true'} />
              <label htmlFor="desc">Descending</label>
            </div>
          </div>
          <div className={styles.filter__item}>
            <label htmlFor="limit">Destination per Page</label>
            <InputNumber
              id="limit"
              value={destinationPerPage}
              onValueChange={(e) => handleLimitChange(e)}
            />
          </div>
          <div className={styles.filter__item}>
            <label htmlFor="categories">Categories</label>
            <MultiSelect
              id="categories"
              value={categoryInput}
              options={categoriesItem}
              onChange={(e) => handleCategoriesChange(e)}
              placeholder="Select categories" />
          </div>
        </div>
        <div className={styles.card__wrap}>
          <Cards data={props.destinations}/>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const {name, location, categories, rating,
    sort, desc, limit, page} = context.query;

  const destinations = await DestinationApi.searchDestination({
    limit, page, sort, desc, name, location, categories, rating,
  });

  return {
    props: {
      destinations,
    },
  };
}
