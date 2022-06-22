import { SelectSort } from "./selection-sort.js";
export function RemoveDup(arr) {
    let filter = [];
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (filter.indexOf(element) === -1) {
            filter.push(element)
        }
    }
    return filter;
}
// console.log(RemoveDup([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]));
export function RemoveDupSet(arr) {
    let filterArr = [...new Set(arr)];
    return filterArr;
}

