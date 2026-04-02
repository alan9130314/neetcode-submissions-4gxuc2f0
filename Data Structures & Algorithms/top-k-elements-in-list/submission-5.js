class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = Array.from({ length: nums.length + 1 }, () => [])
        const hash = {}
        for (let num of nums) {
            hash[num] = (hash[num] || 0) + 1;
        }
        for (let num in hash) {
            console.log(num)
            freq[hash[num]].push(Number(num))
        }
        const result = []
        for (let i = freq.length - 1; i > 0; i--) {
            for (let j of freq[i]) {
                result.push(j)
                if(result.length === k) {
                    return result
                }
            }
        }
    }
}
