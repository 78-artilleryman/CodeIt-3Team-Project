import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { Link, useNavigate } from "react-router-dom";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { toast } from "react-toastify";
import { app } from "firebaseApp/config";
import useInput from "hooks/useInput";
import * as Validation from "utils/validator";

function LoginForm() {
  const navigate = useNavigate();

  const emailState = useInput(value => Validation.emailValidation(value));
  const passwordState = useInput(value => Validation.loginPasswordValidation(value));
  const [submitBtnState, setSubmitBtnState] = useState<boolean>(true);

  useEffect(() => {
    const { isValid: email } = emailState;
    const { isValid: password } = passwordState;

    if (email && password) {
      setSubmitBtnState(false);
    } else {
      setSubmitBtnState(true);
    }
  }, [emailState.isValid, passwordState.isValid]);

  //로그인 로직
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const auth = getAuth(app);
      await signInWithEmailAndPassword(auth, emailState.value, passwordState.value);

      toast.success("로그인 되었습니다.");
      navigate("/");
    } catch (error: any) {
      console.log(error);
      toast.error(error?.code);
    }
  };

  const test = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("test");
  };

  // 소셜 로그인 로직
  const onClickSocialLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const buttonElement = e.target as HTMLButtonElement;
    const name = buttonElement.name;
    let provider;

    if (name === "google") {
      provider = new GoogleAuthProvider();
    }

    if (name === "github") {
      provider = new GithubAuthProvider();
    }

    try {
      const auth = getAuth(app);
      const { user } = await signInWithPopup(auth, provider as GoogleAuthProvider | GithubAuthProvider);
      console.log(user);
      toast.success("로그인 되었습니다.");
    } catch (error: any) {
      console.log(error);
      toast.error("로그인이 정상적으로 이루워지지 않았습니다.");
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>로그인</h2>
        <p>다양한 스터디가 당신을 기다리고 있어요🙂</p>
      </div>
      <form onSubmit={onSubmit} className={styles.form}>
        <div className={emailState.hasError ? styles.form_block_error : styles.form_block}>
          <label>이메일</label>
          <input
            className={styles.form_block_input}
            id="user_email"
            placeholder="이메일을 입력해주세요."
            type="text"
            onChange={emailState.inputChangeHandler}
            onFocus={emailState.inputFocusHandler}
            value={emailState.value}
          />
          {emailState.hasError && <p>{emailState.message}</p>}
        </div>
        <div className={passwordState.hasError ? styles.form_block_error : styles.form_block}>
          <label htmlFor="user_password">비밀번호</label>
          <input
            className={styles.form_block_input}
            id="user_password"
            placeholder="비밀번호를 입력해주세요."
            type="password"
            value={passwordState.value}
            onChange={passwordState.inputChangeHandler}
            onFocus={passwordState.inputFocusHandler}
          />
          {passwordState.hasError && <p>{passwordState.message}</p>}
        </div>
        <div className={styles.form_block}>
          <button disabled={submitBtnState} type="submit" className={!submitBtnState ? styles.submit_btn : ""}>
            로그인
          </button>
          <button className={styles.gogle_btn} onClick={onClickSocialLogin} name="google">
            Google 계정으로 로그인하기
          </button>
          <button className={styles.github_btn} onClick={onClickSocialLogin} name="github">
            GitHub 계정으로 로그인하기
          </button>
          <p>
            회원이 아니신가요?
            <Link to="/signup"> 회원가입 하기</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
