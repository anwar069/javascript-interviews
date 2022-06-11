export function cumulativeSum(num, end) {
    let sum = 0;
    for (let index = 1; index <= end; index++) {
        console.log(num, "*", index, "=", num * index)

        sum = sum + num * index


    }
    return sum;
}

