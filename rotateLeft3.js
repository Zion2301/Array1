//Given an array of ints length 3, return an array with the elements "rotated left" so {1, 2, 3} yields {2, 3, 1}.
//solution
function rotateLeft3(nums){
    for(let i = 0; i < nums.length; i++){
       nums = [nums[1], nums[2], nums[0]];
      return nums;
    }
  }