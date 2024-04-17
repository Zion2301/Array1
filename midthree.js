//Given an array of ints of odd length, return a new array length 3 containing the elements from the middle of the array. The array length will be at least 3.
//solution
function midThree(nums){
    return nums.splice((nums.length/2) - 1, 3)
  }