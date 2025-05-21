"use client";
import React, { useState } from "react";
import clsx from "clsx";

// styles
import styles from "./DropDown.module.css";

type DropDownItem = {
  id: string;
  label: string;
};

type DropDown = {
  items: Array<DropDownItem>;
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
};

export default function DropDown({
  items,
  label,
  onChange,
  value,
}: DropDown) {
  const [open, setOpen] = useState(false);

  return (
    <div className={clsx(styles["dropdown"])}>
      <label>{label}</label>
      <div className={clsx(styles["trigger"])} onClick={() => setOpen(!open)}>
        {value ?? "Välj storlek"}
        <span className={clsx(styles["icon"], open && styles["rotate"])}>
          <img src="/chevron-down.svg" />
        </span>
      </div>
      <div className={clsx(styles["content"], open && styles["open"])}>
        {items?.map((item, index) => (
          <div
            key={index}
            className={clsx(
              styles["item"],
              item.label === value && styles["active"]
            )}
            onClick={() => {
              setOpen(false);
              onChange?.(item.label);
            }}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
