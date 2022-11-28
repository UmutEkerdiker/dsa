//Given an array of integers, sort the array in ascending order.
//This is a poor sorting algorithm in real world.

function bubbleSort(arr) {
  //we set a swapped variable, and while its true, we keep looping through the array.
  //we set it to false to begin with, and if there's any swap occured, we set it to false and loop again.
  //if nothing gets swapped, return array.
  let swapped = true;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      console.log(arr);
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
        console.log("!SWAPPED ARRAY " + arr);
      }
    }
  } while (swapped);

  return arr;
}

//Big-O for this bubble sort array is quadratic - O(n**2) since we have a for loop nested in a do-while loop.
// console.log(bubbleSort([-6, 20, 8, -2, 4]));
