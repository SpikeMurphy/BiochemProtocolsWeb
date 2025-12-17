document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".calc-recipe-controls").forEach(container => {

    const factorSelect = container.querySelector(".calc-factor");
    const volumeSelect = container.querySelector(".calc-volume");

    if (!factorSelect || !volumeSelect) return;

    function recalc() {
      const factor = parseFloat(factorSelect.value);
      const volumeFactor = parseFloat(volumeSelect.value);

      document.querySelectorAll(".calc_recipe").forEach(el => {

        // Skip hidden elements (important for tabs + alternatives)
        if (el.offsetParent === null) return;

        if (el.dataset.defaultMass) {
          const base = parseFloat(el.dataset.defaultMass);
          el.textContent = `${round(base * factor * volumeFactor)} g`;
        }

        if (el.dataset.defaultMol) {
          const base = parseFloat(el.dataset.defaultMol);
          el.textContent = `${round(base * factor)} mM`;
        }

        if (el.dataset.defaultVol) {
          const base = parseFloat(el.dataset.defaultVol);
          el.textContent = `${round(base * volumeFactor)} mL`;
        }

      });
    }

    factorSelect.addEventListener("change", recalc);
    volumeSelect.addEventListener("change", recalc);

    recalc();
  });

  function round(v) {
    return Number(parseFloat(v).toFixed(2));
  }

});
