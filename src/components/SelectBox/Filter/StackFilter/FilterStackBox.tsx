import styles from "./FilterStackBox.module.scss";
import FilterStack from "./FilterStack";
import useFilterSelect from "../../../../hooks/useFilterSelect";

interface FilterStackBoxProps {
  title: string;
  subtitle: string[];
  position: string;
  stack: {
    key: number;
    image: string;
    value: string;
  }[];
  css: {
    key: number;
    image: string;
    value: string;
  }[];
  onSelect: (value: string) => void;
}

function FilterStackBox({ title, subtitle, position, stack, css, onSelect }: FilterStackBoxProps) {
  const { isSelectOpen, selectToggleHandler } = useFilterSelect();

  const selectHandle = (value: string) => {
    onSelect(value);
  };

  return (
    <>
      <div className={styles.stackSelectBox} onClick={selectToggleHandler}>
        {"📚 " + title}
        {isSelectOpen && (
          <div className={styles.stackBox}>
            <div>
              <h3 className={styles.stackBox_title}>{subtitle[0]}</h3>
              <ul className={styles.stackBox_stacks}>
                {stack.map(data => (
                  <li key={data.key} className={`${styles.stackBox_stack}`} onClick={() => selectHandle(data.value)}>
                    <FilterStack image={data.image} value={data.value} />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={styles.stackBox_title}>{subtitle[1]}</h3>
              <ul className={styles.stackBox_stacks}>
                {css.map(data => (
                  <li key={data.key} className={`${styles.stackBox_stack}`} onClick={() => selectHandle(data.value)}>
                    <FilterStack image={data.image} value={data.value} />
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
