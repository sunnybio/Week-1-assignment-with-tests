/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/

class Calculator {
  constructor() {
    this.result = 0

  }

  add(num) {
    this.result += num
  }
  subtract(num) {
    this.result = this.result - num
  }
  multiply(num) {
    this.result *= num
  }
  divide(num) {
    if (num == 0) {
      throw new Error("divide by zero");

    }

    this.result = this.result / num
  }
  clear() {
    this.result = 0
  }
  getResult() {
    return this.result
  }
  calculate(exp) {
    exp = exp.replace(/[ ]/g, "")
    if (exp.includes("/0")) {
      throw new Error("")
    }


    let res = eval(exp)

    this.result = res




  }
}


// const calc = new Calculator();
// // calc.divide(0)
// console.log(calc.calculate("2 + 3 / 0"))


// // calc.add(5)
// // calc.multiply(4)
// // calc.substract(5)
// // console.log(calc.getResult())



module.exports = Calculator;
