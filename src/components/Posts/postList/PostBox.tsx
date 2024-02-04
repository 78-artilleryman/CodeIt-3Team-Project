import React from "react";
import styles from "./PostBox.module.scss";
import { Link } from "react-router-dom";

interface PostBoxProps {
  id: number;
  postType: string;
  postTitle: string;
  postSubTitle: string;
  stacks: string[];
  uid: string;
  createdAt: string;
  postDeadline: string;
}

function PostBox(props: PostBoxProps) {
  const { id, postType, postTitle, postSubTitle, stacks, uid, createdAt, postDeadline } = props;

  const getImageSrc = (stack: string) => `LogoImages/${stack}.png`;

  return (
    <div className={styles.post} key={id}>
      <Link to={`/posts/${id}`}>
        <div className={styles.post_title}>
          <div className={styles.post_title__tag}>{postType}</div>
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
