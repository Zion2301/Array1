//Given an array of ints, swap the first and last elements in the array. Return the modified array. The array length will be at least 1.
//solution
function swapEnds(nums){
    let first =nums[0]
    nums[0] = nums[nums.length -1];
     nums[nums.length-1]= first;
    return nums;
       
   }