const contains = function (obj, targetValue) {
	// Base case: if the current value strictly matches the target value, return true
	if (obj === targetValue) {
		return true;
	}

	// If obj is an object (and not null), iterate through its properties recursively
	if (typeof obj === 'object' && obj !== null) {
		for (const key in obj) {
			if (contains(obj[key], targetValue)) {
				return true;
			}
		}
	}

	// Return false if the value is not found in this subtree
	return false;
};

console.log(contains({ foo: { bar: "bar" } }, "bar"));


// Do not edit below this line
module.exports = contains;
