import React, { useState } from "react";
import styles from "./SearchBar.module.scss";
import { useDispatch } from "react-redux";
import { performSearch } from "utils/Search";
import { onSnapshot } from "firebase/firestore";
import { loadPosts } from "store/posts/postsReducers";
import { PostDataInfo } from "store/posts/types";

function SearchBar() {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState<string>("");

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  const searchHandler = () => {
    const postsQuery = performSearch(searchValue);

    const unsubscribe = onSnapshot(postsQuery, snapshot => {
      const data = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch(loadPosts(data as PostDataInfo[]));
    });

    return () => unsubscribe();
  };

  const keySearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      searchHandler();
    }
  };

  const clickSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    searchHandler();
  };

  return (
    <div className={styles.searchBar} onKeyDown={keySearch}>
      <input type="text" placeholder="🔍 원하는 검색어로 스터디를 찾아보세요." onChange={inputHandler} />
      <button onClick={clickSearch}>
        <img src="/Icon/MagnifyingGlass.png" alt="search icon" />
      </button>
    </div>
  );
}

export default SearchBar;
