export function getDate() {
  const newDate = new Date().toLocaleDateString("en-uk", {
    weekday: "long",
    month: "long",
    day: "2-digit",
  });

  return newDate;
}
