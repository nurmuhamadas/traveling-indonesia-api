import Head from 'next/head';
import {Dropdown} from 'primereact/dropdown';
import {RadioButton} from 'primereact/radiobutton';
import {InputNumber} from 'primereact/inputnumber';
import {MultiSelect} from 'primereact/multiselect';
import {InputText} from 'primereact/inputtext';
import {Rating} from 'primereact/rating';
import styles from '../../styles/Documentation.module.css';
import {useState} from 'react';
import SidebarComp from '../../components/SidebarComp';
import cn from 'classname';
import {categoriesItem, sorterItem} from '../../templates/props';

const BASE_URL = 'http://localhost:3000/api/v1';

export default function PlayGround(props) {
  const [VisibleMenu, setVisibleMenu] = useState(true);
  const [queryFilter, setQueryFilter] = useState({
    sorter: '',
    order: 'false',
    inputName: '',
    destinationPerPage: 20,
    categoryInput: [],
    inputLocation: '',
    rating: 0,
  });
  const [endPoint, setEndPoint] = useState(`${BASE_URL}/destinations/`);

  const handleInputChange = (e) => {
    const newValue = {
      ...queryFilter,
      [e.target.name]: e.target.value,
    };
    setQueryFilter(newValue);
    setEndPoint(generateUrl(newValue));
  };

  const generateUrl = ({
    destinationPerPage: limit, page, order: desc, sorter: sort,
    inputName: name, inputLocation: location,
    categoryInput: categories, rating = '',
  }) => {
    let query = '?';
    if (name || location || categories.length > 0 || rating > 0) {
      query = 'search/?';
      query += name? `&name=${name}`: '';
      query += location? `&location=${location}`: '';
      query += categories.length > 0? `&categories=${categories.join(',')}`: '';
      query += rating? `&rating=${rating}`: '';
      query += '&';
    }
    query += limit? `limit=${limit}`: '';
    query += page? `&page=${page}`: '';
    query += desc === 'true'? `&desc=${desc}`: '';
    query += sort? `&sort=${sort}`: '';
    // eslint-disable-next-line max-len
    return `${BASE_URL}/destinations/${query}`;
  };


  return (
    <div className={styles.container}>
      <Head>
        <title>Play Ground</title>
      </Head>

      <main
        id={styles.documentation}
        className={cn({[styles.hide__menu]: !VisibleMenu})}
      >
        <SidebarComp showMenu={setVisibleMenu} />
        <div
          id={styles.main__content}
          className={cn({[styles.hide__menu]: !VisibleMenu})}
        >
          <h1 className={styles.title}>Play Ground</h1>
          <h3 className={styles.heading}>Overview</h3>
          <p className={styles.paragraph}>
            In this section, we well play a simple tools to get
            our request url and method according to request you want.
          </p>
          <h3 className={styles.heading}>Filter</h3>
          <div className={styles.filter}>
            <div className={styles.filter__item}>
              <label htmlFor="name">Name</label>
              <InputText
                id="name"
                value={queryFilter.inputName}
                placeholder="Search name"
                name="inputName"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className={styles.filter__item}>
              <label htmlFor="location">Location</label>
              <InputText
                id="location"
                value={queryFilter.inputLocation}
                name="inputLocation"
                placeholder="Search location"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className={styles.filter__item}>
              <label htmlFor="rating">Minimum rating</label>
              <Rating
                id="rating"
                name="rating"
                value={queryFilter.rating}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className={styles.filter__item}>
              <label htmlFor="categories">Categories</label>
              <MultiSelect
                id="categories"
                name="categoryInput"
                value={queryFilter.categoryInput}
                options={categoriesItem}
                onChange={(e) => handleInputChange(e)}
                placeholder="Select categories"
              />
            </div>
            <div className={styles.filter__item}>
              <label htmlFor="sort">Sort by</label>
              <Dropdown
                id="sort"
                value={queryFilter.sorter}
                name="sorter"
                options={sorterItem}
                onChange={(e) => handleInputChange(e)}
                placeholder="Sort by"
              />
            </div>
            <div className={styles.filter__item}>
              <label htmlFor="limit">Destination per Page</label>
              <InputNumber
                id="limit"
                name="destinationPerPage"
                value={queryFilter.destinationPerPage}
                onValueChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className={styles.filter__item}>
              <label htmlFor="order">Order</label>
              <div className="p-field-radiobutton">
                <RadioButton
                  id="asc"
                  value="false"
                  name="order"
                  onChange={(e) => handleInputChange(e)}
                  checked={queryFilter.order === 'false'} />
                <label htmlFor="asc">Ascending</label>
              </div>
              <div className="p-field-radiobutton">
                <RadioButton
                  id="desc"
                  value="true"
                  name="order"
                  onChange={(e) => handleInputChange(e)}
                  checked={queryFilter.order === 'true'} />
                <label htmlFor="desc">Descending</label>
              </div>
            </div>
          </div>
          <div className={styles.endpoint}>
            <h3 className={styles.heading}>Endpoint:</h3>
            <blockquote className={styles.code}>
              <pre>{endPoint}</pre>
            </blockquote>
          </div>
        </div>
      </main>
    </div>
  );
}
