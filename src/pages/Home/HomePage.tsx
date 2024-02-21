import PostList from "components/Posts/postList/PostList";
import styles from "./Home.module.scss";
import FilterList from "components/SelectBox/Filter/FilterList";
import SearchBar from "components/Common/SearchBar";

function HomePage() {
  return (
    <>
      <section className={styles.filterSection}>
        <FilterList />
        <SearchBar />
      </section>
      <PostList />
    </>
  );
}

export default HomePage;
