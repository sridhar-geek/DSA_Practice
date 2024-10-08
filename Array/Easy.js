/**  Given an array, arr. The task is to find the largest element in it.*/

// const nums = [1, 8, 7, 56, 90];
const largestNumber = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) max = arr[i];
  }
  return max;
};
// console.log(largestNumber(nums))

/* this approach is better than Math.max(...arr) */


/** Given an array arr, return the second largest distinct element from an array. If the second largest element doesn't exist then return -1. */

// const arr = [12, 35, 1, 10, 34, 1]
const secondMax = (arr) => {
      if (arr.length < 2) return -1;
      let max = arr[0];
      let secondMax = -1;

      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
          secondMax = max;
          max = arr[i];
        } else if (arr[i] > secondMax && arr[i] != max) secondMax = arr[i];
      }
      return secondMax;
}
// console.log(secondMax(arr))


/**Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.then return length of unique elements  */

// const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const removeDuplicates = (nums) => {
       let j = 0;
    for (let i = 1; i< nums.length; i++){
        if(nums[j] < nums[i]){
            nums[j+1] = nums[i]
            j++
        }
    }
    return  j+1
}
// console.log(removeDuplicates(nums))