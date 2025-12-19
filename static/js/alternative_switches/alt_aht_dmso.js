document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("aht_dmso_alternative_switch"); // enter reagent 1

  const dmso = { // enter reagent 1
    m_material:   document.getElementById("alt_aht_m_m_dmso"),
    m_mw:         document.getElementById("alt_aht_m_mw_dmso"),
    m_specs:      document.getElementById("alt_aht_m_specs_dmso"),
    m_location:   document.getElementById("alt_aht_m_l_dmso"),
    r_material: document.getElementById("alt_aht_r_ms_dmso"),
    r_vol:      document.getElementById("alt_aht_r_vm_dmso"),
    r_mol:      document.getElementById("alt_aht_r_mol_dmso"),
  };

  const etoh = { // enter reagent 2
    m_material:   document.getElementById("alt_aht_m_m_etoh"),
    m_mw:         document.getElementById("alt_aht_m_mw_etoh"),
    m_specs:      document.getElementById("alt_aht_m_specs_etoh"),
    m_location:   document.getElementById("alt_aht_m_l_etoh"),
    r_material: document.getElementById("alt_aht_r_ms_etoh"),
    r_vol:      document.getElementById("alt_aht_r_vm_etoh"),
    r_mol:      document.getElementById("alt_aht_r_mol_etoh"),
  };

  let usingetoh = false; // enter reagent 2

  function toggle() {
    for (const key in dmso) { // enter reagent 1
      if (!dmso[key] || !etoh[key]) continue; // enter reagent 1
        dmso[key].style.display = usingetoh ? "none" : "";  // enter reagent 1
        etoh[key].style.display = usingetoh ? "" : "none";  // enter reagent 2
    }
  }

  if (btn) {
    btn.addEventListener("click", () => {
      usingetoh = !usingetoh;  // enter reagent 2
      toggle();

      btn.innerHTML = usingetoh  // enter reagent 2
        ? "Use DMSO" // enter reagent 1 display 
        : "Use EtOH";  // enter reagent 2 display (same as in button html shortcode)
    });
  }
});