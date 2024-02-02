//모집구분
export const classification = {
  title: "스터디 종류",
  placehoder: "🗂 스터디 종류",
  list: [
    { value: "study", name: "스터디" },
    { value: "project", name: "프로젝트" },
  ],
};

//모집인원
export const members = {
  title: "모집 인원",
  placehoder: "👨‍👨‍👦‍👦 모집인원",
  list: [
    { value: 3, name: "3명" },
    { value: 4, name: "4명" },
    { value: 5, name: "5명" },
    { value: 6, name: "6명" },
  ],
};

//진행방식
export const system = {
  title: "진행 방식",
  placehoder: "🏠 온라인 / 위워크",
  position: "bottom",

  list: [
    { value: "offline", name: "위워크" },
    { value: "online", name: "프로젝트" },
    { value: "both", name: "스터디" },
  ],
};

//스터디 횟수
export const studyCount = {
  title: "스터디 횟수",
  placehoder: "⏰ 스터디 횟수",
  list: [
    { value: "w1", name: "주 1회" },
    { value: "w2", name: "주 2회" },
    { value: "w3", name: "주 3회" },
    { value: "w4", name: "주 4회" },
    { value: "w5", name: "주 5회" },
    { value: "w6", name: "주 6회" },
    { value: "w7", name: "주 7회" },
    { value: "consultation", name: "횟수협의" },
  ],
};

//기술 스택
export const stack = {
  title: "기술 스택",
  placehoder: "📚 필요한 기술들을 선택하세요.",
  list: [
    { value: "javascript", name: "Javascript" },
    { value: "typescript", name: "Typescript" },
    { value: "nextjs", name: "Nextjs" },
    { value: "react", name: "React" },
  ],
};
