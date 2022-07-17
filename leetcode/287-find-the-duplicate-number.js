/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] !== i + 1) {
            if (nums[i] === nums[nums[i] - 1]) return nums[i];
            [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
        }
    }
    return -1;
};

console.log(findDuplicate([1, 3, 4, 2, 2]));
console.log(findDuplicate([3, 1, 3, 4, 2]));