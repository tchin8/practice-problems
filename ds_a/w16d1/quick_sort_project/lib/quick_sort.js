function quickSort(array) {
    if (array.length <= 1) return array;

    let pivot = array.shift();
    let left = array.filter(n => n <= pivot);
    let right = array.filter(n => n > pivot);

    return [...quickSort(left), pivot, ...quickSort(right)];
}


module.exports = {
    quickSort
};