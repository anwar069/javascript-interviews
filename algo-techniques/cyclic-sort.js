
function cyclicSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        while (arr[i] !== i + 1) {
            [arr[arr[i] - 1], arr[i]] = [arr[i], arr[arr[i] - 1]];
        }
    }
    return arr;
}

console.log(cyclicSort([3, 1, 2, 4]));