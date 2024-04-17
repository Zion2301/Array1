//Given an int array length 2, return true if it contains a 2 or a 3.
//solution
function has23(nums){
    for(let i = 0; i < nums.length; i++){
       if(nums.includes(2) || nums.includes(3)){
         return true;
       }
      return false;
    }
  }