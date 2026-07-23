class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
  const dp = [[""]];

  for (let pairs = 1; pairs <= n; pairs++) {
    dp[pairs] = [];

    for (let leftPairs = 0; leftPairs < pairs; leftPairs++) {
      const rightPairs = pairs - 1 - leftPairs;

      for (const leftPart of dp[leftPairs]) {
        for (const rightPart of dp[rightPairs]) {
          dp[pairs].push(`(${leftPart})${rightPart}`);
        }
      }
    }
  }

  return dp[n];
    }
}
