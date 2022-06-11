export function numArr(num) {
    let ans = [];
    while (num > 0) {

        let r = num % 10

        ans.unshift(r)

        num = Math.floor(num / 10)

    }


    return ans;
}



