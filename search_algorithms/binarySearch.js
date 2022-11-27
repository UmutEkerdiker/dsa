//Given a sorted array of "n" elements and a target element "t", find the index of "t" in the array.
//Return -1 if the target element is not found.

function binarySearch(arr, t) {
  //It is expected that given array will be sorted. But we can sort it ourselves too.
  let sortedArr = arr.sort((a, b) => a - b);

  let leftIndex = 0;
  let rightIndex = sortedArr.length - 1;

  //we determine a left and right index, find the middle index element and compare it to the target.
  //If target is smaller, we look at the left side of the middleindex, otherwise right side of it until we match.
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (sortedArr[middleIndex] === t) {
      return middleIndex;
    }
    if (t < sortedArr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

//Every iteration of while loop, we reduce the input size by half. Therefore, Big-O = O(logn)

//recursive solution
function recursiveBinarySearch(arr, t) {
  //we create a seperate function to run recursively because we need to change left and right index values in every iteration.
  return search(arr, t, 0, arr.length - 1);
}

function search(arr, t, leftIndex, rightIndex) {
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  //we keep running this function until either no element is found, or until we find the index of target.
  //we change left or right index accordingly, similiar to iterative solution.

  if (leftIndex > rightIndex) {
    return -1;
  }
  if (t === arr[middleIndex]) {
    return middleIndex;
  } else if (t > arr[middleIndex]) {
    return search(arr, t, middleIndex + 1, rightIndex);
  } else {
    return search(arr, t, leftIndex, middleIndex - 1);
  }
}

//recursive solution is also Big-O = O(logn) since input size reduces by half in each iteration. (our condition checks middle index, which is halved each iteration.)

// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10)); // 4
// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6)); // 3
// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20)); // -1

// console.log(binarySearch([-5, 2, 4, 6, 10], 10)); // 4
// console.log(binarySearch([-5, 2, 4, 6, 10], 6)); // 3
// console.log(binarySearch([-5, 2, 4, 6, 10], 20)); // -1
