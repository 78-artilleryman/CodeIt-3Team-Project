interface ValidateMapping {
  [index: string]: {
    [index: string]: { result: boolean; message: string }
  }
}

interface ValidationFn {
  [index: string]: any
}

/**
 * ! name
 * ! 이름에 값이 없을 때
 * ! 이름에 값이 있고, 이름 형식에 유효하지 않을 때
 *
 * ! email
 * ! 이메일에 값이 없을 때
 * ! 이메일에 값이 있고, 이메일 형식에 유효하지 않을 때
 *
 * ! password
 * ! 패스워드에 값이 없을 때
 * ! 패스워드에 값이 있고, 패스워드 형식에 유효하지 않을 때
 */

const isEmpty = (value: string) => value.trim().length === 0 && "isEmpty"

const isNotNameValid = (value: string) => !isEmpty(value) && value.trim().length < 2 && "isNotNameValid"

const isNotEmailValid = (value: string) => {
  const emailRegex = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/
  return !isEmpty(value) && !emailRegex.test(value) && "isNotEmailValid"
}

const isNotPasswordValid = (value: string) => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/
  return !passwordRegex.test(value) && "isNotPasswordValid"
}

const isPasswordLessThanEight = (value: string) => value.trim().length <= 8 && "isPasswordLessThanEight"

const isNotPasswordMatch = (confirmValue: string, passwordValue: string) =>
  confirmValue !== passwordValue && "isNotPasswordMatch"

const validateMapping: ValidateMapping = {
  name: {
    isEmpty: { result: false, message: "이름을 입력해주세요." },
    isNotNameValid: { result: false, message: "이름은 최소 두글자 이상입니다." },
    success: { result: true, message: "Validation Success" },
  },
  email: {
    isEmpty: { result: false, message: "이메일을 입력해주세요." },
    isNotEmailValid: { result: false, message: "유효한 이메일 형식이 아닙니다." },
    success: { result: true, message: "Validation Success" },
  },
  password: {
    isEmpty: { result: false, message: "비밀번호를 입력해주세요." },
    isPasswordLessThanEight: { result: false, message: "비밀번호는 최소 8글자 이상입니다." },
    isNotPasswordValid: {
      result: false,
      message: "비밀번호에는 최소 하나의 문자, 하나의 숫자 ,하나의 특수문자가 포함되어야 합니다",
    },
    success: { result: true, message: "Validation Success" },
  },
  passwordConfirm: {
    isEmpty: { result: false, message: "비밀번호를 입력해주세요." },
    isNotPasswordMatch: { result: false, message: "비밀번호가 일치하지 않습니다." },
    success: { result: true, message: "Validation Success" },
  },
}

const validationFn: ValidationFn = {
  name: [isEmpty, isNotNameValid],
  email: [isEmpty, isNotEmailValid],
  password: [isEmpty, isPasswordLessThanEight, isNotPasswordValid],
  passwordConfirm: [isEmpty, isNotPasswordMatch],
}

export const validationResult = (value: string, key: string, paswordValue?: string) => {
  let result = "success"

  for (const validation of validationFn[key]) {
    if (!validation(value)) continue
    console.log(validation(value), validationFn[key])
    result = validation(value) as string
  }

  return validateMapping[key][result]
}
