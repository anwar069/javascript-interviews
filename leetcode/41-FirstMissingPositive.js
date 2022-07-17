// https://leetcode.com/problems/first-missing-positive/
// https://www.youtube.com/watch?v=JfinxytTYFQ&t=237s&ab_channel=KunalKushwaha

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] !== i + 1) {
            // Break if index is out of bounds
            if (nums[i] <= 0) break;
            if (nums[i] > nums.length) break;

            // Break if both value is same
            if (nums[i] === nums[nums[i] - 1]) break;

            // Swap
            [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
        }
    }
    console.log(nums);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) return i + 1;
    }

    return nums.length + 1;
};


console.log(firstMissingPositive([3, 4, -1, 1]));
console.log(firstMissingPositive([1, 2, 0]));
console.log(firstMissingPositive([7, 8, 9, 11, 12]));