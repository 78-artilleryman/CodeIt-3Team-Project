import PostBox from "./PostBox";
import { useSelector } from "react-redux";
import { RootState } from "store/configureStore";
import styles from "./PostList.module.scss";

function PostList() {
  const postlist = useSelector((state: RootState) => state.post.postList);

  return (
    <section className={styles.postSection}>
      {postlist.map(data => (
        <PostBox
          key={data.id}
          post={data} // data 객체를 한 번에 전달
        />
      ))}
    </section>
  );
}

export default PostList;
