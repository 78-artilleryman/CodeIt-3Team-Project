import React from "react";
import styles from "./FormHeader.module.scss";

interface FormHeaderProps {
  title: string;
  content: string;
}

function FormHeader({ title, content }: FormHeaderProps) {
  return (
    <div className={styles.form_section__header}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default FormHeader;
