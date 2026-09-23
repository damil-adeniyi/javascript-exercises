const palindromes = function (string) {
  // original
  const cleanedString = string.toLowerCase().replaceAll(" ", "").replaceAll(",", "").replaceAll(".", "");
  let split = cleanedString.split("")
  let newSplit = split.join("|")

  // reversed
  let reverse = split.slice().reverse();
  let newReverse = reverse.join("|")

  // condition
  if(newSplit === newReverse){
    return true;
  } else {
    return false
  }

};

// Do not edit below this line
module.exports = palindromes;
