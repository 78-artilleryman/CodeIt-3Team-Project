import { app } from "firebaseApp/config";
import { createUserWithEmailAndPassword, getAuth, signInWithPopup, updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useInput from "hooks/useInput";
import * as Validation from "utils/validator";
import styles from "./Auth.module.scss";
import { socialLoginMapping } from "utils/social";
import AuthInput from "./form/FormInput";
import FormHeader from "./form/FormHeader";
import FormButtonList from "./form/FormButtonList";

let formIsValid: boolean = false;

function SignupForm() {
  const navigate = useNavigate();
  const nameState = useInput(value => Validation.nameValidation(value));
  const emailState = useInput(value => Validation.emailValidation(value));
  const passwordState = useInput(value => Validation.passwordValidation(value));
  const passwordConfirmState = useInput(value => Validation.passwordConfirmValidation(value, passwordState.value));

  formIsValid = nameState.isValid && emailState.isValid && passwordState.isValid && passwordConfirmState.isValid;

  //파이어베이스 회원가입 로직
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!formIsValid) throw new Error("이름, 이메일, 비밀번호 값이 올바르지 않아요");
      const auth = getAuth(app);
      // 회원가입 후 유저정보 저장
      const { user } = await createUserWithEmailAndPassword(auth, emailState.value, passwordState.value);
      // 유저 이름 저장
      await updateProfile(user, { displayName: nameState.value });
      toast.success("회원가입 성공 후 로그인 되었습니다.");
      navigate("/");
    } catch (error: any) {
      console.log(error);
      if (error instanceof Error) return toast.error(error.message);
      toast.error("회원가입이 정상적으로 이루워지지 않았습니다.");
    }
  };

  //파이어베이스 소셜로그인 로직
  // 구글, 깃허브 중복 가입불가

  const socialLoginHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const buttonElement = e.target as HTMLButtonElement;
    const name = buttonElement.name;

    const provider = socialLoginMapping[name];

    try {
      const auth = getAuth(app);
      const { user } = await signInWithPopup(auth, provider);
      console.log(user);
      toast.success("회원가입 후 로그인 되었습니다.");
    } catch (error: any) {
      console.log(error);
      if (error instanceof Error) return toast.error(error.message);
      toast.error("회원가입이 정상적으로 이루워지지 않았습니다.");
    }
  };

  return (
    <main className={styles.container}>
      <section className={styles.form_section}>
        <FormHeader title="회원가입" content="Studit에서 팀원을 모집 해보세요🙂" />

        <form onSubmit={submitHandler} className={styles.form}>
          <AuthInput title="이름" placeholder="이름을 입력해주세요." id="user_name" type="text" data={nameState} />
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
          <AuthInput
            title="비밀번호 확인"
            placeholder="비밀번호를 다시 입력해주세요"
            id="user_password_confirm"
            type="password"
            data={passwordConfirmState}
          />

          <FormButtonList formIsValid={formIsValid} socialLoginHandler={socialLoginHandler} />
          <span className={styles.linkTo}>
            이미 회원이신가요? <Link to="/users/login"> 로그인 하기</Link>
          </span>
        </form>
      </section>
    </main>
  );
}

export default SignupForm;
