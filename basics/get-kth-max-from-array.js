export function getkthMax(arr, k) {
    for (let i = 0; i < k; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp
            }
        }
    }
    return arr[arr.length - k]
}