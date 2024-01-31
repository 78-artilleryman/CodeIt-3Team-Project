import React from "react";
import styles from "./FormButtonList.module.scss";
import Button from "UI/Button";

interface FormButtonListProps {
  formIsValid?: boolean;
  socialLoginHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function FormButtonList({ formIsValid, socialLoginHandler }: FormButtonListProps) {
  return (
    <ul className={styles.button_lists}>
      <li className={styles.button_lists__item}>
        <Button type="submit" isDisabled={!formIsValid} className="submit_button">
          회원가입
        </Button>
      </li>
      <li className={styles.button_lists__item}>
        <Button type="submit" className="google_button" onClick={socialLoginHandler} name="google">
          Google 계정으로 가입하기
        </Button>
      </li>
      <li className={styles.button_lists__item}>
        <Button type="submit" className="github__button" onClick={socialLoginHandler} name="github">
          GitHub 계정으로 가입하기
        </Button>
      </li>
    </ul>
  );
}

export default FormButtonList;
