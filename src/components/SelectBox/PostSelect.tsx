import usePostSelect from "hooks/usePostSelect";
import React from "react";

interface SelectBoxProps {
  title: string;
  placehoder: string;
  list: {
    value: string;
    name: string;
  }[];
  onChange: (value: string) => void;
}

function PostSelect({ title, placehoder, list, onChange }: SelectBoxProps) {
  const { isSelectOpen, selected, selectToggleHandler, selectedHandler } = usePostSelect();

  onChange(selected);

  return (
    <>
      <div>
        <label>{title}</label>
        <div onClick={selectToggleHandler}>
          {selected || placehoder}
          {isSelectOpen && (
            <ul onClick={selectedHandler}>
              {list.map(data => (
                <li key={data.value}>{data.name}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default PostSelect;
