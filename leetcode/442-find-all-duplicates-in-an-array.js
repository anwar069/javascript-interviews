/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicates = function (nums) {
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] !== i + 1) {
            if (nums[i] === nums[nums[i] - 1]) {
                break;
            }
            else
                [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) res.push(nums[i]);
    }
    return res;
};

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDuplicates([1, 1, 2]));
console.log(findDuplicates([1]));