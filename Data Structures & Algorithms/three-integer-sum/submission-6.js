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
            if (nums[i] > 0) break
            if (i > 0 && nums[i] === nums[i - 1]) continue; //去重

            let l = i + 1
            let r = nums.length - 1
            while (l < r) {
                let sum = Number(nums[i]) + Number(nums[l]) + Number(nums[r])
                if (sum === 0) {
                    console.log('psh')
                    res.push([nums[i], nums[l], nums[r]])
                    // 去重 (l, r)
                    while (l < r && nums[l] === nums[l + 1]) l++
                    while (l < r && nums[r] === nums[r - 1]) r--
                    l++
                    r--
                } else if (sum < 0) {
                    l++
                } else {
                    r--
                }

            }
        }
        return res;
    }
}