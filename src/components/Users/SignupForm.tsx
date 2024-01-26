import { app } from "firebaseApp/config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useInput from "hooks/useInput";
import usePasswordInput from "hooks/usePassword";
import * as Validation from "utils/validator";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";

function SignupForm() {
  const navigate = useNavigate();
  const nameState = useInput(value => Validation.nameValidation(value));
  const emailState = useInput(value => Validation.emailValidation(value));
  const passwordState = useInput(value => Validation.passwordValidation(value));
  const passwordConfirmState = useInput(value => Validation.passwordConfirmValidation(value, passwordState.value));

  //파이어베이스 회원가입 로직
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const auth = getAuth(app);
      const { value: email } = emailState;
      const { value: password } = passwordState;

      await createUserWithEmailAndPassword(auth, email, password);

      toast.success("회원가입에 성공했습니다.");
      navigate("/users/login");
    } catch (error: any) {
      console.log(error);
      toast.error(error?.code);
    }
  };

  //파이어베이스 소셜로그인 로직
  // 구글, 깃허브 중복 가입불가
  const onClickSocialLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonElement = e.target as HTMLButtonElement;

    const name = buttonElement.name;

    let provider;
    const auth = getAuth(app);

    if (name === "google") {
      provider = new GoogleAuthProvider();
    }

    if (name === "github") {
      provider = new GithubAuthProvider();
    }

    await signInWithPopup(auth, provider as GoogleAuthProvider | GithubAuthProvider)
      .then(result => {
        console.log(result);
        toast.success("회원가입에 성공했습니다.");
      })
      .catch(error => {
        console.log(error);
        const errorMessage = error?.message;
        toast.error("회원가입이 정상적으로 이루워지지 않았습니다.");
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>회원가입</h2>
        <p>Studit에서 팀원을 모집 해보세요🙂</p>
      </div>
      <form onSubmit={onSubmit} className={styles.form}>
        <div className={nameState.hasError ? styles.form_block_error : styles.form_block}>
          <label>이름</label>
          <input
            className={styles.form_block_input}
            id="user_name"
            placeholder="이름을 입력해주세요."
            type="text"
            onChange={nameState.inputChangeHandler}
            onFocus={nameState.inputFocusHandler}
            value={nameState.value}
          />
          {nameState.hasError && <p>{nameState.message}</p>}
        </div>
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
            placeholder="특수문자를 포함한 비밀번호를 입력해주세요."
            type="password"
            value={passwordState.value}
            onChange={passwordState.inputChangeHandler}
            onFocus={passwordState.inputFocusHandler}
          />
          {passwordState.hasError && <p>{passwordState.message}</p>}
        </div>
        <div className={passwordConfirmState.hasError ? styles.form_block_error : styles.form_block}>
          <label htmlFor="user_password_confirm">비밀번호 확인</label>
          <input
            className={styles.form_block_input}
            id="user_password_confirm"
            placeholder="비밀번호를 다시 입력해주세요"
            type="password"
            value={passwordConfirmState.value}
            onChange={passwordConfirmState.inputChangeHandler}
            onFocus={passwordConfirmState.inputFocusHandler}
          />
          {passwordConfirmState.hasError && <p>{passwordConfirmState.message}</p>}
        </div>
        <div className={styles.form_block}>
          <button>회원가입</button>
          <button className={styles.gogle_btn}>Google 계정으로 가입하기</button>
          <button className={styles.github_btn}>GitHub 계정으로 가입하기</button>
          <p>
            이미 회원이신가요?
            <Link to="/users/login"> 로그인 하기</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
