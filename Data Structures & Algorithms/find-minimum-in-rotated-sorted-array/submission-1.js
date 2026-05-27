class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0;
        let right = nums.length - 1;
        let minNum = Infinity;
        while (left <= right) {
            let mid = Math.floor((right + left) / 2);
            minNum = Math.min(minNum, nums[mid]);
            if (nums[mid] > nums[right]) {
                left = mid + 1;
            } else if (nums[mid] < nums[right]) {
                right = mid;
            } else if (left === right) {
                return minNum;
            }
        }
    }
}
