//Given 2 int arrays, a and b, return a new array length 2 containing, as much as will fit, the elements from a followed by the elements from b. The arrays may be any length, including 0, but there will be 2 or more elements available between the 2 arrays.
//solution
function make2(a, b){
    let newarr = [];
    if(a.length >= 2){
       newarr = [a[0], a[1]];
      return newarr;
    }
    
    else if(a.length == 1 && b.length > 0){
      newarr = [a[0], b[0]];
      return newarr;
    }
    newarr = [b[0], b[1]];
    return newarr;
  }