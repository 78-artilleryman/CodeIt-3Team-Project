import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <Link to="/">
          <div className={styles.logo}>
            <img src="" alt="logo" />
          </div>
        </Link>
        <nav className={styles.nav}>
          <Link to="/myPage">
            <div className={styles.link}>내 정보</div>
          </Link>
          <Link to="/signIn">
            <div className={styles.link}>로그인</div>
          </Link>
          <Link to="/signUp">
            <div className={styles.link}>회원가입</div>
          </Link>
          <Link to="/writeStudy">
            <div className={styles.link}>글쓰기</div>
          </Link>
          <Link to="/setting">
            <div className={styles.link}>내 정보수정</div>
          </Link>
        </nav>
      </header>
    </>
  );
}

export default Header;
