/**
 * Hard
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const dp = getMNarray(word1.length + 1, word2.length + 1);
  for (let i = 0; i < word1.length + 1; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j < word2.length + 1; j++) {
    dp[0][j] = j;
  }
  for (let i = 1; i < word1.length + 1; i++) {
    for (let j = 1; j < word2.length + 1; j++) {
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + (word1[i - 1] === word2[j - 1] ? 0 : 1)
      );
    }
  }
  return dp[word1.length][word2.length];
};
// dp = i (if j = 0)
//    = j (if i = 0)
//    = Math.min(dp[i - 1][j] + 1,  dp[i][j - 1] + 1 , dp[i - 1][j - 1] + word1[i] === word2[j] ? 0 : 1)

// word1: bbc
// word1: abcd

//   Ø a b c d
// Ø 0 1 2 3 4
// b 1 1 1 2 3
// b 2 2 1 2 3
// c 3 3 2 1 2
const getMNarray = (m, n, value = 0) => {
  const array = [];
  for (let i = 0; i < m; i++) {
    array.push([]);
    for (let j = 0; j < n; j++) {
      array[i].push(value);
    }
  }
  return array;
};

console.log(minDistance('horse', 'ros'));