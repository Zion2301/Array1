//Start with 2 int arrays, a and b, each length 2. Consider the sum of the values in each array. Return the array which has the largest sum. In event of a tie, return a.
//solution
function biggerTwo(a, b){
    if(a[0] + a[1] > b[0] + b[1]){
       return a;
    }
    
    else if(b[0] + b[1] > a[0] + a[1]){
      return b;
    }
    
    else {
       return a;
    }
  }