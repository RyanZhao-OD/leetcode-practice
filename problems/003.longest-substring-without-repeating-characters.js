/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * Given a string s, find the length of the longest substring without repeating characters.
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // let substring = '';
    let res = 0;
    let left = 0;
    let right = 0;
    let set = new Set();
    while (right < s.length) {
        if (!set.has(s[right])) {
            set.add(s[right]);
            if (res < set.size) {
                res = set.size;
                // substring = Array.from(set).join('');
            }
            right++;
        } else {
            set.delete(s[left]);
            left++;
        }
    }
    return res;
    // return [res, substring];
};

console.log(lengthOfLongestSubstring('abcabcbb'));