export function checkBrackets(params) {
    let stack = [];
    let current;
    let matchPairs = {
        "(": ")",
        "{": "}",
        "[": "]",

    };
    for (let index = 0; index < params.length; index++) {
        const current = params[index];
        if (current === '(' || current === '{' || current === '[') {
            stack.push(current)
        } else if (current === ')' || current === '}' || current === ']') {

            let lastPop = stack.pop(current);
            if (matchPairs[lastPop] !== current) {
                return false;
            }
        }


    }

    return stack.length === 0;

}