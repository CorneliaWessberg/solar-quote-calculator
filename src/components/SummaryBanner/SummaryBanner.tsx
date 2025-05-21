import React from "react";

// styles
import styles from "./SummaryBanner.module.css";

// components
import Paragraph from "@/components/Paragraph/Paragraph";
import Heading from "@/components/Heading/Heading";

type SummaryProps = {
  roofSize?: string;
  cost?: number;
  newCost?: number;
  saving?: number;
  co2Reduce?: number;
};

export default function SummaryBanner({
  roofSize,
  cost,
  newCost,
  saving,
  co2Reduce,
}: SummaryProps) {
  return (
    <div className={styles["summary-banner"]}>
      <div className={styles["current-cost"]}>
        <Heading size="s">Nuvarande</Heading>
        <Paragraph variant="s">Takstorlek: {roofSize}</Paragraph>
        <Paragraph variant="s">Total månadskostnad: {cost} kr</Paragraph>
      </div>
      <div className={styles["savings"]}>
        <Heading size="s"> Efter installation av solceller</Heading>
        <Paragraph variant="s">Estimerat pris: {newCost} kr</Paragraph>
        <Paragraph variant="s">Du sparar: {saving} kr</Paragraph>
        <Paragraph variant="s">Potentiell CO2 reduktion: {co2Reduce} kg/mån</Paragraph>
      </div>
    </div>
  );
}
