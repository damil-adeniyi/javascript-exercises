const pascal = function(n) {
  // Base case: 1st row is always [1]
  if (n <= 1) {
    return [1];
  }

  // Get the previous row recursively
  const prevRow = pascal(n - 1);
  const currentRow = [];

  // Pad the previous row with a leading zero to represent the left hidden 0
  const padded = [0, ...prevRow];

  // Add each number with its rightmost neighbor
  for (let i = 0; i < padded.length; i++) {
    const left = padded[i];
    const right = padded[i + 1] ?? 0; // use 0 if there is no right neighbor (the right hidden 0)
    currentRow.push(left + right);
  }

  return currentRow;
};
  
console.log(pascal(3));

// Do not edit below this line
module.exports = pascal;
