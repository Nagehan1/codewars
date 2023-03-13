// In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

// Note: the input will not be empty.

// Examples
// "1plus2plus3plus4"  --> "10"
// "1plus2plus3minus4" -->  "2"




function calculate(str) {
  var addReg = /plus/gi;
  var subReg = /minus/gi;

  var str = str.replace(addReg, "+");
  var str = str.replace(subReg, "-");
  str = eval(str);
  str = String(str);
  return str;

  }