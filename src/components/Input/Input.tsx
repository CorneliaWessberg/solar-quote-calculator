import React from "react";
import clsx from "clsx";

// styles
import styles from "./Input.module.css";

// components

type InputProps = {
  className?: string;
  variant?: "text" | "email" | "phone" | "number";
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
  label?: string;
};

export default function Input({
  className,
  variant = "text",
  name,
  value,
  onChange,
  required, 
  placeholder,
  label
}: InputProps) {
  return (
    <div className={styles["input-wrapper"]}>
    <label>{label}</label>
    <input
      type={variant}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className={clsx(styles["input"], className)}
    />
    </div>
  );
}
