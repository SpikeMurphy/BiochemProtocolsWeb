+++
date = '2025-12-07T20:19:41+01:00'
draft = false
construction = false
title = 'Recepies Template'
subtitle = ''
author = 'Spike Murphy Müller ¹'
facility = '¹ Center for Experimental Medicine, Institute of Biochemistry and Signal Transduction, Working Group Signal Transduction in Cancer'
version = 'Version 1.0.1'
version_explaination = 'first: major revisions - second: minor revisions - third: revisions without changing procedure'
updated = '08.12.2025'
+++

<!-- -->
#### for xx mL

{{< infobox type="info" title="" >}}
⚠️ Info
{{< /infobox >}}

{{< infobox type="warning" title="" >}}
❗️ Attention
{{< /infobox >}}

{{< infobox type="danger" title="" >}}
‼️ Danger
{{< /infobox >}}

{{< tab >}}
## Materials
| Material | Molecular Weight | Specifications | Location |
| :-- | :-- | :-- | :-- |
| ChemicalName *ChemicalFormula* [<sup>SDB</sup>](https://www.carlroth.com/.../) | g/mol |  | {{< chemical_location chemical="chemicalname_spec" >}} |
|  | g/mol |  | {{< chemical_location chemical="chemicalname_spec" >}} |
|  | g/mol |  | {{< chemical_location chemical="chemicalname_spec" >}} |
| deionized sterilized Water *dsH<sub>2</sub>O* | 18.015 g/mol | liquid |  |
| <span id="alt_pagename_m_m_reagent1">XXXXXXXXXX</span>     <span id="alt_pagename_m_m_reagent2" style="display:none">XXXXXXXXXX</span> | <span id="alt_pagename_m_mw_reagent1">XXXXXXXXXX</span>     <span id="alt_pagename_m_mw_reagent2" style="display:none">XXXXXXXXXX</span> | <span id="alt_pagename_m_specs_reagent1">XXXXXXXXXX</span>     <span id="alt_pagename_m_specs_reagent2" style="display:none">XXXXXXXXXX</span> | <span id="alt_pagename_m_l_reagent1">{{< chemical_location chemical="chemicalname_spec" >}}</span>     <span id="alt_pagename_m_l_reagent2" style="display:none">{{< chemical_location chemical="chemicalname_spec" >}}</span> |

<!-- for switching alternatives

into the <span>

add an id="alt_pagename_m_c_reagent1" for the default
add an id="alt_pagename_m_c_reagent2" for the alternative 

m = methodes table
c = m for material, mw for molecular weight, specs for specifications, l for location

add the shortcode:
{ {< alternative_switches/alt_pagename_reagent1 >}}

-->

{{< /tab >}}

{{< tab >}}
## Recipe
<!-- { {< calculators/calc_recipe_x >}} -->

|  | Material/Step | Volume/Mass | molar/%/comment |
| :-- | :-- | :-- | :-- |
| <input type="checkbox"> | <span id="alt_pagename_r_ms_reagent1">XXXXXXXXXX</span>     <span id="alt_pagename_r_ms_reagent2" style="display:none">XXXXXXXXXX</span> | <span id="alt_pagename_r_vm_reagent1">XXXXXXXXXX</span>     <span id="alt_pagename_r_vm_reagent2" style="display:none">XXXXXXXXXX</span> | <span id="alt_pagename_r_mol_reagent1">XXXXXXXXXX</span>     <span id="alt_pagename_r_mol_reagent2" style="display:none">XXXXXXXXXX</span> |
| <input type="checkbox"> |  |  |  |
| <input type="checkbox"> |  |  |  |
| <input type="checkbox"> |  |  |  |
{{< /tab >}}

<!-- for switching alternatives 

into the <span>

add an id="alt_pagename_r_d_reagent1" for the default
add an id="alt_pagename_r_d_reagent2" for the alternative 

r = recipe table
d = ms for material/steps, vm for volume/mass and mol for molar/%/comment

-->
<!-- for factoring 1x/5x/10x buffers

into the <span>

add class="calc_recipe" 

for masses add add data-default-mass"e"
for volumes add add data-default-vol"e"
for molarities add add data-default-mol"e"

e = value

-->

{{< tab >}}
## Usecases
| Usecase | Specifications |
| :-- | :-- |
|  |  |
|  |  |
{{< /tab >}}

{{< tab >}}
## Storage
| Conditions | Duration |
| :-- | :-- |
|@ 25 °C |  |
|@ 4 °C |  |
|@ -20 °C |  |
|@ –80 °C |  |
{{< /tab >}}

{{< comment_box >}}
{{< save_page >}}

{{< save_journal_label >}}