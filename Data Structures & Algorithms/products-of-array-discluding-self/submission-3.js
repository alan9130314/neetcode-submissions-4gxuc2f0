class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length
        const res = new Array(n).fill(1)
        // 左乘積
        let left = 1
        for (let i = 0; i < n; i++) {
            res[i] *= left
            left *= nums[i]
        }

        // 右乘積
        let right = 1
        for (let i = n - 1; i >= 0; i--) {
            res[i] *= right
            right *= nums[i]
        }

        return res

    }
}
