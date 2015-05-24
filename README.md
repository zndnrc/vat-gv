# vat-generator
A simple javascript italian format VAT generator / verifier


Algorithm from http://it.wikipedia.org/wiki/Partita_IVA

# Usage:

var pg = new ITVatGenerator();

var vat = pg.generate();

var isValid = pg.verify(vat);
