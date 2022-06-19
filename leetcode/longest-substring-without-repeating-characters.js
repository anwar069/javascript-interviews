// https://leetcode.com/problems/longest-substring-without-repeating-characters
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let map = {}, count = 0, max = 0;
    for (let i = 0, j = 0; j < s.length; j++) {
        let c = s[j];
        if (map[c] && map[c] - 1 >= i) {
            count -= (map[c] - i);
            i = map[c];
        }
        map[c] = j + 1;
        count++;
        if (max < count) max = count;
    }
    return max;
};

lengthOfLongestSubstring("bbtablud")