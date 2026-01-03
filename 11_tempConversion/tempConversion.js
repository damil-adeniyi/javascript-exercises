const convertToCelsius = function(value) {
  let conversion = (value - 32) * 5/9;
  let round = Math.round(conversion * 10) /10;

  return round;
  
};

console.log(convertToCelsius(32));


const convertToFahrenheit = function(value) {
  let conversion = (value * 9/5 + 32) ;
  let round = Math.round(conversion * 10) /10;

  return round;
};

console.log(convertToFahrenheit(0));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
