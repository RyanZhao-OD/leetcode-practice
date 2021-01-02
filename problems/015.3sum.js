/**
 * Medium
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const sortedNums = quickSort(nums);
  const result = [];
  if (!sortedNums.length || sortedNums[0] > 0 || sortedNums[sortedNums.length - 1] < 0) {
    return [];
  }
  for (let i = 0; i < sortedNums.length - 2; i++) {
    // 不可能出现3个整数相加等于0的情况
    if (sortedNums[i] > 0) {
      break;
    }
    // 跳过重复值
    if (i > 0 && sortedNums[i - 1] === sortedNums[i]) {
      continue;
    }
    const target = 0 - sortedNums[i];
    let left = i + 1;
    let right = sortedNums.length - 1;
    while(left < right) {
      if (sortedNums[left] + sortedNums[right] === target) {
        result.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
        // 跳过重复值
        while (left < right && sortedNums[left] === sortedNums[left + 1] ) {
          left++;
        }
        // 跳过重复值
        while (left < right && sortedNums[right] === sortedNums[right - 1] ) {
          right--;
        }
        left++;
        right--;
      } else if (sortedNums[left] + sortedNums[right] < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
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

console.log(threeSum([-1,0,1,2,-1,-4]));
console.log(threeSum([]));
console.log(threeSum([0]));
console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]));
