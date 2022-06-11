/**
 * 
 * @param {number} a its a simple number 
 * @param {number} b power of number 
 * @returns number which is power of  number a
 */
export function PowerOfNumber(a, b) {
    let result = 1;
    for (let index = 1; index <= b; index++) {
        result = result * a;
    }
    return result;
}


