/** Given an integer array nums, rotate the array to the right by k steps, where k is non-negative. */

const nums = [1, 2];
const rotateArray = (nums, k) => {
  if (nums.length < 2) return nums;
  if (k >= nums.length) k = k % nums.length;
  let temp = nums.splice(nums.length - k);
  nums.unshift(...temp);
  return nums;
};

console.log(rotateArray(nums, 3));
