import PostList from "components/Posts/postList/PostList";
import styles from "./Home.module.scss";
import FilterList from "components/SelectBox/Filter/FilterList";

function HomePage() {
  return (
    <>
      <section className={styles.filterSection}>
        <FilterList />
        <div>서치바 영역</div>
      </section>
      <section className={styles.postSection}>
        <PostList />
      </section>
    </>
  );
}

export default HomePage;
