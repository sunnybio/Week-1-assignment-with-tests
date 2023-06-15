/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str.replace(/[^\w]/g, '').toLowerCase();
  let len = Math.floor(str.length / 2)

  let lenOfStr = str.length - 1

  for (let i = 0; i < len; i++) {
    if (str[i] != str[lenOfStr - i]) {
      return false
    }
  }

  return true;
}

console.log(isPalindrome("asdaAdsa?"))
module.exports = isPalindrome;
