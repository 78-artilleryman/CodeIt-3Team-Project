import Header from "components/Common/Header";
import PostBox from "components/Posts/PostBox";
import React from "react";
import styles from "./Home.module.scss";
import Stack from "components/Common/Stack";
import SelectBox from "components/SelectBox/SelectBox";
import * as selectData from "components/SelectBox/data";

const testData = [
  {
    postType: "프로젝트",
    postTitle: "벨로그 클론코딩 모집합니다.",
    postSubTitle: "코드잇 3팀과 함께 할 스터디원 2명 구합니다.! 열정만 있으면 됩니다.",
    stacks: ["typescript", "javascript", "nextjs", "react"],
    uid: "ywy040150",
    createdAt: "2024. 1. 17. 오후 11:03:02",
    postDeadline: "2024. 1. 21",
  },
  {
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
    postType: "프로젝트",
    postTitle: "벨로그 클론코딩 모집합니다.",
    postSubTitle: "코드잇 3팀과 함께 할 스터디원 2명 구합니다.! 열정만 있으면 됩니다.",
    stacks: ["nextjs", "react"],
    uid: "ywy040150",
    createdAt: "2024. 1. 17. 오후 11:03:02",
    postDeadline: "2024. 1. 21",
  },
  {
    postType: "프로젝트",
    postTitle: "벨로그 클론코딩 모집합니다.",
    postSubTitle: "코드잇 3팀과 함께 할 스터디원 2명 구합니다.! 열정만 있으면 됩니다.",
    stacks: ["typescript"],
    uid: "ywy040150",
    createdAt: "2024. 1. 17. 오후 11:03:02",
    postDeadline: "2024. 1. 21",
  },
  {
    postType: "프로젝트",
    postTitle: "벨로그 클론코딩 모집합니다.",
    postSubTitle: "코드잇 3팀과 함께 할 스터디원 2명 구합니다.! 열정만 있으면 됩니다.",
    stacks: ["typescript", "javascript", "nextjs", "react"],
    uid: "ywy040150",
    createdAt: "2024. 1. 17. 오후 11:03:02",
    postDeadline: "2024. 1. 21",
  },
  {
    postType: "프로젝트",
    postTitle: "벨로그 클론코딩 모집합니다.",
    postSubTitle: "코드잇 3팀과 함께 할 스터디원 2명 구합니다.! 열정만 있으면 됩니다.",
    stacks: ["typescript", "javascript", "nextjs", "react"],
    uid: "ywy040150",
    createdAt: "2024. 1. 17. 오후 11:03:02",
    postDeadline: "2024. 1. 21",
  },
  {
    postType: "프로젝트",
    postTitle: "벨로그 클론코딩 모집합니다.",
    postSubTitle: "코드잇 3팀과 함께 할 스터디원 2명 구합니다.! 열정만 있으면 됩니다.",
    stacks: ["typescript", "javascript", "nextjs", "react"],
    uid: "ywy040150",
    createdAt: "2024. 1. 17. 오후 11:03:02",
    postDeadline: "2024. 1. 21",
  },
  {
    postType: "프로젝트",
    postTitle: "벨로그 클론코딩 모집합니다.",
    postSubTitle: "코드잇 3팀과 함께 할 스터디원 2명 구합니다.! 열정만 있으면 됩니다.",
    stacks: ["typescript", "javascript", "nextjs", "react"],
    uid: "ywy040150",
    createdAt: "2024. 1. 17. 오후 11:03:02",
    postDeadline: "2024. 1. 21",
  },
  {
    postType: "프로젝트",
    postTitle: "벨로그 클론코딩 모집합니다.",
    postSubTitle: "코드잇 3팀과 함께 할 스터디원 2명 구합니다.! 열정만 있으면 됩니다.",
    stacks: ["typescript", "javascript", "nextjs", "react"],
    uid: "ywy040150",
    createdAt: "2024. 1. 17. 오후 11:03:02",
    postDeadline: "2024. 1. 21",
  },
];

function HomePage() {
  return (
    <main className={styles.container}>
      <Header />
      <section className={styles.section}>
        <SelectBox
          title={selectData.classification.title}
          position={"bottom"}
          size={"large"}
          list={selectData.classification.list}
        />
        <SelectBox
          title={selectData.studyCount.title}
          position={"bottom"}
          size={"large"}
          list={selectData.studyCount.list}
        />{" "}
        <SelectBox
          title={selectData.studyCount.title}
          position={"bottom"}
          size={"large"}
          list={selectData.studyCount.list}
        />
      </section>
      <section className={styles.section}>
        {testData.map(data => (
          <PostBox
            postType={data.postType}
            postTitle={data.postTitle}
            postSubTitle={data.postSubTitle}
            stacks={data.stacks}
            uid={data.uid}
            createdAt={data.createdAt}
            postDeadline={data.postDeadline}
          />
        ))}
      </section>
    </main>
  );
}

export default HomePage;
