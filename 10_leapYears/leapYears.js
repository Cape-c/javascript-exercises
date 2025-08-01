const leapYears = function(year) {
//divisible por 4 y 400, pero no por 100.
  let leap = false;
  if (year % 4 === 0) {
    leap = true;
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        leap = true;
      } else {
        leap = false;
      }
    }
  }
  return leap;
};
// Me gustó la forma de plantearse en la solucion de TOP, se queda la carpeta!

// Do not edit below this line
module.exports = leapYears;
