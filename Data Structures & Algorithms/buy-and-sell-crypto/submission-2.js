class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minP = prices[0]
        let maxP = 0
        let profit = 0
        for (let i = 0; i < prices.length; i++) {
            minP = Math.min(prices[i], minP)
            for (let j = i + 1; j < prices.length; j++) {
                maxP = prices[j]
                if (prices[j] > prices[i]) {
                    profit = Math.max(profit, maxP - minP)
                }

                console.log(i, j, '|', prices[i], prices[j], '|', maxP, minP, '|', profit)
            }
        }
        if (minP > maxP) return 0
        return profit
    }
}
