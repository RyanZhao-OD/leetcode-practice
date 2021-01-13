/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums) => {
  const result = [];
  const permuteRecur = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permuteRecur(curr.slice(), m.concat(next));
      }
    }
  }
  permuteRecur(nums);
  return result;
}

console.log(permute([1, 2, 3]));

// [1, 2, 3] []

// [2, 3] [1] -> [[3] [1, 2]] -> [[3, 1, 2]]
//               [[2] [1, 3]] -> [[1, 3, 2]]
// [1, 3] [2] -> [[3] [2, 1]] -> [[2, 1, 3]]
//               [[1] [2, 3]] -> [[2, 3, 1]]
// [1, 2] [3] -> [[2] [3, 1]] -> [[3, 1, 2]]
//               [[1] [3, 2]] -> [[3, 2, 1]]
