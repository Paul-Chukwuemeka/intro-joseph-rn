export function getDate() {
  const date = new Date()
    .toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
    })
    .replace(/\b(\d+)\b/, (d) => {
      const n = +d;
      const suffix =
        n > 3 && n < 21 ? "th" : ["th", "st", "nd", "rd"][n % 10] || "th";
      return n + suffix;
    });

  return date;
}
