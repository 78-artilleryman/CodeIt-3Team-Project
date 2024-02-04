import React from "react";
import useFilterSelect from "../../../hooks/useFilterSelect";
import styles from "./FilterSelect.module.scss";

interface SelectBoxProps {
  title: string;
  position?: "bottom" | "top";
  list: {
    value: string;
    name: string;
  }[];
}

function FilterSelectBox({ title, position, list }: SelectBoxProps) {
  const { isSelectOpen, selected, selectToggleHandler, selectedHandler } = useFilterSelect();

  const selectClassName = `${position === "bottom" ? styles["bottom"] : styles["top"]}`;
  const listItemClassName = ` ${position === "bottom" ? styles["list-bottom"] : styles["list-top"]}`;
  return (
    <>
      <div onClick={selectToggleHandler} className={`${styles.selectContainer} `}>
        {selected || title}
        {isSelectOpen && (
          <ul onClick={selectedHandler} className={`${styles.dropdown} ${selectClassName}`}>
            {list.map(item => (
              <li key={item.value} className={`${styles.listItem} ${listItemClassName}`}>
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default FilterSelectBox;
