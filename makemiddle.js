//Given an array of ints of even length, return a new array length 2 containing the middle two elements from the original array. The original array will be length 2 or more.
//solution
function makeMiddle(nums){
    return nums.splice((nums.length/2) - 1, 2)
  }