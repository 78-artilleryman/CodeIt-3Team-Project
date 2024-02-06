import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";
import { app } from "firebaseApp/config";
import useInput from "hooks/useInput";
import * as Validation from "utils/validator";
import styles from "./Auth.module.scss";
import { socialLoginMapping } from "utils/social";
import FormHeader from "./form/FormHeader";
import AuthInput from "./form/FormInput";
import FormButtonList from "./form/FormButtonList";

let formIsValid = false;

function LoginForm() {
  const navigate = useNavigate();

  const emailState = useInput(value => Validation.emailValidation(value));
  const passwordState = useInput(value => Validation.loginPasswordValidation(value));

  formIsValid = emailState.isValid && passwordState.isValid;

  //로그인 로직
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!formIsValid) throw new Error("입력한 값이 올바르지 않습니다.");
      const auth = getAuth(app);
      await signInWithEmailAndPassword(auth, emailState.value, passwordState.value);

      toast.success("로그인 되었습니다.");
      navigate("/");
    } catch (error: any) {
      console.log(error);
      if (error instanceof Error) return toast.error(error.message);
      toast.error("로그인 정상적으로 이루워지지 않았습니다.");
    }
  };

  // 소셜 로그인 로직
  const socialLoginHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const buttonElement = e.target as HTMLButtonElement;
    const name = buttonElement.name;
    const provider = socialLoginMapping[name];

    try {
      const auth = getAuth(app);
      const { user } = await signInWithPopup(auth, provider);
      console.log(user);
      toast.success("로그인 되었습니다.");
    } catch (error: any) {
      console.log(error);
      if (error instanceof Error) return toast.error(error.message);
      toast.error("로그인 정상적으로 이루워지지 않았습니다.");
    }
  };
  return (
    <main className={styles.container}>
      <section className={styles.form_section}>
        <FormHeader title="로그인" content="다양한 스터디가 당신을 기다리고 있어요🙂" />

        <form onSubmit={submitHandler} className={styles.form}>
          <AuthInput
            title="이메일"
            placeholder="이메일을 입력해주세요."
            id="user_email"
            type="text"
            data={emailState}
          />

          <AuthInput
            title="비밀번호"
            placeholder="특수문자를 포함한 비밀번호를 입력해주세요."
            id="user_password"
            type="password"
            data={passwordState}
          />

          <FormButtonList formIsValid={formIsValid} socialLoginHandler={socialLoginHandler} />

          <span className={styles.linkTo}>
            회원이 아니신가요? <Link to="/signup">회원가입 하기</Link>
          </span>
        </form>
      </section>
    </main>
  );
}

export default LoginForm;
