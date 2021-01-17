/**
 * Medium
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums, toFind = 0) {
  nums = quickSort(nums);
  const result = [];
  if (!nums.length || nums[0] > 0 || nums[nums.length - 1] < 0) {
    return [];
  }
  for (let i = 0; i < nums.length - 2; i++) {
    // 不可能出现3个整数相加等于0的情况
    if (nums[i] > 0) {
      break;
    }
    // 跳过重复值
    if (i > 0 && nums[i - 1] === nums[i]) {
      continue;
    }
    const target = toFind - nums[i];
    let left = i + 1;
    let right = nums.length - 1;
    while(left < right) {
      if (nums[left] + nums[right] === target) {
        result.push([nums[i], nums[left], nums[right]]);
        // 跳过重复值
        while (left < right && nums[left] === nums[left + 1] ) {
          left++;
        }
        // 跳过重复值
        while (left < right && nums[right] === nums[right - 1] ) {
          right--;
        }
        left++;
        right--;
      } else if (nums[left] + nums[right] < target) {
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
console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4], 2));
