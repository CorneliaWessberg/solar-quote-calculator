import React from "react";
import { Step3Props } from "./types";

import Form from "@/components/Form/Form";

export default function CalculatorFormStep({ calculatorData }: Step3Props) {
  return <Form calculatorData={calculatorData} />;
}