import styles from '../styles/searchbar.module.css';

const SearchBar = () => {
  return (
    <form className={styles.form_wrap}>
      <input
        name="name"
        id={styles.searchInput}
        autoComplete="off"
        placeholder="Search destination"
      />
      <button className={styles.search_btn}>
        <i className="pi pi-search"></i>
      </button>
    </form>
  );
};

export default SearchBar;
