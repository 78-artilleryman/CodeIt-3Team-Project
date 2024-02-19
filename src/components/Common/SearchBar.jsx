import React from "react";
import styles from "./SearchBar.module.scss";

function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="🔍 원하는 검색어로 스터디를 찾아보세요." />
      <img src="/Icon/MagnifyingGlass.png" alt="search icon" />
    </div>
  );
}

export default SearchBar;
