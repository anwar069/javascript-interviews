import { isPrime } from "./find-prime-num.js";
export function numberBetweenPrime(N1, N2) {
    if (N2 < N1) {
        return console.log('input is invalid')

    }
    let arr = []
    for (let index = N1; index < N2; index++) {

        let r = isPrime(index)
        if (r) {
            arr.push(index)
        }


    }
    return arr
}

