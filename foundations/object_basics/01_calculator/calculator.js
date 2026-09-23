const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let sumAll = arr.reduce((acc, intial) => {
    return acc + intial;
  }, 0)
};

const multiply = function(arr) {
  let sumAll = arr.reduce((acc, intial) => {
    return acc * intial;
  }, 1)
};

const power = function(num, power) {
	return num ** power;
};


const factorial = function(num) {
	if(num === 0){
    return 1
  }else{
    let arr = [];
    for(let i = 1; i <= num; i++){
        arr.push(i);
    } 
    
    let result = arr.reduce((acc, initial)=> {
      return acc * initial;
    }, 1);

    return result
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
