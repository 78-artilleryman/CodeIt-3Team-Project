import { app } from "firebaseApp/config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useInput from "hooks/useInput";
import * as Validation from "utils/validator";
import styles from "./Scss/index.module.scss";

function SignupForm() {
  const navigate = useNavigate();

  // const passwordConfirmValidator = (value: string) => {
  //   if (value === "") {
  //     return {
  //       isValid: false,
  //       message: "비밀번호 확인란을 채워주세요!",
  //     }
  //   }

  //   if (value !== userPassword.inputValue) {
  //     return {
  //       isValid: false,
  //       message: "비밀번호가 일치하지 않습니다!",
  //     }
  //   }

  //   return { isValid: true, message: "" }
  // }

  //파이어베이스 회원가입 로직
  // const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()

  //   try {
  //     const auth = getAuth(app)
  //     const { inputValue: email } = userEmail
  //     const { inputValue: password } = userPassword

  //     await createUserWithEmailAndPassword(auth, email, password)

  //     toast.success("회원가입에 성공했습니다.")
  //     navigate("/users/login")
  //   } catch (error: any) {
  //     console.log(error)
  //     toast.error(error?.code)
  //   }
  // }

  // //파이어베이스 소셜로그인 로직
  // // 구글, 깃허브 중복 가입불가
  // const onClickSocialLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
  //   const buttonElement = e.target as HTMLButtonElement

  //   const name = buttonElement.name

  //   let provider
  //   const auth = getAuth(app)

  //   if (name === "google") {
  //     provider = new GoogleAuthProvider()
  //   }

  //   if (name === "github") {
  //     provider = new GithubAuthProvider()
  //   }

  //   await signInWithPopup(auth, provider as GoogleAuthProvider | GithubAuthProvider)
  //     .then((result) => {
  //       console.log(result)
  //       toast.success("회원가입에 성공했습니다.")
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //       const errorMessage = error?.message
  //       toast.error("회원가입이 정상적으로 이루워지지 않았습니다.")
  //     })
  // }

  const nameState = useInput(value => Validation.nameValidation(value));
  const emailState = useInput(value => Validation.emailValidation(value));
  const passwordState = useInput(value => Validation.passwordValidation(value));
  console.log(nameState);
  console.log(emailState);
  console.log(passwordState);
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>회원가입</h1>
        <p>Studit에서 팀원을 모집 해보세요🙂</p>
      </div>
      <form className={styles.form}>
        <div className={styles.form_block}>
          <label htmlFor="user_name">이름</label>
          <input
            id="user_name"
            placeholder="이름을 입력해주세요."
            type="text"
            onChange={nameState.inputChangeHandler}
            onFocus={nameState.inputFocusHandler}
            value={nameState.value}
          />
        </div>
        <div className={styles.form_block}>
          <label htmlFor="user_email">이메일</label>
          <input
            id="user_email"
            placeholder="이메일을 입력해주세요."
            type="text"
            onChange={emailState.inputChangeHandler}
            onFocus={emailState.inputFocusHandler}
            value={emailState.value}
          />
        </div>
        <div className={styles.form_block}>
          <label htmlFor="user_password">비밀번호</label>
          <input
            id="user_password"
            placeholder="특수문자를 포함한 비밀번호를 입력해주세요."
            type="password"
            value={passwordState.value}
            onChange={passwordState.inputChangeHandler}
            onFocus={passwordState.inputFocusHandler}
          />
        </div>
        <div className={styles.form_block}>
          <label htmlFor="user_password_confirm">비밀번호 확인</label>
          <input id="user_password_confirm" placeholder="비밀번호를 다시 입력해주세요" type="password" />
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
