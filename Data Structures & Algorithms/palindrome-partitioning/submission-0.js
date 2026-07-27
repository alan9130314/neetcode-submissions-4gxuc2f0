class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const res = [];
        const path = [];

        function backtrack(start) {
            // 成功條件
            if (start === s.length) {
                res.push([...path]);
                return;
            }
            // 列舉 end
            for (let end = start; end < s.length; end++) {
                // 檢查是否回文
                if (!isPalindrome(start, end)) {
                    continue;
                }
                // 做選擇
                const substring = s.slice(start, end + 1);
                path.push(substring);
                // 遞迴
                backtrack(end + 1);
                // 撤銷選擇
                path.pop();
            }
        }

        function isPalindrome(left, right) {
            // 左右往中間比較
            while (left < right) {
                if (s[left] !== s[right]) {
                    return false;
                }

                left++;
                right--;
            }
            return true;
        }

        backtrack(0);
        return res;
    }
}
