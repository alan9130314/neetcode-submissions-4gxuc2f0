class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort((a, b) => a - b);
        const res = [];
        const path = [];
        function backtrack(start, sum) {
            if (sum === target) {
                res.push([...path]);
                return;
            }
            for (let i = start; i < candidates.length; i++) {
                if (i > start && candidates[i] === candidates[i - 1]) {
                    continue;
                }
                if (sum + candidates[i] > target) {
                    break;
                }
                path.push(candidates[i]);
                backtrack(i + 1, sum + candidates[i]);
                path.pop();
            }
        }
        backtrack(0, 0);
        return res;
    }
}
