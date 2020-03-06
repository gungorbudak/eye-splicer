var BASE_URL = 'https://sysbio.sitehost.iu.edu/eye-splicer/';

/*
Popup method for gene and transcript features
*/
function geneFeatures(feature, info) {
    var isGene = false;
    for (var hi = 0; hi < info.hit.length; ++hi) {
        if (info.hit[hi].isSuperGroup){
            isGene = true;
        }
    }

    if (!isGene) {
        info.setTitle('Transcript: ' + feature.label);
        info.add('Transcript ID', feature.label);
        info.add('Transcript biotype', feature.method);
    } else {
        info.setTitle('Gene: ' + feature.geneId);
    }

    info.add('Gene ID', feature.geneId);
    info.add('Gene name', feature.geneName);
    info.add('Gene biotype', feature.geneBioType);

    if (!isGene) {
        info.add('Transcript attributes', feature.tags);
    }
}

/*
Popup method for exon features
*/
function exonFeatures(feature, info) {
    info.setTitle('Exon: ' + feature.label);
}

/*
Adds given tiers to browser one by one
*/
function addTiers(tiers) {
    tiers.forEach(function(tier) {
        browser.addTier(tier);
    });
}

/*
Removes given tiers to browser one by one
*/
function removeTiers(tiers) {
    tiers.forEach(function(tier) {
        browser.removeTier(tier);
    });
}

// tiers for skipped exons shown initially
var seTiers = [
    {
        name: 'E15-SE-PSI',
        desc: 'Mouse developmental stage E15 skipped exon inclusion levels (PSI)',
        bwgURI: BASE_URL + 'resources/E15_SE_psi.bb',
        style: [{type: 'default', style: {glyph: 'HISTOGRAM', BGCOLOR: 'rgb(8,104,172)', HEIGHT: 30, id: 'style'}}],
        featureInfoPlugin: exonFeatures,
        noDownsample: true
    },
    {
        name: 'E18-SE-PSI',
        desc: 'Mouse developmental stage E18 skipped exon inclusion levels (PSI)',
        bwgURI: BASE_URL + 'resources/E18_SE_psi.bb',
        style: [{type: 'default', style: {glyph: 'HISTOGRAM', BGCOLOR: 'rgb(8,104,172)', HEIGHT: 30, id: 'style'}}],
        featureInfoPlugin: exonFeatures,
        noDownsample: true
    },
    {
        name: 'P0-SE-PSI',
        desc: 'Mouse developmental stage P0 skipped exon inclusion levels (PSI)',
        bwgURI: BASE_URL + 'resources/P0_SE_psi.bb',
        style: [{type: 'default', style: {glyph: 'HISTOGRAM', BGCOLOR: 'rgb(8,104,172)', HEIGHT: 30, id: 'style'}}],
        featureInfoPlugin: exonFeatures,
        noDownsample: true
    },
    {
        name: 'P3-SE-PSI',
        desc: 'Mouse developmental stage P3 skipped exon inclusion levels (PSI)',
        bwgURI: BASE_URL + 'resources/P3_SE_psi.bb',
        style: [{type: 'default', style: {glyph: 'HISTOGRAM', BGCOLOR: 'rgb(8,104,172)', HEIGHT: 30, id: 'style'}}],
        featureInfoPlugin: exonFeatures,
        noDownsample: true
    },
    {
        name: 'P6-SE-PSI',
        desc: 'Mouse developmental stage P6 skipped exon inclusion levels (PSI)',
        bwgURI: BASE_URL + 'resources/P6_SE_psi.bb',
        style: [{type: 'default', style: {glyph: 'HISTOGRAM', BGCOLOR: 'rgb(8,104,172)', HEIGHT: 30, id: 'style'}}],
        featureInfoPlugin: exonFeatures,
        noDownsample: true
    },
    {
        name: 'P9-SE-PSI',
        desc: 'Mouse developmental stage P9 skipped exon inclusion levels (PSI)',
        bwgURI: BASE_URL + 'resources/P9_SE_psi.bb',
        style: [{type: 'default', style: {glyph: 'HISTOGRAM', BGCOLOR: 'rgb(8,104,172)', HEIGHT: 30, id: 'style'}}],
        featureInfoPlugin: exonFeatures,
        noDownsample: true
}];

