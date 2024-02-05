import React from "react";
import styles from "./PostBox.module.scss";
import { Link } from "react-router-dom";

interface PostBoxProps {
  // 게시물 카테고리
  id: string;
  type: string; // 스터디 종류
  personnel: string; // 모집 인원
  meeting: string; // 진행 방식
  period: string; // 진행 기간
  postDeadline: string; // 모집 마감일
  stacks: string[]; // 기술 스택
  // 게시물 내용
  postTitle: string;
  postSubTitle: string;
  postContent: string;
  uid: string;
  createdAt: string;
}

function PostBox(props: PostBoxProps) {
  const { id, type, postTitle, postSubTitle, stacks, uid, createdAt, postDeadline } = props;

  const getImageSrc = (stack: string) => `LogoImages/${stack}.png`;

  return (
    <div className={styles.post} key={id}>
      <Link to={`/posts/${id}`}>
        <div className={styles.post_title}>
          <div className={styles.post_title__tag}>{type}</div>
          <div className={styles.post_title__tag}>❗ 마감임박</div>
        </div>
        <div className={styles.post_content}>
          <p>{`${createdAt} - ${postDeadline}`}</p>
          <h3>{postTitle}</h3>
          <h4>{postSubTitle}</h4>
          <div className={styles.post_content__stack}>
            {stacks.map((stack, index) => (
              <img key={index} src={getImageSrc(stack)} alt={stack} />
            ))}
          </div>
        </div>
        <div className={styles.post_user}>
          <img src="LogoImages/basicProfile.png" alt="" />
          <p>{uid}</p>
        </div>
      </Link>
    </div>
  );
}

export default PostBox;
