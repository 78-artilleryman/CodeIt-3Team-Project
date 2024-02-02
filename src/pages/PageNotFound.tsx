import React from "react";
import styles from "./PageNotFound.module.scss";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <section className={styles.pageNotFound}>
      <div className={styles.container}>
        <p className={styles.description}>
          빈 상자와 같은 이 페이지에서 여러분의 아이디어를 채워보세요.
          <br />
          스터디나 프로젝트를 기다리고 있습니다. 🙂
        </p>

        <Link to="/posts/write" className={styles.linkTo}>
          스터디 모집하기
        </Link>
      </div>
    </section>
  );
}

export default PageNotFound;
