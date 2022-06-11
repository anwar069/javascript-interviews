import { numArr } from "./num-array.js";
import { PowerOfNumber } from "./power-of-num.js";

export function NarNum(num) {
    let ans = numArr(num);
    let sum = 0;
    for (let index = 0; index < ans.length; index++) {
        const element = ans[index];

        sum = sum + PowerOfNumber(element, ans.length)
        console.log(sum)
    }
    if (sum === num) {
        return true
    } else return false

}
