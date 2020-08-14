// Merge Sort Notes

// 0 is considered a falsey value, meaning it acts like false when used in 
// boolean expressions. All other numbers are truthy.

// Infinity is a value that is guaranteed to be greater than any other quantity

// shift is an array method that removes and returns the first element




// function merge(array1, array2) {
//   let merged = [];

//   // keep running while either array still contains elements
//   while (array1.length || array2.length) {
//     // if array1 is nonempty, take its the first element as ele1
//     // otherwise array1 is empty, so take Infinity as ele1
//     let ele1 = array1.length ? array1[0] : Infinity;

//     // do the same for array2, ele2
//     let ele2 = array2.length ? array2[0] : Infinity;

//     let next;
//     // remove the smaller of the eles from it's array
//     if (ele1 < ele2) {
//       next = array1.shift();
//     } else {
//       next = array2.shift();
//     }

//     // and add that ele to the new array
//     merged.push(next);
//   }

//   return merged;
// }

function merge(arr1, arr2) {
  let merged = [];

  while (arr1.length || arr2.length) {
    let num1 = arr1.length ? arr1[0] : Infinity;
    let num2 = arr2.length ? arr2[0] : Infinity;

    if (num1 > num2) {
      merged.push(arr2.shift());
    } else {
      merged.push(arr1.shift());
    }
  }

  return merged;
}

// let arr1 = [1, 5, 10, 15];
// let arr2 = [0, 2, 3, 7, 10];
// console.log(merge(arr1, arr2)); // => [0, 1, 2, 3, 5, 7, 10, 10, 15]
// console.log(merge([10, 13, 15, 25], []));    // => [10, 13, 15, 25]

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let midIdx = Math.floor(array.length / 2);
  let leftHalf = array.slice(0, midIdx);
  let rightHalf = array.slice(midIdx);

  let sortedLeft = mergeSort(leftHalf);
  let sortedRight = mergeSort(rightHalf);

  return merge(sortedLeft, sortedRight);
}

// let arr = [0, 15, 2, 10, 3, 7, 5, 10, 1];
// console.log(mergeSort(arr));

// time complexity: O(nlogn)
// space: O(n)


// -----------------------------------------------------------------------------

// Quick Sort Notes

// what we needa do for quick sort
// function partition(array, pivot) {
//   let left = array.filter((el) => el < pivot);
//   let right = array.filter((el) => el >= pivot);
//   return [left, right];
// }


function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let pivot = array.shift();
  let left = array.filter((el) => el < pivot);
  let right = array.filter((el) => el >= pivot);

  let leftSorted = quickSort(left);
  let rightSorted = quickSort(right);

  // return leftSorted.concat([pivot]).concat(rightSorted);
  return [...leftSorted, pivot, ...rightSorted];
}

// let arr = [0, 15, 2, 10, 3, 7, 5, 10, 1];
// console.log(quickSort(arr));

// time complexity: O(nlogn)
// space: O(n)



// -----------------------------------------------------------------------------

// Binary Search

function binarySearch(array, target) {
  if (array.length === 0) {
    return false;
  }

  let midIdx = Math.floor(array.length / 2);
  let leftHalf = array.slice(0, midIdx);
  let rightHalf = array.slice(midIdx + 1);

  if (target < array[midIdx]) {
    return binarySearch(leftHalf, target);
  } else if (target > array[midIdx]) {
    return binarySearch(rightHalf, target);
  } else {
    return true;
  }
}

// console.log(binarySearch([5, 10, 12, 15, 20, 30, 70], 12));  // => true
// console.log(binarySearch([5, 10, 12, 15, 20, 30, 70], 24));  // => false


// -----------------------------------------------------------------------------

// Linked List




// -----------------------------------------------------------------------------

// Stack JS Implementation 

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.top) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const temp = this.top;
      this.top = newNode;
      this.top.next = temp;
    }
    return ++this.length;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    const temp = this.top;
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;
    return temp.value;
  }

  size() {
    return this.length;
  }
}


// -----------------------------------------------------------------------------

// Queue JS Implementation 

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (!this.front) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
    return ++this.length;
  }

  dequeue() {
    if (!this.front) {
      return null;
    }
    const temp = this.front;
    if (this.front === this.back) {
      this.back = null;
    }
    this.front = this.front.next;
    this.length--;
    return temp.value;
  }

  size() {
    return this.length;
  }
}


// -----------------------------------------------------------------------------




