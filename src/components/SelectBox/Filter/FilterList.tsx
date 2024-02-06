import React, { useEffect } from "react";
import FilterSelectBox from "./FilterSelect";
import * as selectData from "components/SelectBox/data";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/configureStore";
import { loadPosts, setClassification, setStudyCount } from "store/posts/postsReducers";
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { db } from "firebaseApp/config";
import { PostDataInfo } from "store/posts/types";

function FilterList() {
  const dispatch = useDispatch();
  const { classification, studyCount } = useSelector((state: RootState) => state.post);
  console.log(classification);
  console.log(studyCount);
  useEffect(() => {
    // Firestore에서 데이터를 가져오는 로직
    let postsRef = collection(db, "posts");
    let postsQuery;

    // classification과 studyCount가 모두 "all"인 경우 모든 게시물을 가져옴
    if (classification === "전체" && studyCount === "전체") {
      postsQuery = collection(db, "posts");
    } else if (classification === "전체") {
      // classification이 "전체"이고 studyCount가 특정 값인 경우 해당 값에 맞는 게시물을 가져옴
      postsQuery = query(postsRef, where("studyCount", "==", studyCount), orderBy("createdAt", "desc"));
    } else if (studyCount === "전체") {
      // studyCount가 "all"이고 classification이 특정 값인 경우 해당 값에 맞는 게시물을 가져옴
      postsQuery = query(postsRef, where("studyType", "==", classification), orderBy("createdAt", "desc"));
    } else {
      // 그렇지 않은 경우 classification과 studyCount에 따라 쿼리 생성
      postsQuery = query(
        postsRef,
        where("studyType", "==", classification),
        where("studyCount", "==", studyCount),
        orderBy("createdAt", "desc")
      );
    }

    const unsubscribe = onSnapshot(postsQuery, snapshot => {
      const data = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch(loadPosts(data as PostDataInfo[]));
    });

    return () => unsubscribe();
  }, [classification, studyCount, dispatch]);
  return (
    <>
      <FilterSelectBox
        title={selectData.classification.title}
        icon={selectData.classification.icon}
        position={"bottom"}
        list={selectData.classification.list}
        onSelect={value => dispatch(setClassification(value))}
      />
      <FilterSelectBox
        title={selectData.studyCount.title}
        icon={selectData.studyCount.icon}
        position={"bottom"}
        list={selectData.studyCount.list}
        onSelect={value => dispatch(setStudyCount(value))}
      />
    </>
  );
}

export default FilterList;
