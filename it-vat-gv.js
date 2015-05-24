
/*
 * 
 * A simple javascript italian format VAT generator / verifier
 *
 * Algorithm from http://it.wikipedia.org/wiki/Partita_IVA
 * 
 * Usage:
 * var pg = new ITVatGenerator();
 * var vat = pg.generate();
 * var isValid = pg.verify(vat);
 *
 */

var ITVatGenerator = function() {

    var generateVat = function(input) { // input == 10 digits string
	    if(input == null) {
		    input = Math.random().toString(10).slice(-10);
	    }

	    if(!isNaN(input) && input.length == 10) {
		    var t = calculateT(input);
		    var c = (10-t)%10;
		    return input + c;
	    }
	
	    return null;
    }

    var verifyVat = function(input) { // input == 11 digits string
	    if(!isNaN(input) && input.length == 11) {
		    var t = calculateT(input);
		    return t == 0;
	    }
	
	    return false;
    }

    // obtain an int array from a numeric string
    var intArrayFromString = function(input) {
	    var chars = input.split('');
	    var nums = [];
	    for(var i=0; i<chars.length; i++) {
		    nums.push(parseInt(chars[i]));
	    } 
	
	    return nums;
    }

    // calculate X and Y
    var calculateXandY = function (nums) {
        var xy = [0, 0];
        for (var i = 0; i < nums.length; i++) {
            if (i % 2 == 0) {
                xy[0] += nums[i];
            } else {
                var temp = 2 * nums[i];
                if (temp > 9) {
                    xy[1] += temp - 9;
                } else {
                    xy[1] += temp;
                }
            }
        }

        return xy;
    }

    // calculate T
    var calculateT = function(input) {
	    var xy = calculateXandY(intArrayFromString(input));
	    return (xy[0]+xy[1])%10;
    }

    return {
        generate: generateVat,
        verify: verifyVat
    }
}
