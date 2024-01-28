export const isEmailValid = (value: string) => {
  const emailRegex = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
  return emailRegex.test(value);
};

export const isPasswordValid = (value: string) => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/;
  return passwordRegex.test(value);
};

export const isPasswordLengthEightMore = (value: string) => value.trim().length >= 8;

export const isNotEmpty = (value: string) => value.trim().length !== 0;

// Refactoring 대상
export const emailValidation = (value: string) => {
  // 검증 사항 배열 정의
  const validations = [
    { check: () => isNotEmpty(value), message: "이메일을 입력해주세요." },
    { check: () => isEmailValid(value), message: "유효한 이메일 형식이 아닙니다.🙁" },
  ];

  // 배열에서 첫 번째 실패한 검증을 찾거나 모든 검증이 통과하면 성공 메시지 반환
  return validations.find(validation => !validation.check()) || { result: true, message: "" };
};

// 이름 유효성 검사 함수
export const nameValidation = (value: string) => {
  // 검증 사항 배열 정의
  const validations = [
    { check: () => isNotEmpty(value), message: "이름을 입력해주세요." },
    { check: () => value.trim().length >= 2, message: "이름은 최소 두글자 이상입니다.🙁" },
  ];

  // 배열에서 첫 번째 실패한 검증을 찾거나 모든 검증이 통과하면 성공 메시지 반환
  return validations.find(validation => !validation.check()) || { result: true, message: "" };
};

// 비밀번호 유효성 검사 함수
export const passwordValidation = (value: string) => {
  // 검증 사항 배열 정의
  const validations = [
    { check: () => isNotEmpty(value), message: "비밀번호를 입력해주세요." },
    { check: () => isPasswordLengthEightMore(value), message: "비밀번호는 최소 8글자 이상입니다.🙁" },
    {
      check: () => isPasswordValid(value),
      message: "비밀번호에는 최소 하나의 문자, 하나의 숫자, 하나의 특수문자가 포함되어야 합니다.🙁",
    },
  ];

  // 배열에서 첫 번째 실패한 검증을 찾거나 모든 검증이 통과하면 성공 메시지 반환
  return validations.find(validation => !validation.check()) || { result: true, message: "" };
};

// 비밀번호 유효성 검사 함수
export const passwordConfirmValidation = (value: string, password: string) => {
  // 검증 사항 배열 정의
  const validations = [
    { check: () => isNotEmpty(value), message: "비밀번호 확인을 입력해주세요." },
    { check: () => value === password, message: "비밀번호와 일치하지 않습니다.🙁" },
  ];

  // 배열에서 첫 번째 실패한 검증을 찾거나 모든 검증이 통과하면 성공 메시지 반환
  return validations.find(validation => !validation.check()) || { result: true, message: "" };
};

// 비밀번호 유효성 검사 함수
export const loginPasswordValidation = (value: string) => {
  // 검증 사항 배열 정의
  const validations = [{ check: () => isNotEmpty(value), message: "비밀번호를 입력해주세요." }];

  // 배열에서 첫 번째 실패한 검증을 찾거나 모든 검증이 통과하면 성공 메시지 반환
  return validations.find(validation => !validation.check()) || { result: true, message: "" };
};
