class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let sortStrs = {}
        strs.forEach((item, index) => {
            let countStr = Array.from({ length: 26 }, () => 0)
            for (let char of item) {
                countStr[char.charCodeAt() - 'a'.charCodeAt()] += 1
            }
            const key = countStr.join(',')
            if (!sortStrs[key]) {
                sortStrs[key] = []
            }
            sortStrs[key].push(strs[index])
        })
        return Object.values(sortStrs)
    }
}
