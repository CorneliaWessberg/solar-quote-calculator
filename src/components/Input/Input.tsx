import React from "react";
import clsx from "clsx";

// styles
import styles from "./Input.module.css";

// components
import Paragraph from "@/components/Paragraph/Paragraph";

type InputProps = {
  className?: string;
  variant?: "text" | "email" | "phone" | "number";
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
  label?: string;
  error?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = "text", name, value, onChange, placeholder, label, error }, ref) => {
    return (
      <div className={styles["input-wrapper"]}>
        {label && <label htmlFor={name}>{label}</label>}
        <input
          type={variant}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={clsx(styles["input"], className, error && styles["error"])}
          ref={ref}
        />
        {error && <Paragraph className={styles["error-text"]}>{error}</Paragraph>}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
