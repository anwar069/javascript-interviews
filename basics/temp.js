export function abc(x, y) {
    let sum = 0

    for (let index = 0; index <= y; index++) {
        let e = x * index;
        sum = sum + e;
    }
    return sum
}