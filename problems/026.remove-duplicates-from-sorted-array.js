/**
 * easy
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let result = 0;
  if (!nums.length) {
    return result;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[result]) {
      result++;
      nums[result] = nums[i];
    }
  }
  nums.splice(result + 1, nums.length - result);
  return result + 1;
};


const list1 = [1,1,2];
console.log(removeDuplicates(list1));
console.log(list1);

const list2 = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(list2));
console.log(list2);