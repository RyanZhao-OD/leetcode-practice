/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  const sortedNums = quickSort(nums);
  let group = [sortedNums[0], sortedNums[1], sortedNums[2]];
  let closest = group.reduce((sum, cur) => sum + cur, 0);
  let diff = Math.abs(closest - target);
  for (let i = 0; i < sortedNums.length - 2; i++) {
      let left = i + 1;
      let right = sortedNums.length - 1;
      while (left < right) {
          const sum = sortedNums[i] + sortedNums[left] + sortedNums[right];
          const newDiff = Math.abs(sum - target);
          if (diff > newDiff) {
              diff = newDiff;
              closest = sum;
              group = [sortedNums[i], sortedNums[left], sortedNums[right]]
          }
          if (sum < target) {
            left++;
          } else {
            right--;
          }
      }
  }
  return {
    closest,
    group,
  }.closest;
}

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

console.log(threeSumClosest([-1,2,1,-4], 1));
console.log(threeSumClosest([-3,-2,-5,3,-4], -1));

// [ -5, -4, -3, -2, 3 ]