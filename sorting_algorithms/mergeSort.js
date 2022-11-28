//Given an array of integers, sort the array.

function mergeSort(arr) {
  //base case is when we achieve an array with only 1 element
  if (arr.length === 1) {
    return arr;
  }
  //find the middle element, split the array into 2.
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  //call a seperate merge function, recursively until all elements are sorted to a single element array.
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  const sortedArr = [];
  //We push the smaller element into sorted array in left and right arrays.
  //When there are no elements in one of the elements, we spread and return arrays in the right order.
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}

// console.log(mergeSort([-6, -10, 8, -20, 4]));
//There are 2 parts to Big-O of this algorithm. First function is O(logn) since we divide arrays recursively.
//second one is O(n) since there is a while loop. Therefore the total Big-O is O(nlogn).
