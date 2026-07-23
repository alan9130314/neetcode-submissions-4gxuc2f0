class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = [];

        backtrack("", 0, 0);

        return res;
        function backtrack(path, left, right) {
            if (left === n && right === n) {
                res.push(path);
                return;
            }

            if (left < n) {
                backtrack(path + "(", left + 1, right);
            }

            if (right < left) {
                backtrack(path + ")", left, right + 1);
            }
        }
    }
}
