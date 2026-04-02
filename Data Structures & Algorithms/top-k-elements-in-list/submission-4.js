class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const result = []
        const hash = {}
        for (let num of nums) {
            hash[num] = (hash[num] || 1) + 1;
        }
        console.log(hash)
        for (let [i, j] of Object.entries(hash)) {
            result.push([i, j])
        }
        result.sort((a, b) => b[1] - a[1])

        return result.slice(0, k).map((pair) => pair[0]);
    }
}
