import PostBox from "./PostBox";
import { useSelector } from "react-redux";
import { RootState } from "store/configureStore";

function PostList() {
  const postlist = useSelector((state: RootState) => state.post.postList);

  return (
    <>
      {postlist.map(data => (
        <PostBox
          key={data.id}
          post={data} // data 객체를 한 번에 전달
        />
      ))}
    </>
  );
}

export default PostList;
