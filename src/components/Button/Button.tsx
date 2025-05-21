import React, { ReactNode } from "react";
import clsx from "clsx";

// styles
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary" | "back" | "forward";

type ButtonType = {
  variant?: ButtonVariant;
  children?: ReactNode;
  onClick?: () => void;
};

export default function Button({
  variant = "primary",
  children,
  onClick,
}: ButtonType) {
  return (
    <button className={clsx(styles["button"], styles[variant])} onClick={onClick}>
      {children}
    </button>
  );
}
