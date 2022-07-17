/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    //Add a pointer to start of node
    let ptr = 0;

    // push to removal value to end of array
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[ptr] = nums[i];
            ptr++
        }
    }

    return ptr
};