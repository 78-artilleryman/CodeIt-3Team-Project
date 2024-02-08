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
  console.log(filterStacks);
  useEffect(() => {
    // Firestore에서 데이터를 가져오는 로직
    let postsRef = collection(db, "posts");
    let postsQuery;

    // classification과 studyCount가 모두 "all"인 경우 모든 게시물을 가져옴
    if (filterClassification === "전체" && filterStudyCount === "전체") {
      postsQuery = collection(db, "posts");
    } else if (filterClassification === "전체") {
      // classification이 "전체"이고 studyCount가 특정 값인 경우 해당 값에 맞는 게시물을 가져옴
      postsQuery = query(postsRef, where("studyCount", "==", filterStudyCount), orderBy("createdAt", "desc"));
    } else if (filterStudyCount === "전체") {
      // studyCount가 "all"이고 classification이 특정 값인 경우 해당 값에 맞는 게시물을 가져옴
      postsQuery = query(postsRef, where("studyType", "==", filterClassification), orderBy("createdAt", "desc"));
    } else {
      // 그렇지 않은 경우 classification과 studyCount에 따라 쿼리 생성
      postsQuery = query(
        postsRef,
        where("studyType", "==", filterClassification),
        where("studyCount", "==", filterStudyCount),
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
  }, [filterClassification, filterStudyCount, dispatch]);
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
