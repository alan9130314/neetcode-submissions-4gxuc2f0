class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const result = []
        const hash = {}
        for (let i = 0; i < nums.length; i++) {
            if (hash[nums[i]]) {
                hash[nums[i]] += 1
            } else {
                hash[nums[i]] = 1
            }
        }
        for (let [i, j] of Object.entries(hash)) {
            result.push([i, j])
        }
        console.log(result)



        result.sort((a, b) => b[1] - a[1])

        return result.slice(0, k).map((pair) => pair[0]);
    }
}
