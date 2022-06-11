function comperator(a, b) {
    return a - b;
};

export function SortedArr(arr) {
    let sortedarray = arr.sort(comperator);
    return sortedarray;
};


