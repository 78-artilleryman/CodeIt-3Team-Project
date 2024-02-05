import React from "react";
import FilterSelectBox from "./FilterSelect";
import * as selectData from "components/SelectBox/data";

function FilterList() {
  return (
    <>
      <FilterSelectBox
        title={selectData.classification.title}
        position={"bottom"}
        list={selectData.classification.list}
      />
      <FilterSelectBox title={selectData.studyCount.title} position={"bottom"} list={selectData.studyCount.list} />
    </>
  );
}

export default FilterList;
