//Given an array of ints length 3, figure out which is larger, the first or last element in the array, and set all the other elements to be that value. Return the changed array.
//solution
function maxEnd3(nums){
    let newArray = [];
    if(nums[0] > nums[2]){
       newArray = [nums[0], nums[0], nums[0]];
      return newArray;
    }
    else if(nums[2] > nums[0]){
       newArray = [nums[2], nums[2], nums[2]];
      return newArray;
    } 
      newArray = [nums[2], nums[2], nums[2]];
    return newArray;
      
  }