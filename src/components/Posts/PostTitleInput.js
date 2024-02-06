import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import styles from "./PostTitleInput.module.scss";
export default function PostTitleInput({ postTitle, setPostTitle }) {
  function setTitle(e) {
    setPostTitle(e.target.value);
  }
  return (
    <div className={styles.input_container}>
      <p className={styles.input_title}>스터디 제목</p>
      <input
        className={styles.post_title_input}
        placeholder="프로젝트 제목을 입력해주세요."
        value={postTitle}
        onChange={setTitle}
      ></input>
    </div>
  );
}
