import React from "react";
import useSelect from "../../hooks/useSelect";
import styles from "./SelectBox.module.scss";

interface SelectBoxProps {
  title: string;
  position: "bottom" | "top";
  size: "large" | "small";
  list: {
    value: string;
    name: string;
  }[];
}

function SelectBox({ title, position, size, list }: SelectBoxProps) {
  const { isSelectOpen, selected, selectToggleHandler, selectedHandler } = useSelect();
  const containerClassName = `${styles["select-container"]} ${
    size === "large" ? styles["large-size"] : styles["small-size"]
  }`;

  const SelectClassName = `${styles.dropdown} ${position === "bottom" ? styles["bottom"] : styles["top"]}`;

  return (
    <>
      <div onClick={selectToggleHandler} className={containerClassName}>
        {selected || title}
        {isSelectOpen && (
          <ul onClick={selectedHandler} className={SelectClassName}>
            {list.map(item => (
              <li key={item.value} className={styles.listItem}>
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default SelectBox;
