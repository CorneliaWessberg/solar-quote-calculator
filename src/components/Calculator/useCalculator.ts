'use client'
import { useState } from "react";

export function useCalculator() {
  const [cost, setCost] = useState<number | undefined>();
  const [roofSize, setRoofSize] = useState<string>();

  const roofMap = {
    small: 3,
    medium: 6,
    large: 9,
  };

  const newCost = cost && roofSize ? Math.round(cost * 0.6) : undefined;
  const saving = cost && newCost ? Math.round(cost - newCost) : undefined;
  const co2Reduce = roofSize
    ? roofMap[roofSize.toLowerCase() as keyof typeof roofMap] * 100
    : undefined;

  const calculatorData =
    cost && roofSize
      ? {
          cost,
          roofSize,
          newCost,
          saving,
          co2Reduce,
        }
      : undefined;

  return {
    cost,
    setCost,
    roofSize,
    setRoofSize,
    calculatorData,
  };
}
