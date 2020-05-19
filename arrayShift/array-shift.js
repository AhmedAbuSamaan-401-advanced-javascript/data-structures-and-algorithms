let insertShiftArray = (array, value) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > value) {
        let sliceOne = array.slice(0, i);
        sliceOne[sliceOne.length]= value;
        let sliceTwo = array.slice(i, array.length);
        sliceTwo.forEach(element => {
          sliceOne[sliceOne.length]= element;
        });
        return sliceOne;
      }
    }
  };
  
  console.log(insertShiftArray([2,4,6,8], 5));
  console.log(insertShiftArray([12,14,16,18], 15));
  console.log(insertShiftArray([20,40,60,80], 50));
  
  module.exports = insertShiftArray;