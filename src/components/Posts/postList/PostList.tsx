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
          id={data.id}
          studyType={data.studyType}
          personnel={data.personnel}
          meeting={data.meeting}
          period={data.period}
          postDeadline={data.postDeadline}
          stacks={data.stacks}
          postTitle={data.postTitle}
          postSubTitle={data.postSubTitle}
          postContent={data.postContent}
          createdAt={data.createdAt}
          uid={data.uid}
        />
      ))}
    </>
  );
}

export default PostList;
