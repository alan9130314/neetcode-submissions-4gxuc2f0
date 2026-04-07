class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let map = {}
        let maxLength = 0
        for (let i = 0; i < s.length; i++) {
            for (let j = i; j < s.length; j++) {
                console.log(s[j])
                if (map[s[j]] >= 1) {
                    maxLength = Math.max(Object.keys(map).length, maxLength)
                    map = {}
                    break
                } else {
                    map[s[j]] = 1
                    maxLength = Math.max(Object.keys(map).length, maxLength)
                }
                console.log('- - -')
            }
        }
        console.log(map)
        return maxLength
    }
}
