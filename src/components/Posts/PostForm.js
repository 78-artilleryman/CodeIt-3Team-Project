import PostSelect from "components/SelectBox/PostSelect";
import * as selectData from "components/SelectBox/data";
import { useState, useEffect } from "react";
import { db } from "firebaseApp/config";
import firebase, { app } from "firebaseApp/config";
import { collection, getDocs, doc, setDoc, addDoc, getDoc, Firestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import PostTitleInput from "./PostTitleInput";
import PostContentInput from "./PostContentInput";
import PostSubTitleInput from "./PostSubTitleInput";

import style from "./PostForm.module.scss";
import styles from "./PostButtonBox.module.scss";
import PostStackSelect from "components/SelectBox/PostStackSelect";
import DateRangePicker from "components/SelectBox/DateRangePicker";
import HashtagInput from "components/SelectBox/HashTagInput";
import { useSelector } from "react-redux";
import { RootState } from "store/configureStore";
function PostForm() {
  // 셀렉터 (순서는 데이터에 있는 수서 그대로입니다)
  const [studyType, setStudyType] = useState("");
  const [studyMember, setStudyMember] = useState("");
  const [studySystem, setStudySystem] = useState("");
  const [studyCount, setStudyCount] = useState("");
  const [stacks, setStacks] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [optionDate, setOptionDate] = useState(null);
  const [hashtags, setHashtags] = useState([]);

  // 인풋
  const [postTitle, setPostTitle] = useState("");
  const [postSubTitle, setPostSubTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [uid, setUid] = useState("");
  const [postType, setPostType] = useState("");

  const auth = getAuth(app);
  const { user } = useSelector(state => state.auth);

  const formatDate = date => {
    if (!date) return "";
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const post = {
    studyType: studyType,
    studyMember: studyMember,
    studySystem: studySystem,
    studyCount: studyCount,
    postTitle: postTitle,
    postSubTitle: postSubTitle,
    postContent: postContent,
    stacks: stacks,
    uid: uid,
    createdAt: "2024. 1. 17. 오후 11:03:02",
    projectStartDate: startDate,
    projectEndDate: endDate,
    postDeadline: formatDate(optionDate),
    hashtags: hashtags,
    userName: user.displayName,
    closed: false,
  };
  function hasEmptyKeys(obj) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === "") {
        return true; // 빈 문자열이 발견되면 true 반환
      }
    }
    return false; // 빈 문자열이 없으면 false 반환
  }
  const isEmptyKeyExists = hasEmptyKeys(post);
  console.log(isEmptyKeyExists);
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUid(user.uid);
      post.uid = uid;
    });
  });

  const handleStudyType = value => {
    setStudyType(value);
  };

  const handleMember = value => {
    setStudyMember(value);
  };

  const handleStudySystem = value => {
    setStudySystem(value);
  };

  const handleStudyCount = value => {
    setStudyCount(value);
  };

  const onSubmit = () => {};

  console.log(hashtags);
  return (
    <>
      <div className={style.select_container}>
        <div className={style.select_container_title}>기본정보를 입력해주세요.</div>

        <div className={style.select_conatainer_grid}>
          <div>
            <PostSelect
              title={selectData.classification.title}
              placehoder={selectData.classification.placehoder}
              list={selectData.classification.list}
              onChange={handleStudyType}
              icon={selectData.classification.icon}
            />
            <button onClick={onSubmit}></button>
          </div>
          <div>
            <PostSelect
              title={selectData.members.title}
              placehoder={selectData.members.placehoder}
              list={selectData.members.list}
              onChange={handleMember}
              icon={selectData.members.icon}
            />
            <button onClick={onSubmit}></button>
          </div>
          <div>
            <PostSelect
              title={selectData.system.title}
              placehoder={selectData.system.placehoder}
              list={selectData.system.list}
              onChange={handleStudySystem}
              icon={selectData.system.icon}
            />
            <button onClick={onSubmit}></button>
          </div>
          <div>
            <PostSelect
              title={selectData.studyCount.title}
              placehoder={selectData.studyCount.placehoder}
              list={selectData.studyCount.list}
              onChange={handleStudyCount}
              icon={selectData.studyCount.icon}
            />
            <button onClick={onSubmit}></button>
          </div>
          <div>
            <PostStackSelect
              title={selectData.filterStack.title}
              icon={selectData.filterStack.icon}
              subtitle={selectData.filterStack.subtitle}
              stack={selectData.filterStack.stack}
              css={selectData.filterStack.css}
              setStacks={setStacks}
              stacks={stacks}
              value={selectData.filterStack.value}
            />

            <button onClick={onSubmit}></button>
          </div>

          <div>
            <DateRangePicker
              startDate={startDate}
              endDate={endDate}
              optionDate={optionDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
              setOptionDate={setOptionDate}
              formatDate={formatDate}
            />
          </div>
          <div>
            <HashtagInput hashtags={hashtags} setHashtags={setHashtags} />
          </div>
        </div>
      </div>

      <div style={{ margin: "0 auto", width: "1300px" }}>
        <form className={style.post_form_container}>
          <PostTitleInput postTitle={postTitle} setPostTitle={setPostTitle} />
          <PostSubTitleInput postSubTitle={postSubTitle} setPostSubTitle={setPostSubTitle} />
          <PostContentInput postContent={postContent} setPostContent={setPostContent} />
          <div className={styles.post_button_box}>
            <button className={styles.post_cancel_button}>작성한거 취소할래요.</button>
            <button
              className={styles.post_submit_button}
              onClick={e => {
                e.preventDefault();
                addDoc(collection(db, "posts"), post);
              }}
              disabled={isEmptyKeyExists}
            >
              발행 할래요.
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default PostForm;
