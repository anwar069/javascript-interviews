export function BubbleSorted(arr) {
    for (let j = 0; j < arr.length - 1; j++) {
        for (let index = 0; index < arr.length - 1 - j; index++) {

            if (arr[index] > arr[index + 1]) {
                let temp = arr[index]
                arr[index] = arr[index + 1]
                arr[index + 1] = temp
            }
            console.log('j', j, 'i', index, 'i+1', index + 1, 'arr -> ', arr.toString());

        }
    }
    return arr;
}