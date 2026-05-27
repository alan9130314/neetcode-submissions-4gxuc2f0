class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0;
        let right = nums.length - 1;
while (left < right) {
            let mid = Math.floor((right + left) / 2);
            
            if (nums[mid] > nums[right]) {
                left = mid + 1; // 最小值在右邊，且不可能是 mid
            } else {
                right = mid;    // 最小值在左邊，且 mid 有可能是答案
            }
        }
        return nums[left]; // 迴圈結束時，left === right，這就是最小值
    }
}
