/* 
Find all possible paths from start to End (0,0) to (N,N) in N by N matrix
The possible move is Donw and Right only

*/


function findPaths(n) {

    let res = [];

    function helper(p, r, c) {
        if (r == 1 && c == 1) {
            res.push(p);
            return;
        }

        if (r > 1) {
            helper(p + 'R', r - 1, c);
        }

        if (c > 1) {
            helper(p + 'D', r, c - 1);
        }
    }

    helper('', n, n);

    return res;
}


console.log(findPaths(3));