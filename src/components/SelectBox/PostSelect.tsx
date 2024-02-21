import usePostSelect from "hooks/usePostSelect";
import React from "react";
import styles from "./PostSelect.module.scss";

interface SelectBoxProps {
  title: string;
  placehoder: string;
  list: {
    value: string;
    name: string;
  }[];
  icon: string;

  onChange: (value: string) => void;
}

function PostSelect({ title, placehoder, list, onChange, icon }: SelectBoxProps) {
  const { isSelectOpen, selected, selectToggleHandler, selectedHandler } = usePostSelect();

  onChange(selected);

  return (
    <>
      <div>
        <label className={styles.select_title}>{title}</label>
        <div className={styles.selected_value_input_wrapper}>
          <div className={styles.selected_icon}>{icon}</div>
          <input placeholder={`${title}`} value={`${selected}`} className={styles.selected_value_input} readOnly />

          <img
            src={`${process.env.PUBLIC_URL}/Icon/caretDown.svg`}
            className={styles.input_down_icon}
            onClick={selectToggleHandler}
          />
        </div>

        <div onClick={selectToggleHandler} className={styles.selector}>
          {isSelectOpen && (
            <ul onClick={selectedHandler} className={styles.selected_list}>
              <li>{selected}</li>
              {list.map(data => (
                <>
                  <li key={data.value} className={styles.unselected_value}>
                    {data.name}
                  </li>
                </>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default PostSelect;
