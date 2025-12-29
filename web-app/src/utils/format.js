// src/utils/format.js
export function formatDate(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleString("fr-FR", { dateStyle: "medium", timeStyle: "short" });
}

export function formatNumber(num, decimals = 2) {
  return parseFloat(num.toFixed(decimals));
}
