//Given an int array, return true if the array contains 2 twice, or 3 twice. The array will be length 0, 1, or 2.
//solution
function double23(nums){
    for(let i = 0; i < nums.length; i++){
      if(nums[0] == 2 && nums[1] == 2 || nums[1] == 2 && nums[2] == 2 || nums[0] == 3 && nums[1] == 3 || nums[1] == 3 && nums[2] == 3){
          return true;
      }
    }
    return false;
  }