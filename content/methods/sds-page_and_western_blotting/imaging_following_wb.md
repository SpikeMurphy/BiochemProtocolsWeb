+++
date = '2025-12-23T14:54:35+01:00'
draft = false
construction = false
title = 'Chemiluminescence Imaging Following Western Blotting'
subtitle = ''
author = 'Spike Murphy Müller ¹'
facility = '¹ Center for Experimental Medicine, Institute of Biochemistry and Signal Transduction, Working Group Signal Transduction in Cancer'
version = 'Version 1.0.0'
version_explanation = 'first: major revisions - second: minor revisions - third: revisions without changing procedure'
updated = '23.12.2025'
finished = false
tested = false
+++
<!-- DONE: tested = true, delete -->

{{< tab >}}

## Materials

<!-- markdownlint-disable MD033 -->
| Equipment & Devices⠀⠀⠀ | Amount | Specifications | Location |
| :-- | :-- | :-- | :-- |
| <span data-alt-group="imager" data-alt="primary">ImageQuant™</span><span data-alt-group="imager" data-alt="secondary" style="display:none">other imager</span> {{< alternative_switches/alt_methods group="imager" primary="Use ImageQuant™" secondary="Use other imager" >}} | | | |
<!-- markdownlint-enable MD033 -->

<!-- markdownlint-disable MD033 -->
| Commercial Kits⠀⠀⠀⠀⠀⠀ | Amount | Specifications | Location |
| :-- | :-- | :-- | :-- |
| <span data-alt-group="chemiluminescence" data-alt="primary">SuperSignal™ West Pico PLUS [<sup>manual</sup>](link)</span><span data-alt-group="chemiluminescence" data-alt="secondary" style="display:none">SuperSignal™ West Dura [<sup>manual</sup>](link)</span> {{< alternative_switches/alt_methods group="chemiluminescence" primary="Use West Pico PLUS" secondary="Use West Dura" >}} | <span data-alt-group="chemiluminescence" data-alt="primary">200 µL/membrane <br> 200 µL/membrane</span><span data-alt-group="chemiluminescence" data-alt="secondary" style="display:none">200 µL/membrane <br> 200 µL/membrane</span> | <span data-alt-group="chemiluminescence" data-alt="primary">stable peroxide <br> luminol/enhancer</span><span data-alt-group="chemiluminescence" data-alt="secondary" style="display:none">stable peroxide <br> luminol/enhancer</span> | |
<!-- markdownlint-enable MD033 -->

| Containers & Consumables | Amount | Specifications | Location |
| :-- | :-- | :-- | :-- |
| micropipettes and sterile pipette tips | | | |
| pipetting aid and serological pipettes | | | |
| transparent plastic wrap | 1/ membrane | | |
| sterile reaction tube 1.5 mL | 1/2 membranes | for preparing the developing solution | |

| Reagents & Solutions⠀⠀⠀⠀ | Amount | Specifications | Location |
| :-- | :-- | :-- | :-- |

| Biological Materials⠀⠀⠀⠀⠀ | Amount | Specifications | Location |
| :-- | :-- | :-- | :-- |

{{< /tab >}}

{{< tab >}}

## Procedure

### Heading 1

1. {{< checkbox >}} Prepare the developing solution consisting of stable peroxide and luminol/enhancer 200 µL each.
3. {{< checkbox >}} Add the membrane to a transparent plastic wrap and remove all liquid with absorbing paper or by closing and opening the plastic and removing the liquid on the plastic.
4. {{< checkbox >}} Pipette 400µl developing solution onto the membrane and close the plastic to ensure equal distribution.
6. {{< checkbox >}} Incubate the developing solution on the membrane for 5 minutes.

{{< timer time="0:05:00" >}}

7. {{< checkbox >}} Roll out the membrane with a roller.
8. {{< checkbox >}} Place the membrane in the imager.
9. {{< checkbox >}} Take pictures at the imager: {{< alternative_switches/alt_methods group="imager" primary="Use ImageQuant™" secondary="Use other imager" >}}

<!-- markdownlint-disable MD033 -->
<span data-alt-group="imager" data-alt="primary">
<ul>
    <li> {{< checkbox >}} Take epiillumination-picture:
    <ul>
        <li> {{< checkbox >}} Set Method to Digitization:epi-illumination.
        <li> {{< checkbox >}} Set exposure type to precision.
        <li> {{< checkbox >}} Set exposure time manually to 1/60s.
        <li> {{< checkbox >}} Set sensitivity to standard.
        <li> {{< checkbox >}} Take picture.
    </ul>
    <li> {{< checkbox >}} Take incremental pictures:
    <ul>
        <li>  {{< checkbox >}} Set Method to Chemiluminescence
        <li> {{< checkbox >}} Set exposure type to increment.
        <li> {{< checkbox >}} Set interval time as necessary, e.g. to 10s.
        <li> {{< checkbox >}} Set sensitivity to standard.
        <li> {{< checkbox >}} Take pictures until overexposed and save them.
    </ul>
</ul>
</span>
<span data-alt-group="imager" data-alt="secondary" style="display:none">
<ul>
    <li> {{< checkbox >}} Take epiillumination-picture:
    <ul>
        <li>
    </ul>
    <li> {{< checkbox >}} Take incremental pictures:
    <ul>
        <li>
    </ul>
</ul>
</span>
<!-- markdownlint-enable MD033 -->

10. {{< checkbox >}} Clean the tray with 70% EtOH.

{{< infobox type="info" title="Membrane Storage" >}}

1. {{< checkbox >}} Place the membrane in a transparent plastic wrap.
2. {{< checkbox >}} Add a small volume of PBST to keep the membrane moist.
3. {{< checkbox >}} Store @ 4 °C for up to a week.

For longer storage, dry the membrane completely and store at RT between sheets of filter paper.

{{< /infobox >}}

### Proceed with Suitable Protocol

- [Protocol Name]({{< relref "methods.md" >}}) <!---->

{{< /tab >}}

{{< comment_box >}}
{{< save_page >}}

{{< save_journal_label >}}
