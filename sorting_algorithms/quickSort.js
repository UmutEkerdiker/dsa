//Given an array of integers, sort the array.

function quickSort(arr) {
  //base case is if there's only 1 item left in the array, return it.
  if (arr.length < 2) {
    return arr;
  }
  //we set the last element as the pivot, and compare other elements to it.
  let lastElementIndex = arr.length - 1;
  let pivot = arr[lastElementIndex];
  let leftArray = [];
  let rightArray = [];
  //push the larger elements to the right array, smaller elements to the left array.
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArray.push(arr[i]);
    } else {
      rightArray.push(arr[i]);
    }
  }
  //use recursion to continue sorting until 1 element is left in each array, concatenate them with the pivot in the middle.
  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}

// console.log(quickSort([-6, -10, 8, -20, 4]));
//This is so far my favourite method of sorting, it is easier to digest for me compared to insertion sort.
//Worst case - O(n**2) -- if it's a sorted array, since thats unlikely, we will look at the average case.
//Average case - O(nlogn) -- This is what matters with this algorithm
