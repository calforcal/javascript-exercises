const convertToCelsius = function(farenheit) {

  let converted = ((farenheit - 32) * (5/9)).toFixed(1);

  if (converted === 0.0) {
    return Math.round(Number(converted));
  }
  else 

  return Number(converted);

};

const convertToFahrenheit = function(celcius) {

  let converted = ((celcius * (9/5)) + 32).toFixed(1);

  if (converted === 0.0) {
    return Math.round(Number(converted));
  }
  else 
  
  return Number(converted);

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
