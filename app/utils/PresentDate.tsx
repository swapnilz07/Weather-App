export const getPresentDate = () => {
  const presentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
  return presentDate;
};
