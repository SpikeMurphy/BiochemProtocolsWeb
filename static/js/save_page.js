document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("save-pdf");
  if (!btn) return;

  btn.addEventListener("click", () => {
    window.print();
  });
});
