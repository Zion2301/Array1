//Given 2 arrays of ints, a and b, return true if they have the same first element or they have the same last element. Both arrays will be length 1 or more.
//solution
function commonEnd(a, b){
    //     let a = [];
    //     let b = [];
      for(i = 0; i < commonEnd.length; i++){
        if(a[0] == b[0] || a[a.length - 1] == b[b.length - 1]){
          return true;
        }
        else{
          return false;
        }
      }
    }