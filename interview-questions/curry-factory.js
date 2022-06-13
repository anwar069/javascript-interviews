function curryFactory(fn, seed) {
    return function innerFn(...args) {
        return Object.assign(innerFn.bind(null, ...args), {
            valueOf: () => args.reduce((a, c) => fn(a, c), seed)
        })
    }
}

const sum = (a, b) => a + b;

const mul = (a, b) => a * b;

const add = curryFactory(sum, 0);
const mulc = curryFactory(mul, 1);
let a = add(2, 3)
let b = a(6, 7)

console.log(a)
console.log(+b)

console.log(Number(add(1, 2)(2, 3)(5)(6)))
console.log(+mulc(1)(2, 3)(4))
