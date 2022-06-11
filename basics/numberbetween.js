/**
 * 
 * @param {number} a minimum number
 * @param {number} b maximum number
 * @returns number betweem arry minimum to maximun
 */
export function numberBetween(a, b) {
    let result = [];

    for (let index = a + 1; index < b; index++) {
        result.push(index)

    }
    return result
}
