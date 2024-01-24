import { ChangeEvent, useState } from "react"

type UseInputCallbackType = (value: string) => { result: boolean; message: string }

export default function useInput(validator: UseInputCallbackType) {
  const [inputState, setInputState] = useState({ value: "", isTouched: false, message: "" })
  const validation = validator(inputState.value)
  const isValid = inputState.isTouched && validation.result

  const inputFocusHandler = () => setInputState((state) => ({ ...state, isTouched: true }))

  const inputChangeHandler = ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
    setInputState((state) => ({ ...state, value }))

  return {
    value: inputState.value,
    isValid,
    message: validation.message,
    inputChangeHandler,
    inputFocusHandler,
  }
}
