function memoizer(fn) {
    const memoObj = {};
    return function memo(...args) {
        const argStr = JSON.stringify(args);
        if (memoObj[argStr]) {
            console.log("From memoObj")
            return memoObj[argStr]
        }
        const res = fn.call(null, ...args)
        memoObj[argStr] = res;
        return res;
    }
}

const slowsum = (a, b) => {
    for (let index = 0; index < 100000000; index++) {
    }
    return a + b;
}

console.time('sum')

console.log(slowsum(1, 2))
console.timeEnd('sum')

const mSlowSum = memoizer(slowsum)


console.time('sum')

console.log(mSlowSum(1, 2))
console.timeEnd('sum')

console.time('sum')

console.log(mSlowSum(1, 2))
console.timeEnd('sum')
