'use strict';

const mergeSort = (array) => {
  const n = array.length;
  let mid, left, right;
  if (n > 1) {
    mid = Math.ceil(n / 2);
    left = array.slice(0, mid);
    right = array.slice(mid, n);

    mergeSort(left);
    mergeSort(right);
    return merge(left, right, array);
  }
};

const merge = (left, right, array) => {
  let x = 0;
  let y = 0;
  let z = 0;

  while (x < left.length && y < right.length) {
    if (left[x] <= right[y]) {
      array[z] = left[x];
      x++;
    } else {
      array[z] = right[y];
      y++;
    }
    z++;
  }

  if (x === left.length) {
    for (y; y < right.length; y++) {
      array[z] = right[y];
      z++;
    }
  } else {
    for (x; x < left.length; x++) {
      array[z] = left[x];
      z++;
    }
  }
  return array;
};

module.exports = mergeSort;