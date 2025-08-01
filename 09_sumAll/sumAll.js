const sumAll = function(a, b) {
  let result = 0;
  let largerNum = 0;
  let shorterNum = 0;
  let allNums = false;


  function isInteger(a, b) {
    let numA = Number.isInteger(a);
    let numB = Number.isInteger(b);
    if (numA == true && numB == true) {
      return allNums = true;
    };
  }

  isInteger(a, b);
  
  if (a > b) {
    largerNum = a;
    shorterNum = b;
  } else {
    largerNum = b;
    shorterNum = a;
  };

  if (allNums == true && largerNum > 0 && shorterNum > 0) {
    for (let step = shorterNum; step < largerNum; step++) {
     result += step;
     }
    return result + largerNum;
    } else {
      return "ERROR";
    };
};
/*
Algo caotico y largo comparado a la solción :c
Al menos si se me ocurrió:
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
...pero pensé que no era de buena practica crear una tercera variable para reorganizar.
Esta vez si se queda la carpeta /solutions para tener en cuenta la otra solucion.
*/


// Do not edit below this line
module.exports = sumAll;
