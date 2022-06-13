// https://leetcode.com/problems/number-of-islands/

var numIslands = function (grid) {
    let countIsland = 0;

    let colLength = grid[0].length;
    let rowLength = grid.length;

    for (let i = 0; i < rowLength; i++) {
        for (let j = 0; j < colLength; j++) {
            if (grid[i][j] == 1) {
                countIsland++;
                markTerritory(i, j)
            }
        }
    }
    return countIsland;

    function markTerritory(i, j) {
        if (i < 0 || j < 0 || i >= rowLength || j >= colLength) return;
        if (grid[i][j] == 0 || grid[i][j] == 2) return;

        grid[i][j] = 2;
        markTerritory(i + 1, j);
        markTerritory(i - 1, j);
        markTerritory(i, j + 1);
        markTerritory(i, j - 1);
    }

};

console.log(numIslands([
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1]]));