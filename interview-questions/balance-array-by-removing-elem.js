function balanceArray(arr) {
    let evenSum = 0, oddSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            evenSum += arr[i]
        } else {
            oddSum += arr[i]
        }
    }

    let currEven = arr[0], currOdd = 0;
    for (let i = 1; i < arr.length - 1; i++) {
        let newEvenSum, newOddSum;
        if (i % 2 === 0) {
            currEven += arr[i];
            newOddSum = currOdd + evenSum - currEven;
            newEvenSum = currEven + oddSum - currOdd - arr[i];
        } else {
            currOdd += arr[i];
            newEvenSum = currEven + oddSum - currOdd;
            newOddSum = currOdd + evenSum - currEven - arr[i];
        }

        if (newEvenSum === newOddSum)
            return i;
    }
    if (oddSum === evenSum - arr[0])
        return 0;
    if (arr.length % 2 === 0) {
        if (evenSum === oddSum - arr[arr.length - 1])
            return arr.length - 1
    } else {
        if (oddSum === evenSum - arr[arr.length - 1])
            return arr.length - 1
    }
    return -1;
}

console.log('[2,5,3,1] --> ', balanceArray([2, 5, 3, 1]));
console.log('[5,2,3,1] --> ', balanceArray([5, 2, 3, 1]));
console.log('[2,3,1,5] --> ', balanceArray([2, 3, 1, 5]));