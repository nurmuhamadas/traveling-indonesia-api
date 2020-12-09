import styles from '../styles/searchbar.module.css';

const SearchBar = ({handleSubmit, handleInputChange}) => {
  return (
    <form
      className={styles.form_wrap}
      onSubmit={handleSubmit}
    >
      <input
        name="query"
        id={styles.searchInput}
        autoComplete="off"
        placeholder="Search destination"
        onChange={(e) => handleInputChange(e)}
      />
      <button className={styles.search_btn}>
        <i className="pi pi-search"></i>
      </button>
    </form>
  );
};

export default SearchBar;
