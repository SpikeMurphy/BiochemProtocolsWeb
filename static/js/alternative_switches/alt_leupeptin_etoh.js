// steps:
// 1.: searchfunktion XXXXX replace with reagent 1
// 2.: searchfunktion YYYYY replace with reagent 2
// 3.: searchfunktion ZZZZZ replace with pagename (one continuous word, no underscores no spaces)
// 4.: name .js "alt_pagename_reagent1"
// 5.: update html in content
// 6.: updare script call in content

document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("leupeptin_etoh_alternative_switch"); // enter reagent 1

  const etoh = { // enter reagent 1
    m_material:   document.getElementById("alt_leupeptin_m_m_etoh"),
    m_mw:         document.getElementById("alt_leupeptin_m_mw_etoh"),
    m_specs:      document.getElementById("alt_leupeptin_m_specs_etoh"),
    m_location:   document.getElementById("alt_leupeptin_m_l_etoh"),
    r_material: document.getElementById("alt_leupeptin_r_ms_etoh"),
    r_vol:      document.getElementById("alt_leupeptin_r_vm_etoh"),
    r_mol:      document.getElementById("alt_leupeptin_r_mol_etoh"),
  };

  const h2o = { // enter reagent 2
    m_material:   document.getElementById("alt_leupeptin_m_m_h2o"),
    m_mw:         document.getElementById("alt_leupeptin_m_mw_h2o"),
    m_specs:      document.getElementById("alt_leupeptin_m_specs_h2o"),
    m_location:   document.getElementById("alt_leupeptin_m_l_h2o"),
    r_material: document.getElementById("alt_leupeptin_r_ms_h2o"),
    r_vol:      document.getElementById("alt_leupeptin_r_vm_h2o"),
    r_mol:      document.getElementById("alt_leupeptin_r_mol_h2o"),
  };

  let usingh2o = false; // enter reagent 2

  function toggle() {
    for (const key in etoh) { // enter reagent 1
      if (!etoh[key] || !h2o[key]) continue; // enter reagent 1
        etoh[key].style.display = usingh2o ? "none" : "";  // enter reagent 1
        h2o[key].style.display = usingh2o ? "" : "none";  // enter reagent 2
    }
  }

  if (btn) {
    btn.addEventListener("click", () => {
      usingh2o = !usingh2o;  // enter reagent 2
      toggle();

      btn.innerHTML = usingh2o  // enter reagent 2
        ? "Use EtOH" // enter reagent 1 display
        : "Use dsH<sub>2</sub>O";  // enter reagent 2 display
    });
  }
});