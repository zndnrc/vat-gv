

var generaPiva = function(input) {
	// no input
	if(input == null) {
		input = Math.random().toString(10).slice(-10);
	}

	// input string da 10 cifre
	if(validateInput(input) && input.length == 10) {
		var t = calculateT(input);
		var c = (10-t)%10;
		return input + c;
	}
	
	return null;
}

var verificaPiva = function(input) {
	// input == stringa da 11 cifre
	if(validateInput(input) && input.length == 11) {
		var t = calculateT(input);
		return t == 0;
	}
	
	return false;
}

var intArrayFromString = function(input) {
	// da stringa a array di int
	var chars = input.split('');
	var nums = [];
	for(var i=0; i<chars.length; i++) {
		nums.push(parseInt(chars[i]));
	} 
	
	return nums;
}

var calculateXandY = function(nums) {
	// calcolo X e Y
	var x = 0;
	var y = 0;
	for(var i=0; i<nums.length; i++) {
		if(i%2 == 0) {
			// ODD
			x += nums[i];
		} else {
			// EVEN
			var temp = 2 * nums[i];
			if(temp > 9) {
				y += temp-9;
			} else {
				y += temp;
			}
		}
	}
	
	return [x,y];
}

var calculateT = function(input) {

	var nums = intArrayFromString(input);
	var xy = calculateXandY(nums);

	var x = xy[0];
	var y = xy[1];
	
	var t = (x+y)%10;

	return t;
}

var validateInput = function(input) {
	return !isNaN(input);
}