import React from "react";
import styles from "./PageNotFound.module.scss";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <section className={styles.pageNotFound}>
      <div className={`${styles.container} container`}>
        <div className={styles.descriptionContent}>
          <p className={styles.description}>
            <strong>앗, 여기는 아무 것도 없어요!</strong>
            <br />
            정확한 주소를 입력하셨는지 확인하고, 다른 곳을 찾아보세요! 🙂
          </p>

          <Link to="/posts/write" className={styles.linkTo}>
            스터디 보러가기
          </Link>
        </div>
        <div className={styles.imageContent}>404</div>
      </div>
    </section>
  );
}

export default PageNotFound;
