class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let sortStrs = {}
        strs.forEach((item, index) => {
            let tempStr = item.split('').sort().join('')
            if (!sortStrs[tempStr]) {
                sortStrs[tempStr] = []
            }
            sortStrs[tempStr].push(strs[index])
        })
        console.log(Object.values(sortStrs))
        return Object.values(sortStrs)
    }
}
