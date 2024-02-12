import React, { useEffect } from "react";
import FilterSelectBox from "./FilterSelect";
import { filterClassificationData, filterStudyCountData, filterStack } from "components/SelectBox/data";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/configureStore";
import { loadPosts, setFilterClassification, setFilterStack, setFilterStudyCount } from "store/posts/postsReducers";
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { db } from "firebaseApp/config";
import { PostDataInfo } from "store/posts/types";
import FilterStackBox from "./StackFilter/FilterStackBox";

function FilterList() {
  const dispatch = useDispatch();
  const { filterClassification, filterStudyCount, filterStacks } = useSelector((state: RootState) => state.post);
  console.log(filterClassification);
  console.log(filterStudyCount);
  console.log(filterStacks);
  useEffect(() => {
    // Firestore에서 데이터를 가져오는 로직
    let postsRef = collection(db, "posts");
    let postsQuery;

    if (filterClassification === "전체" && filterStudyCount === "전체" && filterStacks.length === 0) {
      postsQuery = collection(db, "posts");
    } else if (filterClassification === "전체" && filterStacks.length === 0) {
      // 스터디 횟수만 바꿨을 경우 동작
      postsQuery = query(postsRef, where("studyCount", "==", filterStudyCount), orderBy("createdAt", "desc"));
    } else if (filterStudyCount === "전체" && filterStacks.length === 0) {
      // 스터디 종류만 바꿨을 경우 동작
      postsQuery = query(postsRef, where("studyType", "==", filterClassification), orderBy("createdAt", "desc"));
    } else if (filterClassification === "전체" && filterStudyCount === "전체") {
      // 기술스택만 바꿨을 경우 동작
      postsQuery = query(postsRef, where("stacks", "array-contains-any", filterStacks), orderBy("createdAt", "desc"));
    } else if (filterStudyCount === "전체") {
      // 스터디 종류, 기술스택을 바꿨을 경우
      postsQuery = query(
        postsRef,
        where("studyType", "==", filterClassification),
        where("stacks", "array-contains-any", filterStacks),
        orderBy("createdAt", "desc")
      );
    } else if (filterClassification === "전체") {
      // 스터디횟수, 기술스택을 바꿨을 경우
      postsQuery = query(
        postsRef,
        where("studyCount", "==", filterStudyCount),
        where("stacks", "array-contains-any", filterStacks),
        orderBy("createdAt", "desc")
      );
    } else if (filterStacks.length === 0) {
      // 스터디 종류, 스터디횟수 바꿨을 경우
      postsQuery = query(
        postsRef,
        where("studyCount", "==", filterStudyCount),
        where("studyType", "==", filterClassification),
        orderBy("createdAt", "desc")
      );
      console.log("Test3");
    } else {
      // 모두 바꿨을 경우
      postsQuery = query(
        postsRef,
        where("studyType", "==", filterClassification),
        where("studyCount", "==", filterStudyCount),
        where("stacks", "array-contains-any", filterStacks),
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
  }, [filterClassification, filterStudyCount, filterStacks, dispatch]);
  return (
    <>
      <FilterSelectBox
        title={filterClassificationData.title}
        icon={filterClassificationData.icon}
        position={"bottom"}
        list={filterClassificationData.list}
        onSelect={value => dispatch(setFilterClassification(value))}
      />
      <FilterStackBox
        title={filterStack.title}
        subtitle={filterStack.subtitle}
        position={"bottom"}
        stack={filterStack.stack}
        css={filterStack.css}
        onSelect={value => dispatch(setFilterStack(value))}
      />
      <FilterSelectBox
        title={filterStudyCountData.title}
        icon={filterStudyCountData.icon}
        position={"bottom"}
        list={filterStudyCountData.list}
        onSelect={value => dispatch(setFilterStudyCount(value))}
      />
    </>
  );
}

export default FilterList;
