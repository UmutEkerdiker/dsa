//Given an array of "n" elements and a target element "t", find the index of "t" in the array.
//Return -1 if the target element is not found.

const n = [1, 3, 2, 8, 5, -3];

function linearSearch(arr, t) {
  //search through the elements from start to last, check if its equal to the target.
  //if no element matches, return -1 out of the for loop.
  for (let i = 0; i < n.length; i++) {
    if (arr[i] === t) {
      return i;
    }
  }
  return -1;
}

//Big O = O(n) for this function, since we loop through an array and complexity grows linearly according to the array size.
