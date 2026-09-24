const totalIntegers = function(obj) {
  // Base case: check if the value itself is an integer
  if (Number.isInteger(obj)) {
    return 1;
  }

  // Recursive case: if it's an object or array (and not null)
  if (typeof obj === 'object' && obj !== null) {
    let count = 0;

    for (const key in obj) {
      count += totalIntegers(obj[key]);
    }

    return count;
  }

  // If it's any other primitive type (string, boolean, float, null, undefined)
  return 0;
};

console.log(totalIntegers({ a: 1, b: { a: [5, 10], b: 11 } }));

// Do not edit below this line
module.exports = totalIntegers;
