/*
Modifies the generated SVG
by Dallience for cleaner output
*/
function modifySvg(svg) {
    // remove dalliance link
    svg = svg.replace(/<a.*<\/a>/gi, '');
    // parse SVG string to XML DOM element
    var xml = $($.parseXML(svg));
    // find all group elements to shift
    var gs = xml.find('g[clip-path="url(#featureClip)"] g');
    [].forEach.call(gs, function(g) {
        var $g = $(g);
        var attr = $g.attr('transform');
        if (typeof attr !== typeof undefined && attr !== false) {
            $g.attr('transform', attr.replace('200', '250'));
        }
    });
    return new XMLSerializer().serializeToString(xml.get(0));
}

/*
Cross browser click event
*/
var clickEvent = new MouseEvent('click', {
    'view': window,
    'bubbles': true,
    'cancelable': false
});

/*
Removes previous list elements
from Explore list and adds given list
*/
function insertList(li) {
    $('#list li').remove();
    li.forEach(function(el) {
        $('#list').append('<li><a href="#">' + el + '</a></li>')
    });
}

// List of genes that significant have skipped exon events
var seList = ['A730049H05Rik', 'Ablim1', 'Add1', 'Adgrl2', 'Agfg1', 'Agrn', 'Alkbh3', 'Ank3', 'Aplp2', 'Arhgap12', 'Arhgef10', 'Asun', 'Atp13a3', 'Atp5c1', 'Azi2', 'Azin1', 'Bclaf1', 'Bin1', 'Bnip2', 'Bsg', 'Btf3l4', 'Capn3', 'Caprin1', 'Capzb', 'Cdk4', 'Celf1', 'Chfr', 'Clk1', 'Clk2', 'Clk4', 'Clstn1', 'Clta', 'Cnot4', 'Cpne1', 'Creb1', 'Crim1', 'Cryba1', 'Cryba4', 'Csde1', 'Ctnna2', 'Ctnnd1', 'Cttn', 'Dcaf8', 'Dhcr7', 'Dkk3', 'Dlgap4', 'Dnajb2', 'Dst', 'Dync1i2', 'Eif4a2', 'Eif4g1', 'Eif4g2', 'Eif4h', 'Eif5', 'Epb4.1', 'Epb4.1l1', 'Erh', 'Evl', 'Exoc7', 'Fam168b', 'Fam98b', 'Farsb', 'Fbf1', 'Fermt2', 'Fhl1', 'Fmnl2', 'Fubp1', 'Glrx2', 'Gm14410', 'Gm20757', 'Gnas', 'Golga2', 'Gpm6b', 'Gprasp1', 'Gpx8', 'Grifin', 'Gtf2i', 'H13', 'Herc4', 'Hmga1', 'Hmgn3', 'Hnrnpa1', 'Hnrnpa2b1', 'Hnrnpc', 'Hnrnpd', 'Hnrnph1', 'Hnrnph3', 'Hnrnpk', 'Hsph1', 'Impdh2', 'Itga6', 'Ivns1abp', 'Jmjd6', 'Kars', 'Kif1a', 'Kif3a', 'Klc1', 'Ktn1', 'Lamp2', 'Lim2', 'Lpin1', 'Lrrfip2', 'Luc7l', 'Macf1', 'Magi1', 'Man2c1', 'Map2', 'Map3k7', 'Map4k4', 'Mapk1ip1', 'Mark3', 'Matr3', 'Mbtd1', 'Meg3', 'Meis1', 'Mfge8', 'Mllt4', 'Morf4l2', 'Mpdu1', 'Mprip', 'Myo18b', 'Myo1b', 'Naca', 'Nap1l4', 'Nasp', 'Ncam1', 'Ndel1', 'Ndufv3', 'Nhsl1', 'Nrcam', 'Numa1', 'PISD', 'Pank2', 'Pax6', 'Pcm1', 'Pgap2', 'Phldb1', 'Ppfibp1', 'Pphln1', 'Ppid', 'Ppp1r12a', 'Ppp1r9a', 'Ppp3ca', 'Ppp6r3', 'Prepl', 'Prmt1', 'Prpf38b', 'Prrc2b', 'Prrc2c', 'Psph', 'Ptpmt1', 'Ptpru', 'Pxdn', 'Rax', 'Rbm3', 'Rbm39', 'Rev3l', 'Rhot1', 'Rnps1', 'Rpgr', 'Sat1', 'Sh3glb1', 'Slain1', 'Slc25a19', 'Slc39a13', 'Slmap', 'Slu7', 'Smarca4', 'Smarcad1', 'Snap91', 'Snx22', 'Sorbs1', 'Sort1', 'Spag9', 'Spire1', 'Sptan1', 'Srrm1', 'Srsf11', 'Srsf2', 'Ss18', 'Stk11', 'Sulf1', 'Supt4a', 'Synrg', 'Tbp', 'Tcp1', 'Tdrkh', 'Tecr', 'Thrap3', 'Thyn1', 'Tk2', 'Tmbim6', 'Tmem14c', 'Tmem234', 'Tmem40', 'Tmem63b', 'Tmpo', 'Tpd52l2', 'Tpm3', 'Tra2a', 'Ttc14', 'U2af1', 'Ubn1', 'Uspl1', 'Wsb1', 'Ybx1', 'Ybx3', 'Zfp207', 'Zfp426'];
// List of genes that significant have retained intron events
var riList = ['1500012F01Rik', '1810022K09Rik', '3110002H16Rik', '5031439G07Rik', 'Acaa1a', 'Actr5', 'Acy1', 'Adipor1', 'Agrn', 'Aldoa', 'Anapc2', 'Anapc5', 'Ap1m1', 'Apeh', 'Atg4b', 'Atp1b2', 'Bcas2', 'Becn1', 'Birc7', 'Brd8', 'Btbd17', 'Calm2', 'Camk1', 'Capn3', 'Ccdc174', 'Cct3', 'Cdca3', 'Cdip1', 'Cdk16', 'Cdk4', 'Celf1', 'Ciz1', 'Clcn2', 'Clcn3', 'Clk1', 'Cstf2', 'Cul9', 'Dcaf6', 'Ddx39', 'Ddx5', 'Dhrs1', 'Dnpep', 'Edc4', 'Ehmt2', 'Eif4a1', 'Eif4a2', 'Eif5b', 'Emc8', 'Ensa', 'Fam214b', 'Fam53a', 'Fbxl20', 'Fgfr3', 'Fubp1', 'Fxyd5', 'Gadd45g', 'Gas5', 'Gdi1', 'Gnb2l1', 'Gramd1a', 'Gtpbp2', 'H3f3b', 'Hnrnph1', 'Id1', 'Idh3g', 'Ift122', 'Igf2bp2', 'Il11ra1', 'Jag1', 'Kctd2', 'Krit1', 'L3mbtl2', 'Las1l', 'Lrp5', 'Lrpap1', 'Lrwd1', 'Luc7l', 'Maged1', 'Man2c1', 'Map1lc3b', 'Mcm7', 'Mcoln1', 'Med24', 'Metap2', 'Mms19', 'Mocs2', 'Mrps10', 'Mthfsd', 'Mtmr2', 'Mus81', 'Nat10', 'Ncapg', 'Nob1', 'Nol11', 'Nono', 'Nosip', 'Npepl1', 'Nup35', 'Nxf1', 'P3h3', 'Pak1ip1', 'Pan3', 'Pcolce', 'Pdlim7', 'Phb2', 'Pisd', 'Pmpcb', 'Pole', 'Ppid', 'Ppil4', 'Ppp1cc', 'Ppp2r4', 'Prmt5', 'Psmc4', 'Psmd11', 'Psmd4', 'Ptov1', 'Qars', 'R3hdm1', 'Rbm25', 'Rbm3', 'Rcbtb2', 'Rnf123', 'Rpl23a', 'Rps27a', 'Rrp15', 'Rsrp1', 'Sec31a', 'Sept9', 'Sf3b1', 'Sh3glb2', 'Skiv2l', 'Smarcal1', 'Snhg6', 'Snrpb', 'Spag5', 'Spag9', 'Srrm1', 'Srsf5', 'Srsf6', 'Ssr4', 'Stab1', 'Stk25', 'Sugp2', 'Tardbp', 'Tars2', 'Tctex1d2', 'Tfe3', 'Tial1', 'Timeless', 'Tle3', 'Tmem161a', 'Tmem198b', 'Tmem258', 'Tpr', 'Trafd1', 'Trappc6a', 'Trp53', 'Txndc9', 'U2af1l4', 'Ubfd1', 'Uggt2', 'Utp11l', 'Wbp1', 'Wdr11', 'Wdr77', 'Wipi2', 'Zranb2'];

