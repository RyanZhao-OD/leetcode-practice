/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  const firstStr = strs[0];
  if (!strs.length) {
    return '';
  }
  let res = [];
  for (let i = 0; i < firstStr.length; i++) {
    const char = firstStr[i];
    for (let j = 1; j < strs.length; j++) {
      const str = strs[j];
      if (i >= strs[j].length || str[i] !== char) {
        return res.join('');
      }
    }
    res.push(char);
  }
  return res.join('');
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));