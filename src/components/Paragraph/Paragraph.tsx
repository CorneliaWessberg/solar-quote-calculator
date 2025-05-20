import React, { ReactNode } from "react";
import clsx from "clsx";

// styles
import styles from "./Paragraph.module.css";

type ParagraphProps = {
  className?: string;
  children?: ReactNode;
  variant?: "s" | "m" | "l";
};

export default function Paragraph({
  className,
  children,
  variant = "s",
}: ParagraphProps) {
  return (
    <p className={clsx(styles["paragraph"], styles[variant], className)}>
      {children}
    </p>
  );
}
