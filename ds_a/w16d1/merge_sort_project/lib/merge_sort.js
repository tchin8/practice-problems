function merge(array1, array2) {
    let merged = [];

    while (array1.length || array2.length) {
        let num1 = array1.length ? array1[0] : Infinity;
        let num2 = array2.length ? array2[0] : Infinity;

        if (num1 < num2) {
            merged.push(array1.shift());
        } else {
            merged.push(array2.shift());
        }
    }

    return merged;
}

function mergeSort(array) {
    if (array.length <= 1) return array;

    let midIdx = Math.floor(array.length / 2);
    let left = array.slice(0, midIdx);
    let right = array.slice(midIdx);

  let sortedLeft = mergeSort(left);
  let sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}

module.exports = {
    merge,
    mergeSort
};