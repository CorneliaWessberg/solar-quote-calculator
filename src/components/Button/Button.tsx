import React, { ReactNode, ButtonHTMLAttributes  } from "react";
import clsx from "clsx";

// styles
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary" | "back" | "forward";

type ButtonType = {
  className?: string;
  variant?: ButtonVariant;
  children?: ReactNode;
  onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  className,
  variant = "primary",
  children,
  onClick,
  ...props
}: ButtonType) {
  return (
    <button className={clsx(styles["button"], styles[variant], className)} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
