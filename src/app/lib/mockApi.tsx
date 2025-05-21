type CalculatorResult = {
  cost?: number;
  roofSize?: string;
  newCost?: number;
  saving?: number;
  co2Reduce?: number;
};

type LeadData = {
  name: string;
  email: string;
  phone: string;
  postalCode: string;
  calculatorResult?: CalculatorResult;
};

export const saveLead = (data: LeadData) => {
  const existing = JSON.parse(localStorage.getItem("leads") || "[]");
  const updated = [...existing, data];
  localStorage.setItem("leads", JSON.stringify(updated));
};

export const getLeads = () => {
  return JSON.parse(localStorage.getItem("leads") || "[]");
};
