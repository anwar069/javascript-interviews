


import { numberIsEven } from "./numberEven.js";
export function EvenOddString(a) {

    let evenStr = "";
    let oddStr = "";
    for (let index = 0; index < a.length; index++) {
        if (numberIsEven(index)) {
            evenStr = evenStr + a[index]

        }
        else {

            oddStr = oddStr + a[index];
        }
    }





    return evenStr + "" + oddStr;

}



