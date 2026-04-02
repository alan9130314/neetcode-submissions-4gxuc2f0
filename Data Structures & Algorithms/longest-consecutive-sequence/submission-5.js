class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length < 1) return 0
        const min = Math.min(...nums)
        const max = Math.max(...nums)

        const hash = {}
        for (let i = 0; i < nums.length; i++) {
            if (hash[nums[i]]) {
                hash[nums[i]] = i
            } else {
                hash[nums[i]] = i
            }
        }

        let count = min
        let length = 1
        let maxLength = 1
        while (count <= max) {
            if (hash[count] !== undefined && hash[Number(count + 1)] !== undefined) {
                length++
                maxLength = Math.max(maxLength, length)
            } else {
                length = 1
            }
            count++
        }

        return maxLength
    }
}
