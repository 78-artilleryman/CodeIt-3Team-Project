import styles from "./FilterStackBox.module.scss";
import FilterStack from "./FilterStack";
import useFilterSelect from "../../../../hooks/useFilterSelect";
import { useEffect, useRef } from "react";

interface FilterStackBoxProps {
  title: string;
  subtitle: string[];
  position: string;
  stack: {
    id: number;
    image: string;
    value: string;
    name: string;
  }[];
  css: {
    id: number;
    image: string;
    value: string;
    name: string;
  }[];
  onSelect: (value: string) => void;
  filterStacks: string[];
}

function FilterStackBox({ title, subtitle, position, stack, css, onSelect, filterStacks }: FilterStackBoxProps) {
  const { isSelectOpen, selectToggleHandler, selectHadler } = useFilterSelect();
  const ref = useRef<HTMLDivElement | null>(null);

  const stackBoxClassName = `${position === "bottom" ? styles["bottom"] : styles["top"]}`;

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

  return (
    <>
      <div className={styles.stackSelectBox} onClick={selectToggleHandler} ref={ref}>
        {"📚 " + title}
        {isSelectOpen && (
          <div className={`${styles.stackBox} ${stackBoxClassName}`}>
            <div className={styles.stackBox_content_1}>
              <h3 className={styles.stackBox_title}>{subtitle[0]}</h3>
              <ul className={styles.stackBox_stacks}>
                {stack.map(data => {
                  return (
                    <li
                      key={data.id}
                      className={`${styles.stackBox_stack} ${styles[data.value]} 
                      ${filterStacks.includes(data.value) ? styles.check : ""} `}
                      onClick={() => selectHandle(data.value)}
                    >
                      <FilterStack image={data.image} name={data.name} />
                    </li>
                  );
                })}
              </ul>
            </div>
            <hr></hr>
            <div className={styles.stackBox_content_2}>
              <h3 className={styles.stackBox_title}>{subtitle[1]}</h3>
              <ul className={styles.stackBox_stacks}>
                {css.map(data => (
                  <li
                    key={data.id}
                    className={`${styles.stackBox_stack} ${styles[data.value]} 
                      ${filterStacks.includes(data.value) ? styles.check : ""} `}
                    onClick={() => selectHandle(data.value)}
                  >
                    <FilterStack image={data.image} name={data.name} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default FilterStackBox;
