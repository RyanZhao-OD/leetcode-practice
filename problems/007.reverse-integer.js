/**
 * https://leetcode.com/problems/reverse-integer/
 * Given a 32-bit signed integer, reverse digits of an integer.
 * @param {number} x
 * @return {number}
 */
var reverse = (x) => {
    if (x < 0) {
        return -reversePositive(-x);
    }
    return reversePositive(x);
}

var reversePositive = (x, MAX = Math.pow(2, 31), MIN = -Math.pow(2, 31)) => {
    let res = 0;
    while (x !== 0) {
        res = 10 * res + x % 10;
        x = Math.floor(x / 10);
    }
    return res > MAX || res < MIN ? 0 : res;
};




console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(0));
console.log(reverse(1534236469));