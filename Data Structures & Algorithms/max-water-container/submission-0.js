class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxAmount = 0
        let l = 0
        let r = heights.length - 1
        while (l < r) {
            // res = Math.max()
            let h = Math.min(heights[l], heights[r])
            let w = r - l
            let currAmount = h * w
            console.log(`l:${l}`, `r:${r}`, `h:${h}`, `w:${w}`, currAmount)
            maxAmount = Math.max(maxAmount, currAmount)
            if (heights[l] < heights[r]) {
                l++
            } else {
                r--
            }
        }
        return maxAmount
    }
}
