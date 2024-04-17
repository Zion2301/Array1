//1 Given an array of ints, return true if 6 appears as either the first or last element in the array. The array will be length 1 or more.
//solution
function firstLast6(nums){
    for(i = 0; i < nums.length; i++){
      if((nums[0] == 6 || nums[nums.length - 1] == 6) && nums.length >= 1){
        return true;
      }
      else{
        return false;
      }
    }
  }

