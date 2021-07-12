/**
 * https://leetcode.com/problems/longest-palindromic-substring/
 * Given a string s, return the longest palindromic substring in s.
 * @param {string} s
 * @return {string}
 */

// dynamic programming
// dp[i, j]表示字符串区间 [i, j]是否为回文串, i <= j
// dp[i, j]
//     = true (if i == j) only one char, must be a palindromic substring
//     = s[i] == s[j]   (if j = i + 1) 2 chars, is a palindromic substring if they equal
//     = s[i] == s[j] && dp[i + 1][j - 1]  (if j > i + 1)

const getMNarray = (m, n, value = false) => {
    const array = [];
    for (let i = 0; i < m; i++) {
        array.push([]);
        for (let j = 0; j < n; j++) {
            array[i].push(value);
        }
    }
    return array;
};

var longestPalindrome = function(s) {
    if (!s.length) {
        return '';
    }
    let len = 1;
    let left = 0;
    const dp = getMNarray(s.length, s.length, false);
    for (let i = 0; i < s.length; ++i) {
        dp[i][i] = true;
        for (let j = 0; j < i; ++j) {
            // (left equals right) && ((has only 2 chars) Or (subString is still Palindrome)))
            dp[j][i] = (s[i] === s[j] && (i - j < 2 || dp[j + 1][i - 1]));
            if (dp[j][i] && len < i - j + 1) {
                len = i - j + 1;
                left = j;
            }
        }
    }
    console.log(dp);
    return s.slice(left, len + left);
};

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
