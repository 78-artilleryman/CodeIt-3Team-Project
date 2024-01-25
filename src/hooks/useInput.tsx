import { ChangeEvent, useState } from "react";

type UseInputCallbackType = (value: string) =>
  | {
      result: boolean;
      message: string;
    }
  | {
      check: () => boolean;
      message: string;
    };

export default function useInput(validator: UseInputCallbackType) {
  const [inputState, setInputState] = useState({ value: "", isTouched: false, message: "" });

  // validator 함수의 반환값이 { result: boolean; message: string; } 인 경우
  const validation = validator(inputState.value);
  const isValid = inputState.isTouched && (!("check" in validation) || validation.check());

  const inputFocusHandler = () => setInputState(state => ({ ...state, isTouched: true }));

  const inputChangeHandler = ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
    setInputState(state => ({ ...state, value }));

  return {
    value: inputState.value,
    isValid,
    message: validation.message,
    touch: inputState.isTouched,
    inputChangeHandler,
    inputFocusHandler,
  };
}
