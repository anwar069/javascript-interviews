function queens(n) {

    const board = [...Array(n)].map(a => Array(n).fill(false));

    function helper(r, c) {
        if (r === n) {
            //Display board
            for (let b of board) {
                console.log(b.map(e => e ? 'Q' : '_'))
            }
            console.log('====================================');
            return 1;
        }

        let count = 0;

        for (let i = 0; i < n; i++) {
            if (isSafe(r, i)) {
                board[r][i] = true;
                count += helper(r + 1, 0);
                board[r][i] = false;
            }
        }
        return count;
    }

    function isSafe(r, c) {
        //Check current column
        for (let i = 0; i < r; i++) {
            if (board[i][c])
                return false;
        }

        // Check diagonal left
        let minLeft = Math.min(r, c);

        for (let i = 0; i <= minLeft; i++) {
            if (board[r - i][c - i])
                return false;
        }

        // Check diagonal right      
        let minRight = Math.min(r, n - c - 1);
        for (let i = 0; i <= minRight; i++) {
            if (board[r - i][c + i])
                return false;
        }

        return true;
    }

    return helper(0, 0);

}

queens(5)
