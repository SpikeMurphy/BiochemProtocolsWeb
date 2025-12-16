// steps:
// 1.: searchfunktion XXXXX replace with reagent 1
// 2.: searchfunktion YYYYY replace with reagent 2
// 3.: searchfunktion ZZZZZ replace with pagename (one continuous word, no underscores no spaces)
// 4.: name .js "alt_pagename_reagent1"
// 5.: update AAAAA and BBBBB to the button displays
// 6.: update html table in content (use template recipe)
// 7.: update html shortcode (use alt_template.html) in content

document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("inouetransformationbufferstock10x_pipes_alternative_switch"); // enter reagent 1

  const pipes = { // enter reagent 1
    m_material:   document.getElementById("alt_inouetransformationbufferstock10x_m_m_pipes"),
    m_mw:         document.getElementById("alt_inouetransformationbufferstock10x_m_mw_pipes"),
    m_specs:      document.getElementById("alt_inouetransformationbufferstock10x_m_specs_pipes"),
    m_location:   document.getElementById("alt_inouetransformationbufferstock10x_m_l_pipes"),
    r_material: document.getElementById("alt_inouetransformationbufferstock10x_r_ms_pipes"),
    r_vol:      document.getElementById("alt_inouetransformationbufferstock10x_r_vm_pipes"),
    r_mol:      document.getElementById("alt_inouetransformationbufferstock10x_r_mol_pipes"),
  };

  const mopes = { // enter reagent 2
    m_material:   document.getElementById("alt_inouetransformationbufferstock10x_m_m_mopes"),
    m_mw:         document.getElementById("alt_inouetransformationbufferstock10x_m_mw_mopes"),
    m_specs:      document.getElementById("alt_inouetransformationbufferstock10x_m_specs_mopes"),
    m_location:   document.getElementById("alt_inouetransformationbufferstock10x_m_l_mopes"),
    r_material: document.getElementById("alt_inouetransformationbufferstock10x_r_ms_mopes"),
    r_vol:      document.getElementById("alt_inouetransformationbufferstock10x_r_vm_mopes"),
    r_mol:      document.getElementById("alt_inouetransformationbufferstock10x_r_mol_mopes"),
  };

  let usingmopes = false; // enter reagent 2

  function toggle() {
    for (const key in pipes) { // enter reagent 1
      if (!pipes[key] || !mopes[key]) continue; // enter reagent 1
        pipes[key].style.display = usingmopes ? "none" : "";  // enter reagent 1
        mopes[key].style.display = usingmopes ? "" : "none";  // enter reagent 2
    }
  }

  if (btn) {
    btn.addEventListener("click", () => {
      usingmopes = !usingmopes;  // enter reagent 2
      toggle();

      btn.innerHTML = usingmopes  // enter reagent 2
        ? "Use PIPES" // enter reagent 1 display 
        : "Use MOPES";  // enter reagent 2 display (same as in button html shortcode)
    });
  }
});