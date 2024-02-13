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
  }[];
  css: {
    id: number;
    image: string;
    value: string;
  }[];
  onSelect: (value: string) => void;
}

const style: any = {
  //styles를 사용해 css를 분리하려고 했지만 분리가 안되서 인라인 스타일로 적용
  TypeScript: {
    background: "#C2E4FB",
    opacity: "0.3",
  },
  JavaScript: {
    background: "#FFF39A",
  },
  "Next Js": {
    background: "#9B9B9B",
  },
  "React Js": {
    background: "#C3F7FF",
  },
  CSS: {
    background: "#C2DBFF",
  },
  "Styled Components": {
    background: "#FFE0F5",
  },
  Scss: {
    background: "#FFDCED",
  },
  "Post css": {
    background: "#FFD8D2",
  },
  Tailwind: {
    background: "#C7F1FF",
  },
};

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
            <div className={styles.stackBox_content_1}>
              <h3 className={styles.stackBox_title}>{subtitle[0]}</h3>
              <ul className={styles.stackBox_stacks}>
                {stack.map(data => (
                  <li
                    key={data.id}
                    className={`${styles.stackBox_stack} `}
                    onClick={() => selectHandle(data.value)}
                    style={style[data.value]}
                  >
                    <FilterStack image={data.image} value={data.value} />
                  </li>
                ))}
              </ul>
            </div>
            <hr></hr>
            <div className={styles.stackBox_content_2}>
              <h3 className={styles.stackBox_title}>{subtitle[1]}</h3>
              <ul className={styles.stackBox_stacks}>
                {css.map(data => (
                  <li
                    key={data.id}
                    className={`${styles.stackBox_stack}`}
                    onClick={() => selectHandle(data.value)}
                    style={style[data.value]}
                  >
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
