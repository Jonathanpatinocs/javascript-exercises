const add = function(num1, num2, ...args ) {
  let sum = num1 + num2;
  for (let arg of args) {
    sum += arg;
  }
  return sum;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	let sum = array.reduce(((total,current) => total + current), 0);
  return sum;
};

const multiply = function(array) {
  let sum = array.reduce(((total, current) => total * current), 1);
  return sum;
  
};

const power = function(num1, num2) {
  let sum = num1;
  for ( let i = 0; i < num2 - 1; i++) {
    sum *= num1;
  }
  return sum;
};

const factorial = function(num) {
  let sum = 1;
  while (num > 0) {
    sum *= num
    num--;
  }
  return sum;
	
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
