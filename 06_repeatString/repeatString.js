const repeatString = function(word, times) {
  if (times >= 0) {
    let result= "";
    for (let i = 0; i < times; i++) {
      result += word; 
    }
    return result;
  } else {
    return "ERROR"
  }
};

// Do not edit below this line
module.exports = repeatString;
