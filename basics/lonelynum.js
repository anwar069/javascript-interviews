//Check if number has a pair (1,-1) (2,-2) etc are pair
//If pair not exits, number is lonely
export function findLonely(arr) {
    let lonelyNum = [];
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index]
        let n = (element * -1);
        if (arr.indexOf(n) === -1)
            lonelyNum.push(element);

    }
    return lonelyNum;
}


