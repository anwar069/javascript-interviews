export function CountIn(arr, n) {
    let count = 0;
    for (let index = 0;
        index < arr.length;
        index++) {
        if (arr[index] == n)
            count = count + 1;
    }
    return count;
}