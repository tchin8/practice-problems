function binarySearch(array, target) {
    if (array.length === 0) return false;

    let midIdx = Math.floor(array.length/2);
    let mid = array[midIdx];
    let left = array.slice(0, midIdx);
    let right = array.slice(midIdx + 1);

    if (mid < target) {
        return binarySearch(right, target);
    } else if (mid > target) {
        return binarySearch(left, target);
    } else {
        return true;
    }
}

function binarySearchIndex(array, target) {
    if (array.length === 0) return -1;

    let midIdx = Math.floor(array.length/2);
    let mid = array[midIdx];

    if (mid === target) return midIdx;

    let left = array.slice(0, midIdx);
    let right = array.slice(midIdx + 1);

    if (mid > target) {
        return binarySearchIndex(left, target);
    } else {
        let res = binarySearchIndex(right, target);
        if (res === -1) {
            return -1;
        } else {
            return midIdx + 1 + res;
        }
    }
}


module.exports = {
    binarySearch,
    binarySearchIndex
};