$(document).ready(function() {
    // insert gene list default SE list
    insertList(seList);
    // event listener for SE / RI change
    $('#type').on('change', function (e) {
        var optionSelected = $("option:selected", this);
        var valueSelected = this.value;
        if (valueSelected == 'SE') {
            insertList(seList);
            removeTiers(riTiers);
            addTiers(seTiers);
        } else {
            insertList(riList);
            removeTiers(seTiers);
            addTiers(riTiers);
        }
    });
    // event listener for gene click and search in the browser
    $(document).on('click', '#list a',function() {
        var q = $(this).text();
        browser.search(q, function(err) {
            if (err) {
                console.log(err);
            }
        });
        return false;
    });
    // event listener for export function
    $('.export').click(function() {
        console.log('Exporting current view...');
        var svg = browser.makeSVG({
            highlights: true,
            ruler: true
        });
        var reader = new FileReader();
        reader.addEventListener("loadend", function() {
            var modifiedSvg = modifySvg(reader.result);
            var blob = new Blob([modifiedSvg], {type: 'image/svg+xml'});
            var a = document.createElement('a');
            a.href = window.URL.createObjectURL(blob);
            a.download = 'eye-splicer-browser-view.svg';
            a.type = 'image/svg+xml';
            a.target = '_blank';
            a.dispatchEvent(clickEvent);
            a.remove();
        });
        reader.readAsText(svg);
        return false;
    });
});
