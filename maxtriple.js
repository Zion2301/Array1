//Given an array of ints of odd length, look at the first, last, and middle values in the array and return the largest. The array length will be a least 1.
//solution
function maxTriple(nums){
    let first = nums[0];
    let second = nums[Math.floor(nums.length/2)];
    let third = nums[nums.length-1];
    return Math.max(first, second, third);
  }