export function SelectSort(arr) {
    for (let j = 0; j < arr.length; j++) {

        for (let index = j + 1; index < arr.length; index++) {

            if (arr[j] > arr[index]) {
                let temp = arr[j]
                arr[j] = arr[index]
                arr[index] = temp
            }
            // console.log('j', j, 'i', index, 'arr -> ', arr.toString());
        }

    }
    return arr;
}