class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length
        const res = new Array(n).fill(1)
        const left = new Array(n).fill(1)
        const right = new Array(n).fill(1)

        // 左乘積
        for (let i = 0; i < n; i++) {
            let product = 1;
            for (let j = 0; j < n; j++) {
                if (j !== i) {
                    product *= nums[j]
                    res[i] = product
                }
            }

        }

        return res

    }
}
