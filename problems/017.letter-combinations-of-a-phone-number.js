const MAP = {
  0: [],
  1: [],
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  return digits.split('').reduce((sum, cur) => {
    return cartesian(sum, MAP[cur]);
  }, []);
};

var cartesian = (arr1, arr2) => {
  if (!arr1.length || arr1.length < 2) {
    return arr2;
  }
  if (!arr2.length || arr2.length < 2) {
    return arr1;
  }
  const result = [];
  arr1.forEach((i) => {
    arr2.forEach(j => {
      result.push(`${i}${j}`);
    });
  });
  return result;
};

console.log(letterCombinations('23'));
console.log(letterCombinations(''));
console.log(letterCombinations('2'));