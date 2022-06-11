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





export function RemoveDupSet(arr) {
    let filterArr = [...new Set(arr)];

    return filterArr;
}

