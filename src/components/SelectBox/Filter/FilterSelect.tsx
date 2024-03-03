import React, { useEffect, useRef } from "react";
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
  const { isSelectOpen, selected, selectToggleHandler, selectedHandler, selectHadler } = useFilterSelect();
  const ref = useRef<HTMLDivElement | null>(null);

  const selectHandle = (value: string) => {
    onSelect(value);
  };

  useEffect(() => {
    function handleClickOutside(event: any) {
      // ref.current는 참조 객체의 현재 값(외부 클릭을 감지하고자 하는 대상)
      // ref.current가 event.target을 포함하는지 판단하여 !연산
      // 즉, event.target이 외부에서 발생했다면 드롭다운 메뉴를 false하여 닫음
      if (ref.current && !ref.current.contains(event.target)) {
        selectHadler(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectClassName = `${position === "bottom" ? styles["bottom"] : styles["top"]}`;
  const listItemClassName = ` ${position === "bottom" ? styles["list-bottom"] : styles["list-top"]}`;
  return (
    <>
      <div onClick={selectToggleHandler} className={`${styles.selectContainer} `} ref={ref}>
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
