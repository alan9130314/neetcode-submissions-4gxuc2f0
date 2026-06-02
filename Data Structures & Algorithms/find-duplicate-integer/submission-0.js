class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        // 🐢 第一階段：尋找快慢指針的相遇點
        let slow = nums[0];
        let fast = nums[nums[0]];

        while (slow !== fast) {
            slow = nums[slow];
            fast = nums[nums[fast]];
        }

        // 🐇 第二階段：將 fast 放回起點索引 0，兩者同步前進
        fast = 0;

        // 🏁 再次相遇點即為重複的數字
        while (slow !== fast) {
            slow = nums[slow];
            fast = nums[fast];
        }
        return slow;
    }
}
