class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map()
        let result = [-1, -1]
        for (let i = 0; i < nums.length; i++) {
            let diff = target - nums[i]
            // if (!map.has(nums[i])) {
            // }
            console.log('diff', diff)
            if (map.has(diff)) {
                result = [map.get(diff), i]
                break
            }
            map.set(nums[i], i)

        }
        console.log(map)
        // for (let [i, j] of map) {
        //     if (target - i === i && map.get(i).length > 1) {
        //         return [map.get(i)[0], map.get(i)[1]]
        //     } else if (map.get(target - i) && target - i !== i) {
        //         return [...map.get(i), ...map.get(target - i)]
        //     }
        // }


        return result
    }
}
