const removeFromArray = function(array, ...args) {
 const arrayN = [];

 array.forEach((item) => {
    if (!args.includes(item)) {
      arrayN.push(item);
    }
  });
  return arrayN; 
};

// Do not edit below this line
module.exports = removeFromArray;
