"use client";
import React, { useState } from "react";
import clsx from "clsx";

// styles
import styles from "./Calculator.module.css";

// components
import DropDown from "@/components/DropDown/DropDown";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import SummaryBanner from "@/components/SummaryBanner/SummaryBanner";

export default function Calculator({}) {
  const [step, setStep] = useState(1);
  const [cost, setCost] = useState<number | undefined>();
  const [roofSize, setRoofSize] = useState<string>();

  const roofMap = {
    small: 3,
    medium: 6,
    large: 9,
  };

  const dropDownItems = [
    { id: "1", label: "Small" },
    { id: "2", label: "Medium" },
    { id: "3", label: "Large" },
  ];

  return (
    <>
      {step === 1 && (
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
              onChange={(val) => setRoofSize(val)}
            />
          </div>
          <div className={styles["submit"]}>
            <Button onClick={() => setStep(2)}>Börja spara</Button>
          </div>
        </div>
      )}
      <div>
        {step === 2 && (
          <>
            <SummaryBanner
              roofSize={roofSize}
              cost={cost}
              newCost={cost && roofSize ? Math.round(cost * 0.6) : undefined}
              saving={
                cost && roofSize ? Math.round(cost - cost * 0.6) : undefined
              }
              co2Reduce={
                roofSize
                  ? roofMap[roofSize.toLowerCase() as keyof typeof roofMap] *
                    100
                  : undefined
              }
            />
            <Button variant="back" onClick={() => setStep(1)}>
              <img src="/left-arrow.svg" className={styles["arrow"]} />
              <span className={styles["back-btn"]}>Tillbaka</span>
            </Button>
          </>
        )}
      </div>
    </>
  );
}
