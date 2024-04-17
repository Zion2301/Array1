//Given an array of ints, return true if the array is length 1 or more, and the first element and the last element are equal.
//solution
function sameFirstLast(nums){
    for(i = 0; i < nums.length; i++){
      if(nums[0] == nums[nums.length - 1] && nums.length >= 1){
         return true;
      }
      
    }
    return false;
  }