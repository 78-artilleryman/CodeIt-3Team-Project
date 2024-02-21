import { useState } from "react";
import styles from "./PostStackSelect.module.css";

function PostStackSelect({ title, icon, subtitle, stack, css, setStacks, stacks, value }) {
  const [selectedToggle, setSelectedToggle] = useState(false);

  const handleToggle = () => {
    setSelectedToggle(!selectedToggle);
  };
  console.log(stacks);
  //   const handleClickStackIcon = stack => {
  //     setSelectedToggle(!selectedToggle);
  //     let copy = [...stacks];
  //     copy.push(stack.value);
  //     setStacks([...copy]);
  //   };
  return (
    <>
      <div>
        <label className={styles.select_title}>{title}</label>
        <div className={styles.selected_value_input_wrapper}>
          <div className={styles.selected_icon}>{icon}</div>
          <input placeholder={title} className={styles.selected_value_input} readOnly />
          <img
            src={`${process.env.PUBLIC_URL}/Icon/caretDown.svg`}
            className={styles.input_down_icon}
            onClick={handleToggle}
          />
          {selectedToggle && (
            <div className={styles.stackSelector_wrapper}>
              <ul>
                <label className={styles.selector_list_title}>{subtitle[0]}</label>
                <div className={styles.selector_list}>
                  {stack.map(i => {
                    return (
                      <li
                        onClick={() => {
                          setSelectedToggle(!selectedToggle);
                          let copy = [...stacks];
                          if (copy.indexOf(i.value) == -1) {
                            copy.push(i.value);
                          }
                          setStacks([...copy]);
                        }}
                      >
                        <img src={`${process.env.PUBLIC_URL}/${i.image}`} />
                      </li>
                    );
                  })}
                </div>
              </ul>
              <ul>
                <label className={styles.selector_list_title}>{subtitle[1]}</label>
                <div className={styles.selector_list}>
                  {css.map(i => {
                    return (
                      <li
                        onClick={() => {
                          setSelectedToggle(!selectedToggle);
                          let copy = [...stacks];
                          if (copy.indexOf(i.value) == -1) {
                            copy.push(i.value);
                          }
                          setStacks([...copy]);
                        }}
                      >
                        <img src={`${process.env.PUBLIC_URL}/${i.image}`} />
                      </li>
                    );
                  })}
                </div>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className={styles.stack_grid}>
        {stacks.map(i => {
          return (
            <>
              <div
                className={styles.stack_grid_item}
                onClick={() => {
                  let copy = [...stacks];
                  copy.splice(i, 1);
                  setStacks([...copy]);
                }}
              >
                {i}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default PostStackSelect;
