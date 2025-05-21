export const saveLead = (data: any) => {
  const existing = JSON.parse(localStorage.getItem("leads") || "[]");
  const updated = [...existing, data];
  localStorage.setItem("leads", JSON.stringify(updated));
};

export const getLeads = () => {
  return JSON.parse(localStorage.getItem("leads") || "[]");
};
