export type CalculatorData = {
    cost?: number;
    roofSize?: string;
    newCost?: number;
    saving?: number;
    co2Reduce?: number;
  };
  
  export type Step1Props = {
    cost?: number;
    roofSize?: string;
    setCost: (val: number) => void;
    setRoofSize: (val: string) => void;
    onNext: () => void;
  };
  
  export type Step2Props = {
    calculatorData?: CalculatorData;
    onBack: () => void;
    onNext: () => void;
  };
  
  export type Step3Props = {
    calculatorData: CalculatorData;
  };