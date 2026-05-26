class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1;
        let right = Math.max(...piles);
        let res = right
        while (left <= right) {
            let mid = Math.floor((left + right) / 2); // 嘗試的中間速度
            // 3. 計算用這個速度吃完所有香蕉需要多少小時
            let hoursSpent = 0;
            for (let pile of piles) {
                hoursSpent += Math.ceil(pile / mid);
            }

            // 4. 根據花費的時間調整搜尋範圍
            if (hoursSpent <= h) {
                res = mid
                // 時間夠用，代表 mid 速度可行！
                // 我們想找「更小」的速度，所以把右邊界拉過來
                right = mid-1;
            } else {
                // 時間不夠用，代表 mid 太慢了！
                // 必須加快速度，所以把左邊界往右推
                left = mid + 1;
            }
        }
        return res
    }
}