// tiers for retained introns disabled initially
var riTiers = [
    {
        name: 'E15-RI-PSI',
        desc: 'Mouse developmental stage E15 retained intron inclusion levels (PSI)',
        bwgURI: BASE_URL + 'resources/E15_RI_psi.bb',
        style: [{type: 'default', style: {glyph: 'HISTOGRAM', BGCOLOR: 'rgb(8,104,172)', HEIGHT: 30, id: 'style'}}],
        featureInfoPlugin: exonFeatures,
        disabled: true,
        noDownsample: true
    },
    {
        name: 'E18-RI-PSI',
        desc: 'Mouse developmental stage E18 retained intron inclusion levels (PSI)',
        bwgURI: BASE_URL + 'resources/E18_RI_psi.bb',
        style: [{type: 'default', style: {glyph: 'HISTOGRAM', BGCOLOR: 'rgb(8,104,172)', HEIGHT: 30, id: 'style'}}],
        featureInfoPlugin: exonFeatures,
        disabled: true,
        noDownsample: true
    },
    {
        name: 'P0-RI-PSI',
        desc: 'Mouse developmental stage P0 retained intron inclusion levels (PSI)',
        bwgURI: BASE_URL + 'resources/P0_RI_psi.bb',
        style: [{type: 'default', style: {glyph: 'HISTOGRAM', BGCOLOR: 'rgb(8,104,172)', HEIGHT: 30, id: 'style'}}],
        featureInfoPlugin: exonFeatures,
        disabled: true,
        noDownsample: true
    },
    {
        name: 'P3-RI-PSI',
        desc: 'Mouse developmental stage P3 retained intron inclusion levels (PSI)',
        bwgURI: BASE_URL + 'resources/P3_RI_psi.bb',
        style: [{type: 'default', style: {glyph: 'HISTOGRAM', BGCOLOR: 'rgb(8,104,172)', HEIGHT: 30, id: 'style'}}],
        featureInfoPlugin: exonFeatures,
        disabled: true,
        noDownsample: true
    },
    {
        name: 'P6-RI-PSI',
        desc: 'Mouse developmental stage P6 retained intron inclusion levels (PSI)',
        bwgURI: BASE_URL + 'resources/P6_RI_psi.bb',
        style: [{type: 'default', style: {glyph: 'HISTOGRAM', BGCOLOR: 'rgb(8,104,172)', HEIGHT: 30, id: 'style'}}],
        featureInfoPlugin: exonFeatures,
        disabled: true,
        noDownsample: true
    },
    {
        name: 'P9-RI-PSI',
        desc: 'Mouse developmental stage P9 retained intron inclusion levels (PSI)',
        bwgURI: BASE_URL + 'resources/P9_RI_psi.bb',
        style: [{type: 'default', style: {glyph: 'HISTOGRAM', BGCOLOR: 'rgb(8,104,172)', HEIGHT: 30, id: 'style'}}],
        featureInfoPlugin: exonFeatures,
        disabled: true,
        noDownsample: true
}];

// default sources as reference genome and genome structure
var sources = [{
    name: 'Genome',
    twoBitURI: BASE_URL + 'resources/mm10.2bit',
    desc: 'Mouse reference genome build GRCm38',
    tier_type: 'sequence',
    provides_entrypoints: true,
    pinned: true,
}, {
    name: 'Genes',
    desc: 'Mouse gene structures GENCODE version M7 (GRCm38.p4)',
    bwgURI: BASE_URL + 'resources/gencode.vM7.annotation.bb',
    stylesheet_uri: BASE_URL + 'resources/gencode.xml',
    collapseSuperGroups: true,
    trixURI: BASE_URL + 'resources/gencode.vM7.annotation.ix',
    noSourceFeatureInfo: true,
    featureInfoPlugin: geneFeatures,
    provides_search: true
}];

// append tiers to the sources
sources = sources.concat(seTiers);
sources = sources.concat(riTiers);

// initialize browser instance
var browser = new Browser({
    // default view at the beginning
    chr: '2',
    viewStart: 105669845,
    viewEnd: 105703354,
    cookieKey: 'mouse',

    coordSystem: {
        speciesName: 'Mouse',
        taxon: 10090,
        auth: 'GRCm',
        version: 38,
        ucscName: 'mm10'
    },

    // Reference genome and reference transcripts (exons/introns)
    sources: sources,

    // additional options for customizing the browser
    pageName: 'browser',
    uiPrefix: '//www.biodalliance.org/release-0.13/',
    maxHeight: 400,
    fullScreen: true,
    setDocumentTitle: false,
    disablePoweredBy: true,
    noTitle: true,
    noTrackAdder: true,
    noTrackEditor: true,
    noExport: true,
    noOptions: true,
    noPersist: true,
    noPersistView: true
});
