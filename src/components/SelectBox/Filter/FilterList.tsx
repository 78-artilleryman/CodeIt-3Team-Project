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
import { buildFirestoreQuery } from "utils/\bFilter";

const fileterListStyle = {
  display: "flex",
  gap: "10px",
};

function FilterList() {
  const dispatch = useDispatch();
  const { filterClassification, filterStudyCount, filterStacks } = useSelector((state: RootState) => state.post);

  useEffect(() => {
    const postsQuery = buildFirestoreQuery(db, filterClassification, filterStudyCount, filterStacks);

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
    <div style={fileterListStyle}>
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
        filterStacks={filterStacks}
      />
      <FilterSelectBox
        title={filterStudyCountData.title}
        icon={filterStudyCountData.icon}
        position={"bottom"}
        list={filterStudyCountData.list}
        onSelect={value => dispatch(setFilterStudyCount(value))}
      />
    </div>
  );
}

export default FilterList;
