/**
 * Medium
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates = quickSort(candidates);
  function helper(index, n, combination, combinations) {
    if (n < 0) return;
    if (n === 0) combinations.push([...combination]);

    for (let i = index; i < candidates.length; i++) {
      if (i > index && candidates[i] === candidates[i - 1]) {
        continue;
      }
      combination.push(candidates[i]);
      helper(i + 1, n - candidates[i], combination, combinations);
      combination.pop();
    }
    return combinations;
  }

  return helper(0, target, [], []);
};

const quickSort = (arr) => {
  if (!arr.length || arr.length === 1) {
    return arr;
  }
  const [pivot, ...rest] = arr;
  return [
    ...quickSort(rest.filter(i => i <= pivot)),
    pivot,
    ...quickSort(rest.filter(i => i > pivot)),
  ]
};