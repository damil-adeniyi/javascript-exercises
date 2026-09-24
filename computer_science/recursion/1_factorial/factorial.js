const { log } = require('node:console');

const factorial = function (int) {
	if (typeof int == 'string' || int % 1 !== 0 || int < 0) {
		return ;
	} if (int === 0) {
			return 1;
		}
	return int * factorial(int - 1);
	
};

console.log(factorial(-4));

// Do not edit below this line
module.exports = factorial;
