// Merge Sort Notes

function merge(array1, array2) {
  let merged = [];

  // keep running while either array still contains elements
  while (array1.length || array2.length) {
    // if array1 is nonempty, take its the first element as ele1
    // otherwise array1 is empty, so take Infinity as ele1
    let ele1 = array1.length ? array1[0] : Infinity;

    // do the same for array2, ele2
    let ele2 = array2.length ? array2[0] : Infinity;

    let next;
    // remove the smaller of the eles from it's array
    if (ele1 < ele2) {
      next = array1.shift();
    } else {
      next = array2.shift();
    }

    // and add that ele to the new array
    merged.push(next);
  }

  return merged;
}


let arr1 = [1, 5, 10, 15];
let arr2 = [0, 2, 3, 7, 10];
console.log(merge(arr1, arr2)); // => [0, 1, 2, 3, 5, 7, 10, 10, 15]


// 0 is considered a falsey value, meaning it acts like false when used in 
// boolean expressions. All other numbers are truthy.

// Infinity is a value that is guaranteed to be greater than any other quantity

// shift is an array method that removes and returns the first element



// -----------------------------------------------------------------------------




// -----------------------------------------------------------------------------




// -----------------------------------------------------------------------------




// -----------------------------------------------------------------------------




// -----------------------------------------------------------------------------




// -----------------------------------------------------------------------------




