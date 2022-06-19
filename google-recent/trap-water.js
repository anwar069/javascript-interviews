// https://leetcode.com/problems/trapping-rain-water/
// https://techdevguide.withgoogle.com/resources/former-interview-question-volume-of-lakes/#!


// 1. Dynamic programming 
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    // Use array to store left and right bound
    let leftMax = [], rightMax = [];
    let water = 0;

    //find left max for each element
    for (let i = 0; i < height.length; i++) {
        leftMax[i] = Math.max(height[i], leftMax[i - 1] || 0)
    }

    //find right max for each element
    for (let i = height.length - 1; i >= 0; i--) {
        rightMax[i] = Math.max(height[i], rightMax[i + 1] || 0)
    }

    // Water = minimum of left and right max - height
    for (let i = 0; i < height.length; i++) {
        water += Math.min(leftMax[i], rightMax[i]) - height[i]
    }

    return water;
};


console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));