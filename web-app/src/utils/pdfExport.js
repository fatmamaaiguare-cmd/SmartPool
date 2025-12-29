// src/utils/pdfExport.js
import jsPDF from "jspdf";

export function exportAlertsPDF(alerts) {
  const doc = new jsPDF();
  doc.setFontSize(16);
  doc.text("SmartPool - Alertes", 20, 20);

  alerts.forEach((alert, index) => {
    doc.setFontSize(12);
    doc.text(`${index + 1}. ${alert.timestamp} - ${alert.message}`, 20, 30 + index * 10);
  });

  doc.save("alertes-smartpool.pdf");
}
