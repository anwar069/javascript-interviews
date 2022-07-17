
// https://leetcode.com/problems/set-mismatch/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] !== i + 1) {
            if (nums[i] === nums[nums[i] - 1]) break;
            [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            return [nums[i], i + 1]
        }
    }
    return [];
};

console.log(findErrorNums([1, 2, 2, 4]));
console.log(findErrorNums([1, 1]));
console.log(findErrorNums([8, 7, 3, 5, 3, 6, 1, 4]));