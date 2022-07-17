function subsetSumDP(arr, sum) {
    let dp = new Array(arr.length + 1);
    for (let i = 0; i < sum + 1; i++) {
        dp[i] = [true, ... new Array(sum).fill(false)];
    }

    for (let i = 1; i < arr.length + 1; i++) {
        for (let j = 1; j < sum + 1; j++) {
            if (arr[i - 1] <= j) {
                dp[i][j] = dp[i][j - arr[i - 1]] || dp[i - 1][j];
            } else {
                dp[i][j] = dp[i - 1][j]
            }
        }
    }
    console.log(dp);

}


console.log(subsetSumDP([1, 2, 3, 4, 5], 5));