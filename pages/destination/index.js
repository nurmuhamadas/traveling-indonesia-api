import {useState} from 'react';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {Dropdown} from 'primereact/dropdown';
import {RadioButton} from 'primereact/radiobutton';
import {InputNumber} from 'primereact/inputnumber';
import SearchBar from '../../components/SearchBar';
import Cards from '../../components/Cards';
import styles from '../../styles/Destination.module.css';
import DestinationApi from '../../api/DestinationApi';

const sorterItem = [
  {label: 'Id', value: ''},
  {label: 'Name', value: 'name'},
  {label: 'City', value: 'city'},
  {label: 'Province', value: 'region'},
  {label: 'Rating', value: 'rating'},
];

export default function DestinationPage(props) {
  const router = useRouter();
  const [sorter, setSorter] = useState('');
  const [order, setOrder] = useState('false');
  const [destinationPerPage, setDestinationPerPage] = useState(20);

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

  const generateUrl = ({
    limit = destinationPerPage,
    page = 0,
    desc = order,
    sort = sorter,
  }) => {
    // eslint-disable-next-line max-len
    return `/destination/?limit=${limit}&page=${page}&sort=${sort}&desc=${desc}`;
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
        <SearchBar />
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
        </div>
        <div className={styles.card__wrap}>
          <Cards data={props.destinations}/>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const {limit, page, sort, desc} = context.query;

  const destinations = await DestinationApi.getDestinations({
    limit, page, sort, desc,
  });

  return {
    props: {
      destinations,
    },
  };
}
