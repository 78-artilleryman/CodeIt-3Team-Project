import PostSelect from "components/SelectBox/PostSelect";
import * as selectData from "components/SelectBox/data";
import React, { useState } from "react";

function PostForm() {
  const [title, setTitle] = useState<string>();

  console.log(title);
  const onChange = (value: string) => {
    setTitle(value);
  };

  const onSubmit = () => {};

  return (
    <div>
      <PostSelect
        title={selectData.classification.title}
        placehoder={selectData.classification.placehoder}
        list={selectData.classification.list}
        onChange={onChange}
      />
      <button onClick={onSubmit}></button>
    </div>
  );
}

export default PostForm;
