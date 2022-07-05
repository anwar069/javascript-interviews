function getAllBinary(n,) {
    let arr = []; res = [];
    function helper(n, i) {
        if (n == i) {
            // console.log(arr,n,i)
            res.push([...arr]);
            return;
        }
        arr[i] = 0;
        helper(n, i + 1);

        arr[i] = 1;
        helper(n, i + 1);
    }
    helper(n, 0);
    return res;
}

console.log(getAllBinary(3));