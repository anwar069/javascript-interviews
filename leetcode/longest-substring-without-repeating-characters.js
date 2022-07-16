// https://leetcode.com/problems/longest-substring-without-repeating-characters
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let map = {}, count = 0, max = 0;

    // Use 2 pointers to keep track of the start and end of the subset of the string
    // i is the start pointer, j is the end pointer
    for (let i = 0, j = 0; j < s.length; j++) {
        let c = s[j];

        // If the character is already in the map, then we need to move the start pointer to the right of the character
        if (map[c] && map[c] - 1 >= i) {
            // Subtract the start pointer from the end pointer to get the length of the current substring
            count -= (map[c] - i);
            // Move the start pointer to the right of the character
            i = map[c];
        }
        // Store the index of the next character in the map
        // This will be used to determine the start of the next subset
        // If the character is already in the map, we need to update the index to the next character
        map[c] = j + 1;
        count++;
        if (max < count) max = count;
    }
    return max;
};

lengthOfLongestSubstring("bbtablud")