/* 
Find all possible paths from start to End (0,0) to (N,N) in N by N matrix
The possible move is Up, Down, Left and Right and Diagonal only

*/

function path(n) {
    let res = [];
    let initArr = [...new Array(n)].map(a => new Array(n).fill(true));
    let outArr = [...new Array(n)].map(a => new Array(n).fill(0));

    // console.log(initArr);
    function helper(arr, p, r, c) {

        // console.log(arr,r,c)
        // returs the path since end reached
        if (r == arr.length - 1 && c == arr[0].length - 1) {
            res.push(p);
            return;
        }

        // return ass already visited
        if (!arr[r][c]) return;

        // Mark current as visited
        arr[r][c] = false;


        //Go Down
        if (r < arr.length - 1) {
            helper(arr, p + 'D', r + 1, c);
        }

        //Go Right
        if (c < arr[0].length - 1) {
            helper(arr, p + 'R', r, c + 1);
        }

        if (r > 0) {
            helper(arr, p + 'U', r - 1, c);
        }

        if (c > 0) {
            helper(arr, p + 'L', r, c - 1);
        }

        // Remove from visited
        arr[r][c] = true
    }


    // console.log(initArr);
    function helperWithSteps(arr, p, r, c, level, out) {

        // console.log(arr,r,c,out)
        // returs the path since end reached
        if (r == arr.length - 1 && c == arr[0].length - 1) {
            out[r][c] = level;
            for (let a of out) {
                console.log(JSON.stringify(a));

            }
            console.log(p)
            console.log('\n\n')
            // res.push(p);
            return;
        }

        // return ass already visited
        if (!arr[r][c]) return;

        // Mark current as visited
        arr[r][c] = false;

        out[r][c] = level;

        //Go Down
        if (r < arr.length - 1) {
            helperWithSteps(arr, p + 'D', r + 1, c, level + 1, out);
        }

        //Go Right
        if (c < arr[0].length - 1) {
            helperWithSteps(arr, p + 'R', r, c + 1, level + 1, out);
        }

        if (r > 0) {
            helperWithSteps(arr, p + 'U', r - 1, c, level + 1, out);
        }

        if (c > 0) {
            helperWithSteps(arr, p + 'L', r, c - 1, level + 1, out);
        }

        // Remove from visited
        arr[r][c] = true
    }

    // helper(initArr,"",0, 0);
    helperWithSteps(initArr, "", 0, 0, 1, outArr);
    return res;
}



path(3)