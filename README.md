# Eye Splicer

A genome browser for exploring alternative splicing events across different developmental stages in lens tissues from mouse samples.

## Server

Eye Splicer is running on http://www.iupui.edu/~sysbio/eye-splicer/

## Features

* Six development stages (E15, E18, P0, P3, P6, and P9 where E: embryological, P: post-natal and the number shows how many days after embriyo formation / birth)
* Skipped exon (SE) and retained intron (RI) events
* Lists of FDR < 0.01 genes that have exons with these events found by rMATS (replicate Multivariate Analysis of Transcript Splicing; http://rnaseq-mats.sourceforge.net/)
* Export option as SVG of viewed area
* Biodalliance (JavaScript) genome visualization library (http://www.biodalliance.org/)
