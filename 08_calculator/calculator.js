const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  return arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  },0);
};

const multiply = function(arr) {
  return arr.reduce((accumulator, currentValue) => {
    return accumulator * currentValue
  }, 1);
};

const power = function(num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function(number) {
  if (number <= 1)
    return 1;
  else
    return number * factorial(number - 1);
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
