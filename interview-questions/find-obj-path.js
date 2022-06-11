// https://leetcode.com/playground/LhwrauHo

const findPath = (object, path) => {
    let arr = path.split('.');
    if (!path) return object;
    let obj = object;
    for (key of arr) {
        obj = obj[key];
        if (obj === undefined) {
            return undefined
        }
    }
    return obj;
};
