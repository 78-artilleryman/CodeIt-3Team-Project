export const isEmailValid = (value: string) => {
  const emailRegex = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/
  return emailRegex.test(value)
}

export const isPasswordValid = (value: string) => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/
  return passwordRegex.test(value)
}

export const isPasswordLengthEightMore = (value: string) => value.trim().length >= 8

export const isEmpty = (value: string) => value.trim().length === 0

// Refactoring 대상
export const emailValidation = (value: string) => {
  if (isEmpty(value)) {
    return { result: false, message: "이메일을 입력해주세요." }
  }

  if (!isEmpty(value) && !isEmailValid(value)) {
    return { result: false, message: "유효한 이메일 형식이 아닙니다." }
  }

  return { result: true, message: "Validation Success" }
}

// Refactoring 대상
export const nameValidation = (value: string) => {
  if (isEmpty(value)) {
    return { result: false, message: "이름을 입력해주세요." }
  }

  if (!isEmpty(value) && value.trim().length < 2) {
    return { result: false, message: "이름은 최소 두글자 이상입니다." }
  }

  return { result: true, message: "Validation Success" }
}

// Refactoring 대상
export const passwordValidation = (value: string) => {
  if (isEmpty(value)) {
    return { result: false, message: "비밀번호를 입력해주세요." }
  }

  if (!isEmpty(value) && !isPasswordLengthEightMore(value)) {
    return { result: false, message: "비밀번호는 최소 8글자 이상입니다." }
  }

  if (!isEmpty(value) && !isPasswordValid(value)) {
    return { result: false, message: "비밀번호에는 최소 하나의 문자, 하나의 숫자 ,하나의 특수문자가 포함되어야 합니다" }
  }

  return { result: true, message: "Validation Success" }
}
