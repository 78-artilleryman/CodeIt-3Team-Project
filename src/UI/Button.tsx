import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  isDisabled?: boolean;
  type?: "button" | "submit";
  name?: string;
}

interface ButtonState {
  className: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button({ type, className, isDisabled, children, name, onClick }: ButtonProps & ButtonState) {
  const buttonType = type || "button";
  const disabled = isDisabled || false;

  return (
    <button
      type={buttonType}
      onClick={onClick}
      className={`${styles[className]} ${styles.form_button}`}
      disabled={disabled}
      name={name}
    >
      {children}
    </button>
  );
}

export default Button;
