import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import styles from "./PostSubTitleInput.module.scss";
export default function PostSubTitleInput({ postSubTitle, setPostSubTitle }) {
  function setSub(e) {
    setPostSubTitle(e.target.value);
  }
  return (
    <div className={styles.input_container}>
      <label className={styles.input_title}>요약 내용</label>
      <input
        className={styles.post_sub_title_input}
        placeholder="요약 내용을 입력해주세요."
        value={postSubTitle}
        onChange={setSub}
      ></input>
    </div>
  );
}
