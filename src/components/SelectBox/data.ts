//모집구분
export const classification = {
  title: "스터디 종류",
  icon: "🗂 ",
  list: ["전체", "스터디", "프로젝트"],
};

//모집인원
export const members = {
  title: "모집 인원",
  icon: "👨‍👨‍👦‍👦 ",
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
  icon: "🏠 ",
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
  icon: "⏰ ",
  list: ["전체", "주 1회", "주 2회", "주 3회", "주 4회", "주 5회", "주 6회", "주 7회", "횟수협의"],
};

//기술 스택
export const stack = {
  title: "기술 스택",
  icon: "📚 ",
  list: [
    { value: "javascript", name: "Javascript" },
    { value: "typescript", name: "Typescript" },
    { value: "nextjs", name: "Nextjs" },
    { value: "react", name: "React" },
  ],
};
