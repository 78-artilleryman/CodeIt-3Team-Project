import React from "react";
import styles from "./Stack.module.scss";

function Stack() {
  return (
    <div className={styles.container}>
      <div className={styles.stacks}>
        <div className={styles.stack}>
          <img src="LogoImages/typescript.png" alt="" />
          <p>Typescript</p>
        </div>
        <div className={styles.stack}>
          <img src="LogoImages/javascript.png" alt="" />
          <p>Javascript</p>
        </div>
        <div className={styles.stack}>
          <img src="LogoImages/nextjs.png" alt="" />
          <p>Nextjs</p>
        </div>
        <div className={styles.stack}>
          <img src="LogoImages/react.png" alt="" />
          <p>React</p>
        </div>
      </div>
      <div className={styles.stack_list}>
        <ul>
          <li>
            <p>Typescript</p>
            <img src="Icon/icon_letter.png" alt="" />
          </li>
          <li>
            <p>Typescript</p>
            <img src="Icon/icon_letter.png" alt="" />
          </li>
          <li>
            <p>Typescript</p>
            <img src="Icon/icon_letter.png" alt="" />
          </li>
          <li>
            <p>Typescript</p>
            <img src="Icon/icon_letter.png" alt="" />
          </li>
        </ul>
        <div>
          <img src="Icon/icon_reload.png" alt="" />

          <button>초기화</button>
        </div>
      </div>
    </div>
  );
}

export default Stack;
