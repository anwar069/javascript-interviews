export function printJhoomar(n) {
    for (let index = 0; index <= n; index++) {
        let space = "";
        let numStr = "";
        for (let j = index; j <= n; j++) {
            space += " "
        }
        for (let k = 0; k <= index; k++) {
            numStr += k + " "
        }
        console.log(space + numStr);

    }


    for (let index = 0; index < n; index++) {
        let space = "";
        let numStr = "";
        for (let j = 0; j <= index; j++) {
            space += " "
        }
        for (let k = index; k < n; k++) {
            numStr += k + " "

        }
        console.log(space + numStr);



    }


}

