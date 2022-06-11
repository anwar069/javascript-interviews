/**
 * 
 * @param {*} arr1 
 * @param {*} arr2 
 * @returns sum of the array which will also be a array
 */

export function arrSum(arr1, arr2) {
    let ans = [];
    for (let index = 0; index < arr1.length; index++) {
        const element1 = arr1[index];
        const element2 = arr2[index];
        ans[index] = (element1 + element2);
    }
    return ans;
}