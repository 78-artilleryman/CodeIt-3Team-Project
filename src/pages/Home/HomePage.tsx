import PostList from "components/Posts/postList/PostList";
import styles from "./Home.module.scss";
import FilterList from "components/SelectBox/Filter/FilterList";
import { useSelector } from "react-redux";
import { RootState } from "store/configureStore";

function HomePage() {
  const user = useSelector((state: RootState) => state.auth);

  console.log(user);
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
