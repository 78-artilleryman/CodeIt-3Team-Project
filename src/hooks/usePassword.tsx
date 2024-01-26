import { ChangeEvent, useState } from "react";

type UseInputCallbackType = (
  value: string,
  passwrod: string
) =>
  | {
      result: boolean;
      message: string;
    }
  | {
      check: () => boolean;
      message: string;
    };

export default function usePasswordInput(validator: UseInputCallbackType) {
  const [inputState, setInputState] = useState({ value: "", isTouched: false, message: "" });
  const [password, setPassword] = useState("");

  // validator 함수의 반환값이 { result: boolean; message: string; } 인 경우
  const validation = validator(inputState.value, password);
  const isValid = inputState.isTouched && (!("check" in validation) || validation.check());

  const inputFocusHandler = () => setInputState(state => ({ ...state, isTouched: true }));

  const inputChangeHandler = (value: string, password: string) => {
    setInputState(state => ({ ...state, value }));
    setPassword(password);
  };

  return {
    value: inputState.value,
    isValid,
    message: validation.message,
    touch: inputState.isTouched,
    inputChangeHandler,
    inputFocusHandler,
  };
}
