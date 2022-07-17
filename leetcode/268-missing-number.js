/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] !== i) {
            // Break if index is out of bounds
            if (nums[i] > nums.length) break;

            // Break if index is out of bounds
            if (nums[i] < 0) break;

            // Break if both value is same
            if (nums[i] === nums[nums[i]]) break;

            // Swap
            [nums[nums[i]], nums[i]] = [nums[i], nums[nums[i]]];
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i) return i;
    }

    return nums.length;
};


console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
console.log(missingNumber([1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));