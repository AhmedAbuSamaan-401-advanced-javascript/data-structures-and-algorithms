'use strict';
let BinarySearch = function (array, key) {
  let valid;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === key) {
      valid=i;
      return (valid );
    }
  }
  if(!valid){
    return(-1);
  }
    
};
console.log(BinarySearch([4,5,2,3,5,6],6));
console.log(BinarySearch([4,5,2,3,5,6],10));
console.log(BinarySearch([4,5,2,3,5,6],5));


module.exports = BinarySearch;