
export function isPrime(a) {
    for (let index = 2; index < a; index++) {
        let num = a % index
        if (num == 0) {
            return false
        }
    }
    return true
}






