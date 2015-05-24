# vat-generator
A simple javascript italian format VAT generator / verifier


Algorithm from http://it.wikipedia.org/wiki/Partita_IVA

# Usage

Add the script to your page
```html
<script type="text/javascript" src="it-vat-generator.js"></script>
```

Create a new instance of ITVatGenerator, and use it like that
```javascript
var pg = new ITVatGenerator();

var vat = pg.generate();

var isValid = pg.verify(vat);
```
