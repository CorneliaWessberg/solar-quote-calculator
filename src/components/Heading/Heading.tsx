import React, { ReactNode } from "react";
import clsx from "clsx";

// styles
import styles from "./Heading.module.css";

type TagVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";

type HeadingType = {
  className?: string;
  tag?: TagVariant;
  size?: "s" | "m" | "l";
  children?: ReactNode;
};

export default function Heading({ tag = "h2", size = "l", children, className }: HeadingType) {
  const Element: TagVariant = tag as TagVariant;
  return <Element className={clsx(styles["heading"], styles[tag], styles[size], className)}>{children}</Element>;
}
