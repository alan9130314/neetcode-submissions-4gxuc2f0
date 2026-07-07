class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = [[]];

        for (const num of nums) {
            const size = res.length;

            for (let i = 0; i < size; i++) {
                const newSubset = [...res[i], num];
                res.push(newSubset);
            }
        }

        return res;
    }
}
