'use strict';

const quickSort = (array, left, right) => {
  if (left < right) {
    const position  = partition(array, left, right);

    quickSort(array, left, position  - 1);
    quickSort(array, position  + 1, right);
  }
};

const partition = (array, left, right) => {
  const pivot = array[right];
  let low = left - 1;

  for (let i = left; i < right; i++) {
    if (array[i] <= pivot) {
      low++;
      swap(array, i, low);
    }
  }

  swap(array, right, low + 1);
  return low + 1;
};

const swap = (array, i, low) => {
  const temp = array[i];
  array[i] = array[low];
  array[low] = temp;
};

module.exports = quickSort;