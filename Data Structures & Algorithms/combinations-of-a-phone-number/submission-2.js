class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if (digits.length === 0) {
            return [];
        }
        const phoneMap = {
            2: "abc",
            3: "def",
            4: "ghi",
            5: "jkl",
            6: "mno",
            7: "pqrs",
            8: "tuv",
            9: "wxyz",
        };

        const res = [];
        const path = [];

        function backtrack(index) {
            // 所有按鍵都已經選擇一個字母
            if (index === digits.length) {
                res.push(path.join(""));
                return;
            }

            // 取得目前按鍵對應的所有字母
            const letters = phoneMap[digits[index]];

            // 逐一嘗試目前按鍵的每個字母
            for (const letter of letters) {
                path.push(letter);
                backtrack(index + 1);
                path.pop();
            }
        }

        backtrack(0);

        return res;
    }
}
