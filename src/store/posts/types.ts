export interface PostDataInfo {
  // 게시물 카테고리
  id: string;
  studyType: string; // 스터디 종류
  personnel: string; // 모집 인원
  meeting: string; // 진행 방식
  period: string; // 진행 기간
  projectStartDate: string; //프로젝트 시작일
  projectEndDate: string;
  postDeadline: string; // 모집 마감일
  stacks: string[]; // 기술 스택
  hashTag?: string;
  closed: boolean;
  // 게시물 내용
  postTitle: string;
  postSubTitle: string;
  postContent: string;
  uid: string;
  createdAt: string;
  userName?: string;
}
