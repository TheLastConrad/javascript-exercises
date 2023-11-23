const convertToCelsius = function(fDegrees) {
  return parseFloat(((fDegrees-32)*(5/9)).toFixed(1))
};

const convertToFahrenheit = function(celsiusDegrees) {
  return parseFloat(((celsiusDegrees * 1.8)+32).toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
