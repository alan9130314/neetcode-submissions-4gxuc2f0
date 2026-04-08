
class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const len1 = s1.length;
        const len2 = s2.length;

        if (len1 > len2) return false;

        // 建立 26 個字母的頻率表 (a-z)
        const s1Count = new Array(26).fill(0);
        const s2Count = new Array(26).fill(0);

        // 取得字母索引的輔助函式
        const getIdx = (char) => char.charCodeAt(0) - 'a'.charCodeAt(0);

        // 1. 初始化：計算 s1 和 s2 第一個視窗的頻率
        for (let i = 0; i < len1; i++) {
            s1Count[getIdx(s1[i])]++;
            s2Count[getIdx(s2[i])]++;
        }

        // 比對兩個陣列是否完全相同的函式
        const isMatch = (arr1, arr2) => {
            for (let i = 0; i < 26; i++) {
                if (arr1[i] !== arr2[i]) return false;
            }
            return true;
        };

        // 2. 開始滑動視窗
        for (let i = 0; i < len2 - len1; i++) {
            if (isMatch(s1Count, s2Count)) return true;

            // 移動視窗：左邊出一個，右邊進一個
            s2Count[getIdx(s2[i])]--;          // 舊的左側字元出窗
            s2Count[getIdx(s2[i + len1])]++;   // 新的右側字元進窗
        }

        // 3. 檢查最後一個視窗位置
        return isMatch(s1Count, s2Count);
    }
}
