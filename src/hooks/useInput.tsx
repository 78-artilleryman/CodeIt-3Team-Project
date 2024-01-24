import { ChangeEvent, useState } from "react"

type UseInputCallbackType = (value: string) => { result: boolean; message: string }

export default function useInput(validator: UseInputCallbackType) {
  const [inputState, setInputState] = useState({ value: "", isTouched: false })
  const { result, message } = validator(inputState.value)
  const hasError = inputState.isTouched && !result

  const inputFocusHandler = () => setInputState((state) => ({ ...state, isTouched: true }))

  const inputChangeHandler = ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
    setInputState((state) => ({ ...state, value }))

  return {
    value: inputState.value,
    isValid: result,
    hasError,
    message,
    inputChangeHandler,
    inputFocusHandler,
  }
}
