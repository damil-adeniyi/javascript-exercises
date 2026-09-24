const permutations = function(arr) {
 // Base case: an empty array has one permutation: an empty array [[]]
  if (arr.length === 0) {
    return [[]];
  }

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    // Remaining elements after picking current
    const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
    
    // Get all permutations of the remaining elements
    const remainingPermutations = permutations(remaining);

    // Attach the current element to the front of each sub-permutation
    for (const perm of remainingPermutations) {
      result.push([current, ...perm]);
    }
  }

  return result; 
};

console.log(permutations([1, 2, 3]));

  
// Do not edit below this line
module.exports = permutations;
