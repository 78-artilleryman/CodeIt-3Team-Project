import React from "react";
import PostBox from "./PostBox";

const testData = [
  {
    id: 1,
    postType: "프로젝트",
    postTitle: "벨로그 클론코딩 모집합니다.",
    postSubTitle: "코드잇 3팀과 함께 할 스터디원 2명 구합니다.! 열정만 있으면 됩니다.",
    stacks: ["typescript", "javascript", "nextjs", "react"],
    uid: "ywy040150",
    createdAt: "2024. 1. 17. 오후 11:03:02",
    postDeadline: "2024. 1. 21",
  },
  {
    id: 2,
    postType: "스터디",
    postTitle: "벨로그 클론코딩 모집합니다.",
    postSubTitle:
      "코드잇 3팀과 함께 할 스터디원 2명 구합니다.! 열정만 있으면 됩니다. 코드잇 3팀과 함께 할 스터디원 2명 구합니다.! 열정만 있으면 됩니다.",
    stacks: ["typescript", "nextjs", "react"],
    uid: "ywy040150",
    createdAt: "2024. 1. 17. 오후 11:03:02",
    postDeadline: "2024. 1. 21",
  },
  {
    id: 3,
    postType: "프로젝트",
    postTitle: "벨로그 클론코딩 모집합니다.",
    postSubTitle: "코드잇 3팀과 함께 할 스터디원 2명 구합니다.! 열정만 있으면 됩니다.",
    stacks: ["nextjs", "react"],
    uid: "ywy040150",
    createdAt: "2024. 1. 17. 오후 11:03:02",
    postDeadline: "2024. 1. 21",
  },
  {
    id: 4,
    postType: "프로젝트",
    postTitle: "벨로그 클론코딩 모집합니다.",
    postSubTitle: "코드잇 3팀과 함께 할 스터디원 2명 구합니다.! 열정만 있으면 됩니다.",
    stacks: ["typescript"],
    uid: "ywy040150",
    createdAt: "2024. 1. 17. 오후 11:03:02",
    postDeadline: "2024. 1. 21",
  },
  {
    id: 5,
    postType: "프로젝트",
    postTitle: "벨로그 클론코딩 모집합니다.",
    postSubTitle: "코드잇 3팀과 함께 할 스터디원 2명 구합니다.! 열정만 있으면 됩니다.",
    stacks: ["typescript", "javascript", "nextjs", "react"],
    uid: "ywy040150",
    createdAt: "2024. 1. 17. 오후 11:03:02",
    postDeadline: "2024. 1. 21",
  },
  {
    id: 6,
    postType: "프로젝트",
    postTitle: "벨로그 클론코딩 모집합니다.",
    postSubTitle: "코드잇 3팀과 함께 할 스터디원 2명 구합니다.! 열정만 있으면 됩니다.",
    stacks: ["typescript", "javascript", "nextjs", "react"],
    uid: "ywy040150",
    createdAt: "2024. 1. 17. 오후 11:03:02",
    postDeadline: "2024. 1. 21",
  },
  {
    id: 7,
    postType: "프로젝트",
    postTitle: "벨로그 클론코딩 모집합니다.",
    postSubTitle: "코드잇 3팀과 함께 할 스터디원 2명 구합니다.! 열정만 있으면 됩니다.",
    stacks: ["typescript", "javascript", "nextjs", "react"],
    uid: "ywy040150",
    createdAt: "2024. 1. 17. 오후 11:03:02",
    postDeadline: "2024. 1. 21",
  },
  {
    id: 8,
    postType: "프로젝트",
    postTitle: "벨로그 클론코딩 모집합니다.",
    postSubTitle: "코드잇 3팀과 함께 할 스터디원 2명 구합니다.! 열정만 있으면 됩니다.",
    stacks: ["typescript", "javascript", "nextjs", "react"],
    uid: "ywy040150",
    createdAt: "2024. 1. 17. 오후 11:03:02",
    postDeadline: "2024. 1. 21",
  },
  {
    id: 9,
    postType: "프로젝트",
    postTitle: "벨로그 클론코딩 모집합니다.",
    postSubTitle: "코드잇 3팀과 함께 할 스터디원 2명 구합니다.! 열정만 있으면 됩니다.",
    stacks: ["typescript", "javascript", "nextjs", "react"],
    uid: "ywy040150",
    createdAt: "2024. 1. 17. 오후 11:03:02",
    postDeadline: "2024. 1. 21",
  },
];

function PostList() {
  return (
    <>
      {testData.map(data => (
        <PostBox
          key={data.id}
          id={data.id}
          postType={data.postType}
          postTitle={data.postTitle}
          postSubTitle={data.postSubTitle}
          stacks={data.stacks}
          uid={data.uid}
          createdAt={data.createdAt}
          postDeadline={data.postDeadline}
        />
      ))}
    </>
  );
}

export default PostList;
