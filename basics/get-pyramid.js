export function printPyramid(n) {
    for (let i = 0; i <= n; i++) {
        let space = '';
        let string = '';
        for (let j = i; j <= n; j++) {
            space += ' '

        }
        for (let k = 0; k <= i; k++) {

            string += k + ' ';
        }
        console.log(space + string);
    }
}