import React, { ChangeEvent } from "react";
import styles from "./FormInput.module.scss";

interface InputState {
  inputChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  inputFocusHandler: () => void;
  hasError: boolean;
  value: string;
  message: string;
}

interface InputLayoutProps {
  id: string;
  type: "text" | "password";
  placeholder: string;
  title: string;
  data: InputState;
  children?: React.ReactNode;
}

function AuthInput(props: InputLayoutProps) {
  const { data, id, type, title } = props;
  return (
    <div className={`${styles.input_layout} ${data.hasError && styles.invalid}`}>
      {props.children}
      <label className={styles.input_layout__label} htmlFor={id}>
        {title}
      </label>
      <input
        className={styles.input_layout__input}
        id={id}
        placeholder="이름을 입력해주세요."
        type={type}
        onChange={data.inputChangeHandler}
        onFocus={data.inputFocusHandler}
        value={data.value}
      />
      {data.hasError && <p className={styles.input_error}>{data.message}</p>}
    </div>
  );
}

export default AuthInput;
