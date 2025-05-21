import clsx from "clsx";

// styles
import styles from "./page.module.css";

// components
import Heading from "@/components/Heading/Heading";
import Form from "@/components/Form/Form";
import Paragraph from "@/components/Paragraph/Paragraph";
import Button from "@/components/Button/Button";
import DropDown from "@/components/DropDown/DropDown";
import Input from "@/components/Input/Input";
import Calculator from "@/components/Calculator/Calculator";

export default function Home() {
  return (
    <main>
      <div className={clsx(styles["wrapper"])}>
        <Heading tag="h1" className={"heading"}>Hur mycket kan du tjäna på ditt tak?</Heading>
          <Calculator />
        {/* <Form /> */}
      </div>
    </main>
  );
}
