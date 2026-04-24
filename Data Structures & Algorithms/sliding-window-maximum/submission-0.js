class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let window = [];
        // let l = 0
        // let r = 0
        for (let i = 0; i < nums.length - k + 1; i++) {
            let curr = [];
            curr = nums.slice(i, i + k);
            let l = 0;
            let maxNum = nums[i];

            while (l < k) {
                maxNum = Math.max(maxNum, curr[l]);
                l++;
            }
            window.push(maxNum);
        }
        return window;
    }
}
