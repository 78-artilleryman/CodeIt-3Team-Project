import { collection, query, where, orderBy, limit, Query, DocumentData } from "firebase/firestore";
import { db } from "firebaseApp/config";

export const performSearch = (searchValue: string): Query<DocumentData, DocumentData> => {
  let postsRef = collection(db, "posts");
  let postsQuery;

  if (searchValue === "") {
    postsQuery = collection(db, "posts");
  } else {
    postsQuery = query(
      postsRef,
      where("postTitle", ">=", searchValue),
      where("postTitle", "<=", searchValue + "\uf8ff"),
      orderBy("postTitle", "desc"),
      limit(10) // 가져올 게시물 최대값
    );
  }
  return postsQuery;
};
