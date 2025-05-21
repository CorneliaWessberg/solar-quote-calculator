import React from "react";
import { Step2Props } from "./types";

import SummaryBanner from "@/components/SummaryBanner/SummaryBanner";
import Button from "@/components/Button/Button";
import styles from "./Calculator.module.css";

export default function CalculatorStep2({
  calculatorData,
  onBack,
  onNext,
}: Step2Props) {
  return (
    <>
      <SummaryBanner {...calculatorData} />
      <div className={styles["buttons"]}>
        <Button variant="back" onClick={onBack}>
          <img src="/left-arrow.svg" className={styles["arrow"]} />
          <span className={styles["back-btn"]}>Tillbaka</span>
        </Button>
        <Button onClick={onNext}>
          <span>Säkra din tur i kön</span>
        </Button>
      </div>
    </>
  );
}
