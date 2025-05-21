"use client";
import React, { useState } from "react";
import { useCalculator } from "./useCalculator";

import CalculatorStep1 from "./CalculatorStep1";
import CalculatorStep2 from "./CalculatorStep2";
import CalculatorFormStep from "./CalculatorFormStep";

export default function Calculator() {
  const [step, setStep] = useState(1);
  const {
    cost,
    setCost,
    roofSize,
    setRoofSize,
    calculatorData,
  } = useCalculator();

  return (
    <>
      {step === 1 && (
        <CalculatorStep1
          cost={cost}
          setCost={setCost}
          roofSize={roofSize}
          setRoofSize={setRoofSize}
          onNext={() => setStep(2)}
        />
      )}
      {step === 2 && (
        <CalculatorStep2
          calculatorData={calculatorData}
          onBack={() => setStep(1)}
          onNext={() => setStep(3)}
        />
      )}
      {step === 3 && calculatorData && (
        <CalculatorFormStep calculatorData={calculatorData} />
      )}
    </>
  );
}