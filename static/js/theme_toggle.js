// JS_STREAMLINE
// JS_COMMENTS

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");

  if (!toggle) return;

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("darkmode");
    toggle.checked = true;
  }

  toggle.addEventListener("change", () => {
    const isDark = toggle.checked;
    document.body.classList.toggle("darkmode", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});
