/**
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const map = Object.create({});
    for (let i = 0; i < nums.length; i++) {
        //[subtract, index] 记录差值 && index
        map[nums[i]] = [target - nums[i], i];
    }
    for (let i = 0; i < nums.length; i++) {
        const subtract = target - nums[i];
        const index = map[subtract][1];
        if (map.hasOwnProperty(subtract) && index !== i) {
            return [i, index];
        }
    }
    return [-1, -1];
};

console.log(twoSum([3,2,4], 6));