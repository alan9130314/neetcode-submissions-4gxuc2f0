class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if (strs.length === 1) return [strs]
        let sortStrs = new Map()
        let result = []
        strs.forEach((item, index) => {
            let tempStr = item.split('').sort().join('')
            if (!sortStrs.has(tempStr)) {
                sortStrs.set(tempStr, [strs[index]])
            } else {
                sortStrs.set(tempStr, [...sortStrs.get(tempStr), strs[index]])

            }
        })
        console.log(strs, sortStrs)
        for (let [i, j] of sortStrs) {
            console.log(i, j)
            result.push(j)
        }
        console.log(result)
        return result
    }
}
