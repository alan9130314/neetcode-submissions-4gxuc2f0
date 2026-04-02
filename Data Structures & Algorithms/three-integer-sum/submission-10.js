class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        // [ -4, -1, -1, 0, 1, 2 ]
        console.log(nums)
        const res = [];
        for (let i = 0; i < nums.length; i++) {
            // 剪枝(去除不可能的case) if nums[i] > 0, nums[l] ≥ nums[i], nums[r] ≥ nums[i]
            if (nums[i] > 0) break
            if (i > 0 && nums[i] === nums[i - 1]) continue
            let l = i + 1
            let r = nums.length - 1
            while (l < r) {
                let sum = nums[i] + nums[l] + nums[r]
                // console.log(i, l, r, sum, nums[i], nums[l], nums[r], res)
                if (sum === 0) {
                    res.push([nums[i], nums[l], nums[r]])
                    l++
                    r--
                    while (nums[l] === nums[l - 1]) l++
                    while (nums[r] === nums[r + 1]) r--
                } else if (sum < 0) {
                    l++
                } else {
                    r--
                }
            }
            // console.log('- - -')
        }
        return res;
    }
}