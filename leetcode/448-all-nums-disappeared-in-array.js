//https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
// https://www.youtube.com/watch?v=JfinxytTYFQ&t=237s&ab_channel=KunalKushwaha
// Refer 41-FirstMissingPositive.js for details
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let res = [];
    for (let i = 0; i < nums.length; i++) {

        while (nums[i] !== i + 1) {

            if (nums[i] <= 0) break;
            if (nums[i] > nums.length) break;

            if (nums[i] === nums[nums[i] - 1]) break;

            [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != i + 1) res.push(i + 1);
    }

    return res;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers([1, 1]));
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1, 5, 6]));