function minimum(arr) {
    let min = 0
    for (let i = 1; i < arr.length; i++) {
        if (arr[min] < arr[i]) {
            min = i;
        }
    }

    return min;
}

let a = [6, 9, 0, 7];
//  [0,6,9,1,7]


console.log(minimum(a));
