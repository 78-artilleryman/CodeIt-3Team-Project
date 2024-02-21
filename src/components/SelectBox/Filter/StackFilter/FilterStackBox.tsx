import styles from "./FilterStackBox.module.scss";
import FilterStack from "./FilterStack";
import useFilterSelect from "../../../../hooks/useFilterSelect";

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
  const { isSelectOpen, selectToggleHandler } = useFilterSelect();

  const stackBoxClassName = `${position === "bottom" ? styles["bottom"] : styles["top"]}`;

  const selectHandle = (value: string) => {
    onSelect(value);
  };

  return (
    <>
      <div className={styles.stackSelectBox} onClick={selectToggleHandler}>
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
