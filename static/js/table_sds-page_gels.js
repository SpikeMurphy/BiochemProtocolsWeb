document.addEventListener("input", function (e) {
  if (!e.target.classList.contains("gel-input")) return;

  const value = e.target.value.trim().toLowerCase();
  if (value === "ladder") {
    e.target.classList.add("ladder-cell");
  } else {
    e.target.classList.remove("ladder-cell");
  }
});

// ---------- Excel ----------
function downloadExcel() {
  const wb = XLSX.utils.book_new();
  const wsData = [];

  document.querySelectorAll("#gelTable tbody tr").forEach(row => {
    const rowData = [];
    row.querySelectorAll("input").forEach(input => {
      rowData.push(input.value);
    });
    wsData.push(rowData);
  });

  const ws = XLSX.utils.aoa_to_sheet(wsData);
  XLSX.utils.book_append_sheet(wb, ws, "Gel Table");
  XLSX.writeFile(wb, "gel-table.xlsx");
}

// ---------- PDF ----------
function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  let y = 10;
  doc.text("Gel Table", 10, y);
  y += 10;

  document.querySelectorAll("#gelTable tbody tr").forEach(row => {
    let line = "";
    row.querySelectorAll("input").forEach(input => {
      line += (input.value || "-") + "   ";
    });
    doc.text(line, 10, y);
    y += 7;
  });

  doc.save("SDS-PAGE_Gels.pdf");
}
