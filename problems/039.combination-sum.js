/**
 * Medium
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  function helper(index, n, combination, combinations) {
    if (n < 0) return;
    if (n === 0) combinations.push([...combination]);

    for (let i = index; i < candidates.length; i++) {
      combination.push(candidates[i]);
      helper(i, n - candidates[i], combination, combinations);
      combination.pop();
    }
    return combinations;
  }

  return helper(0, target, [], []);
};

console.log(combinationSum([2, 3, 5], 8));
console.log(combinationSum([2], 1));
console.log(combinationSum([1], 1));
console.log(combinationSum([1], 2));