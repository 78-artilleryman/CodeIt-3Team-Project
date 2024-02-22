import React from "react";
import styles from "./PostBox.module.scss";
import { Link } from "react-router-dom";

interface PostBoxProps {
  // 게시물 카테고리
  post: {
    id: string;
    studyType: string; // 스터디 종류
    personnel: string; // 모집 인원
    meeting: string; // 진행 방식
    period: string; // 진행 기간
    projectStartDate: string;
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
  };
}

function PostBox({ post }: PostBoxProps) {
  const {
    id,
    studyType,
    postTitle,
    postSubTitle,
    stacks,
    uid,
    createdAt,
    postDeadline,
    userName,
    projectStartDate,
    projectEndDate,
    closed,
  } = post;

  const getImageSrc = (stack: string) => `LogoImages/postBox/${stack}.png`;
  const closeName = closed ? styles["close"] : "";

  return (
    <div className={`${styles.post} ${closeName}`} key={id}>
      <Link to={`/posts/${id}`}>
        <div className={styles.post_title}>
          <div className={styles.post_title__tag}>{studyType}</div>
          <div className={styles.post_title__tag}>❗ 마감임박</div>
        </div>
        <div className={styles.post_content}>
          <p>{`${projectStartDate} - ${projectEndDate}`}</p>
          <h3>{postTitle}</h3>
          <h4>{postSubTitle}</h4>
          <div className={styles.post_content__stack}>
            {stacks.map((stack, index) => (
              <img key={index} src={getImageSrc(stack)} alt={stack} />
            ))}
          </div>
        </div>
        <div className={styles.post_user}>
          <img src="LogoImages/postBox/basicProfile.png" alt="profile" />
          <p>{userName}</p>
        </div>
      </Link>
      {closed && <button className={styles.closeButton}>공고 마감</button>}
    </div>
  );
}

export default PostBox;
