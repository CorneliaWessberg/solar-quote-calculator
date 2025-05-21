import React from "react";
import { Step1Props } from "./types";

import DropDown from "@/components/DropDown/DropDown";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import styles from "./Calculator.module.css";

export default function CalculatorStep1({
  cost,
  setCost,
  roofSize,
  setRoofSize,
  onNext,
}: Step1Props) {
  const dropDownItems = [
    { id: "1", label: "Small" },
    { id: "2", label: "Medium" },
    { id: "3", label: "Large" },
  ];
  return (
    <div className={styles["calculator"]}>
      <div className={styles["inputs"]}>
        <Input
          variant="number"
          placeholder="Totalbelopp i SEK"
          label="Fyll i din totala elkostnad per månad här i SEK"
          value={cost?.toString() ?? ""}
          onChange={(e) => setCost(Number(e.target.value))}
        />
        <DropDown
          items={dropDownItems}
          label="Storlek på ditt tak"
          value={roofSize}
          onChange={setRoofSize}
        />
      </div>
      <div className={styles["submit"]}>
        <Button onClick={onNext}>Börja spara</Button>
      </div>
    </div>
  );
}
