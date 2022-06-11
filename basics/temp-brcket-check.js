
export function checkBracket(string) {


    let obj = {
        '[': ']',
        '{': '}',
        '(': ')',
    }
    let openarr = Object.keys(obj)
    let closearr = Object.values(obj)

    let Stack = []

    for (let index = 0; index < string.length; index++) {
        const e = string[index];
        if (openarr.includes(e)) {
            Stack.push(e)
        }

        if (closearr.includes(e)) {

            let a = Stack.pop()
            // console.log(a, e)
            if (e != obj[a]) {

                return false
            }
        }
    }
    return Stack.length === 0;
}





