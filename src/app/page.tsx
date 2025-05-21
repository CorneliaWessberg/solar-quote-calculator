import React from "react";
import clsx from "clsx";

// styles
import styles from "./page.module.css";

// components
import Heading from "@/components/Heading/Heading";
import Calculator from "@/components/Calculator/Calculator";

export default function Home() {
  return (
    <main>
      <div className={clsx(styles["wrapper"])}>
        <Heading tag="h1" className={"heading"}>
          Hur mycket kan du tjäna på ditt tak?
        </Heading>
        <Calculator />
      </div>
    </main>
  );
}
