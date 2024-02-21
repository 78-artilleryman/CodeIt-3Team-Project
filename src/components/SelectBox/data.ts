//모집구분
export const classification = {
  title: "스터디 종류",
  icon: "🗂 ",
  selectedIcon: "🗂 ",
  list: [
    { value: "study", name: "스터디" },
    { value: "project", name: "프로젝트" },
  ],
};

//모집인원
export const members = {
  title: "모집 인원",
  icon: "👨‍👨‍👦‍👦 ",
  selectedIcon: "👨‍👨‍👦‍👦 ",
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
  selectedIcon: "🏠 ",
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
  selectedIcon: "⏰ ",
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
  icon: "📚 ",
  list: [
    { value: "javascript", name: "Javascript" },
    { value: "typescript", name: "Typescript" },
    { value: "nextjs", name: "Nextjs" },
    { value: "react", name: "React" },
  ],
};

//필터 데이터
//모집구분
export const filterClassificationData = {
  title: "스터디 종류",
  icon: "🗂 ",
  list: ["전체", "스터디", "프로젝트"],
};

//스터디 횟수
export const filterStudyCountData = {
  title: "스터디 횟수",
  icon: "⏰ ",
  list: ["전체", "주 1회", "주 2회", "주 3회", "주 4회", "주 5회", "주 6회", "주 7회", "횟수협의"],
};

//라이브러리 및 프레임워크
export const filterStack = {
  title: "기술 스택",
  subtitle: ["라이브러리 및 프레임 워크", "스타일"],
  icon: "📚",
  stack: [
    {
      id: 1,
      image: "LogoImages/FilterStack/F-typescript.png",
      value: "TypeScript",
      name: "TypeScript",
    },
    {
      id: 2,
      image: "LogoImages/FilterStack/F-javascript.png",
      value: "JavaScript",
      name: "JavaScript",
    },
    {
      id: 3,
      image: "LogoImages/FilterStack/F-nextjs.png",
      value: "NextJs",
      name: "Next Js",
    },
    {
      id: 4,
      image: "LogoImages/FilterStack/F-react.png",
      value: "ReactJs",
      name: "React Js",
    },
  ],
  css: [
    {
      id: 1,
      image: "LogoImages/FilterStack/F-css.png",
      value: "CSS",
      name: "CSS",
    },
    {
      id: 2,
      image: "LogoImages/FilterStack/F-styledcomponent.png",
      value: "StyledComponents",
      name: "Styled Components",
    },
    {
      id: 3,
      image: "LogoImages/FilterStack/F-sass.png",
      value: "Scss",
      name: "Scss",
    },
    {
      id: 4,
      image: "LogoImages/FilterStack/F-postcss.png",
      value: "Postcss",
      name: "Post css",
    },
    {
      id: 5,
      image: "LogoImages/FilterStack/F-tailwind.png",
      value: "Tailwind",
      name: "Tailwind",
    },
  ],
};
