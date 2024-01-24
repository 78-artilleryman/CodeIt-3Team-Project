import {
  isEmpty,
  isNotEmailValid,
  isNotNameValid,
  isNotPasswordMatch,
  isPasswordLessThanEight,
  isPasswordValid,
} from "./validate"

export const nameValidation = (value: string) => {
  if (isEmpty(value)) return { result: false, message: "이름을 입력해주세요." }

  if (isNotNameValid(value)) return { result: false, message: "이름은 최소 두글자 이상입니다." }

  return { result: true, message: "Validation Success" }
}

export const emailValidation = (value: string) => {
  if (isEmpty(value)) return { result: false, message: "이메일을 입력해주세요." }
  if (isNotEmailValid(value)) return { result: false, message: "유효한 이메일 형식이 아닙니다." }

  return { result: true, message: "Validation Success" }
}

export const passwordValidation = (value: string) => {
  if (isEmpty(value)) return { result: false, message: "비밀번호를 입력해주세요." }

  if (isPasswordLessThanEight(value)) return { result: false, message: "비밀번호는 최소 8글자 이상입니다." }

  if (isPasswordValid(value))
    return { result: false, message: "비밀번호에는 최소 하나의 문자, 하나의 숫자 ,하나의 특수문자가 포함되어야 합니다" }

  return { result: true, message: "Validation Success" }
}

export const passwordConfirmValidation = (value: string, passwordConfirmValue: string) => {
  if (isEmpty(value)) return { result: false, message: "비밀번호를 입력해주세요." }

  if (isNotPasswordMatch(value, passwordConfirmValue))
    return { result: false, message: "비밀번호가 일치하지 않습니다." }

  return { result: true, message: "Validation Success" }
}
