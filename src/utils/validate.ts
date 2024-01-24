export const isEmpty = (value: string) => value.trim().length === 0

export const isNotNameValid = (value: string) => !isEmpty(value) && value.trim().length < 2

export const isNotEmailValid = (value: string) => {
  const emailRegex = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/
  return !isEmpty(value) && emailRegex.test(value)
}

export const isPasswordValid = (value: string) => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/
  return !isEmpty(value) && passwordRegex.test(value)
}

export const isPasswordLessThanEight = (value: string) => !isEmpty(value) && value.trim().length < 8

export const isNotPasswordMatch = (passwordValue: string, confirmValue: string) =>
  !isEmpty(confirmValue) && passwordValue !== confirmValue
