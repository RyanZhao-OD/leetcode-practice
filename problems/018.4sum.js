/**
 * Medium
 * Given an array nums of n integers and an integer target,
 * are there elements a, b, c, and d in nums such that a + b + c + d = target? 
 * Find all unique quadruplets in the array which gives the sum of target.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  const result = [];
  if (nums.length < 4) {
    return result;
  }
  nums = quickSort(nums);
  for (let i = 0; i < nums.length - 3; i++) {
    // start 去除result中的重复值
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    // start 去除result中的重复值
    for (let j = i + 1; j < nums.length - 2; j++) {
      // 左边重复值
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      let left = j + 1;
      let right = nums.length - 1;
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);
          // start 去除result中的重复值
          while (left < right && nums[left] == nums[left + 1]) ++left;
          while (left < right && nums[right] == nums[right - 1]) --right;
          // end
          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
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

console.log(fourSum([1,0,-1,0,-2,2], 0));
console.log(fourSum([-2,-1,-1,1,1,2,2], 0));
console.log(fourSum([-1,-5,-5,-3,2,5,0,4], -7));
console.log(fourSum([], 0));

