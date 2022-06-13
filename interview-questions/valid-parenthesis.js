/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let arr = s.split("");
    let openArr = ['[', '{', '('];
    let closeArr = [']', '}', ')'];
    let map = {
        '[': ']',
        '{': '}',
        '(': ')'
    }
    let stack = [];
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (openArr.includes(element)) {
            stack.push(element)
        }

        if (closeArr.includes(element)) {

            if (map[stack[stack.length - 1]] == element) {
                stack.pop()
            } else {
                return false
            }
        }
    }

    return !stack.length
};