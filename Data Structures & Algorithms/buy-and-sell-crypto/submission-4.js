class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0
        let r = 1
        let maxP = 0
        while (r < prices.length) {
            console.log(l, r)

            if (prices[l] < prices[r]) {
                let profit = prices[r] - prices[l]
                maxP = Math.max(maxP, profit)
            } else {
                l++
                r = l
            }
            r++
        }
        return maxP

    }
}
