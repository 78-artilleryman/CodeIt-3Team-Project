import MDEditor from "@uiw/react-md-editor";
import styles from "./PostContentInput.module.scss";
export default function PostContentInput({ postContent, setPostContent }) {
  return (
    <div className={styles.content_preview_container}>
      <div className={styles.content_input_container}>
        <p className={styles.input_title}>스터디 상세 내용</p>
        <MDEditor
          height={"370px"}
          value={postContent}
          onChange={setPostContent}
          textareaProps={{
            placeholder: "상세 내용을 입력해 주세요.",
          }}
          preview="edit"
        />
      </div>

      <div className={styles.content_preview_container}>
        <MDEditor.Markdown height="800px" source={postContent} style={{ whiteSpace: "pre-wrap" }} />
      </div>
    </div>
  );
}
