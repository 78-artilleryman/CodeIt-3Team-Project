import { collection, query, where, orderBy, Query, DocumentData } from "firebase/firestore";

interface FirestoreQueryResult {
  postsQuery: Query;
  db: any;
  filterClassification: string;
  filterStudyCount: string;
  filterStacks: string[];
}

export function buildFirestoreQuery(
  db: any,
  filterClassification: string,
  filterStudyCount: string,
  filterStacks: string[]
): Query<DocumentData, DocumentData> {
  let postsRef = collection(db, "posts");
  let postsQuery: Query;

  if (filterClassification === "전체" && filterStudyCount === "전체" && filterStacks.length === 0) {
    postsQuery = query(postsRef, orderBy("createdAt", "desc"));
    // postsQuery = collection(db, "posts");
  } else if (filterClassification === "전체" && filterStacks.length === 0) {
    postsQuery = query(postsRef, where("studyCount", "==", filterStudyCount), orderBy("createdAt", "desc"));
  } else if (filterStudyCount === "전체" && filterStacks.length === 0) {
    postsQuery = query(postsRef, where("studyType", "==", filterClassification), orderBy("createdAt", "desc"));
  } else if (filterClassification === "전체" && filterStudyCount === "전체") {
    postsQuery = query(postsRef, where("stacks", "array-contains-any", filterStacks), orderBy("createdAt", "desc"));
  } else if (filterStudyCount === "전체") {
    postsQuery = query(
      postsRef,
      where("studyType", "==", filterClassification),
      where("stacks", "array-contains-any", filterStacks),
      orderBy("createdAt", "desc")
    );
  } else if (filterClassification === "전체") {
    postsQuery = query(
      postsRef,
      where("studyCount", "==", filterStudyCount),
      where("stacks", "array-contains-any", filterStacks),
      orderBy("createdAt", "desc")
    );
  } else if (filterStacks.length === 0) {
    postsQuery = query(
      postsRef,
      where("studyCount", "==", filterStudyCount),
      where("studyType", "==", filterClassification),
      orderBy("createdAt", "desc")
    );
  } else {
    postsQuery = query(
      postsRef,
      where("studyType", "==", filterClassification),
      where("studyCount", "==", filterStudyCount),
      where("stacks", "array-contains-any", filterStacks),
      orderBy("createdAt", "desc")
    );
  }

  return postsQuery;
}
