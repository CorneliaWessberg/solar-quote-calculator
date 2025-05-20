import React from "react";
import clsx from "clsx";

// styles
import styles from "./Form.module.css";

type FormProps = {
  className?: string;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLFormElement>) => void;
};

export default function Form() {
  return (
    <form className={clsx(styles["form"])}>
      <div>Hej här är ett formulär</div>
    </form>
  );
}
