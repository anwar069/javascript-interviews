export function RotateArray(arr) {
    let ans = [];
    ans[0] = arr[arr.length - 1]
    for (let index = 1; index < arr.length; index++) {
        const element = arr[index];
        ans[index] = arr[index - 1]
    }

    return ans

}


//I want to rotate the ans to, how to do it?