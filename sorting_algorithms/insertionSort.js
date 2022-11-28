//Given an array of integers, sort the array in ascending order.

function insertionSort(arr) {
  //Assume first element is sorted, start from the second element in the array.
  for (let i = 1; i < arr.length; i++) {
    // console.log(`${i}'TH ITERATION, initial array= ${arr}`);
    let numberToInsert = arr[i];
    let j = i - 1;
    // console.log(`Number to Insert: ${numberToInsert}, i=${i}, j=${j}`);
    //Compare number to insert to all the elements on its left, move the compared element to the right if its larger than numberToInsert.
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j--;
      // console.log(`Array in while loop = ${arr}`);
    }
    //Insert the element at the appropriate spot accordingly.
    arr[j + 1] = numberToInsert;
    // console.log(`final array = ${arr}`);
  }
}

// console.log(insertionSort([-6, -10, 8, -20, 4]));

//Commented console logs will give you a clearer idea on how the loops operate and how the values change as algorithm progresses.
//Big-O time complexity for this algorithm is O(n**2) since we have a while loop nested inside a for loop.
