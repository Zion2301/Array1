//Given 2 int arrays, a and b, of any length, return a new array with the first element of each array. If either array is length 0, ignore that array.
//solution
function front11(a, b){
    let newarr = [];
    if(a.length > 0 && b.length == 0){
      newarr = [a[0]];
      return newarr;
    }
    else if(b.length > 0 && a.length == 0){
      newarr = [b[0]];
      return newarr;
    }
    else if (a.length > 0 && b.length > 0){
      newarr = [a[0], b[0]];
      return newarr;
    }
    return newarr
  }