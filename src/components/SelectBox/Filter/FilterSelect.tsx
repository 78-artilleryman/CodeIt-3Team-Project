import React from "react";
import useFilterSelect from "../../../hooks/useFilterSelect";
import styles from "./FilterSelect.module.scss";

interface SelectBoxProps {
  title: string;
  position?: "bottom" | "top";
  icon?: string;
  list: string[];
  onSelect: (value: string) => void;
}

function FilterSelectBox({ title, icon, position, list, onSelect }: SelectBoxProps) {
  const { isSelectOpen, selected, selectToggleHandler, selectedHandler } = useFilterSelect();

  const selectHandle = (value: string) => {
    onSelect(value);
  };

  const selectClassName = `${position === "bottom" ? styles["bottom"] : styles["top"]}`;
  const listItemClassName = ` ${position === "bottom" ? styles["list-bottom"] : styles["list-top"]}`;
  return (
    <>
      <div onClick={selectToggleHandler} className={`${styles.selectContainer} `}>
        {selected ? icon + selected : icon + title}
        {isSelectOpen && (
          <ul onClick={selectedHandler} className={`${styles.dropdown} ${selectClassName}`}>
            {list.map((item, index) => (
              <li key={index} className={`${styles.listItem} ${listItemClassName}`}>
                <span onClick={() => selectHandle(item)}>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default FilterSelectBox;
