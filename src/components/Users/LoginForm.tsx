import React from "react";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>로그인</h1>
        <p>다양한 스터디가 당신을 기다리고 있어요🙂</p>
      </div>
      <form className={styles.form}>
        <div className={styles.form_block}>
          <label htmlFor="user_email">이메일</label>
          <input id="user_email" placeholder="Studit@gmail.com" type="text" />
        </div>
        <div className={styles.form_block}>
          <label htmlFor="user_password">비밀번호</label>
          <input id="user_password" placeholder="비밀번호를 입력해주세요." type="password" />
        </div>
        <div className={styles.form_block}>
          <button>회원가입</button>
          <button className={styles.gogle_btn}>Google 계정으로 로그인하기</button>
          <button className={styles.github_btn}>GitHub 계정으로 로그인하기</button>
          <p>
            회원이 아니신가요?
            <Link to="/users/signup"> 회원가입 하기</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
