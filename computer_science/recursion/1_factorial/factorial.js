const { log } = require('node:console');

const factorial = function (int) {
	if (typeof int == 'string') {
		return;
	} else {
		if (int === 0) {
			return 1;
		}
		return int * factorial(int - 1);
	}
};

console.log(factorial(5));

// Do not edit below this line
module.exports = factorial;
