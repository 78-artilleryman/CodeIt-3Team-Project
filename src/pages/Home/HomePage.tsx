import PostList from "components/Posts/postList/PostList";
import styles from "./Home.module.scss";
import FilterList from "components/SelectBox/Filter/FilterList";

function HomePage() {
  return (
    <>
      <section className={styles.section}>
        <FilterList />
      </section>
      <section className={styles.section}>
        <PostList />
      </section>
    </>
  );
}

export default HomePage;
