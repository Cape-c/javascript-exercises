const reverseString = function(str) {
  let splited = str.split('');
  let spliced = splited.reverse();
  return spliced.join('');
  // Tambien funciona -->  return str.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
