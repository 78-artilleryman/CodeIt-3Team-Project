import React from "react";
import PostBox from "./PostBox";
import { useSelector } from "react-redux";
import { RootState } from "store/configureStore";
import { useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "firebaseApp/config";
import { loadPosts } from "store/posts/postsReducers";
import { useDispatch } from "react-redux";
import { PostDataInfo } from "store/posts/types";

function PostList() {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  useEffect(() => {
    // 초기 로그인 상태 설정
    if (user) {
      let postRef = collection(db, "posts");
      let postsQuer = query(postRef, orderBy("createdAt", "desc"));

      onSnapshot(postsQuer, snapShop => {
        let dataObj = snapShop.docs.map(doc => ({
          ...doc?.data(),
          id: doc?.id,
        }));
        dispatch(loadPosts(dataObj as PostDataInfo[]));
      });
    }
  }, [dispatch]);

  const postlist = useSelector((state: RootState) => state.post.postList);
  console.log(postlist);

  return (
    <>
      {postlist.map(data => (
        <PostBox
          key={data.id}
          id={data.id}
          type={data.type}
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
