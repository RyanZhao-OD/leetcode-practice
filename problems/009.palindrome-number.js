/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0 || (x % 10 == 0 && x != 0)) {
    return false;
  }
  return reversePositive(x) === x;
};

var reversePositive = (x, MAX = Math.pow(2, 31), MIN = -Math.pow(2, 31)) => {
  let res = 0;
  while (x !== 0) {
      res = 10 * res + x % 10;
      x = Math.floor(x / 10);
  }
  return res > MAX || res < MIN ? 0 : res;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-123));
console.log(isPalindrome(10));
console.log(isPalindrome(-101));