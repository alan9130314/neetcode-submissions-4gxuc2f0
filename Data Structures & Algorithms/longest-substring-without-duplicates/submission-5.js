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
                if (map[s[j]] >= 1) {
                    maxLength = Math.max(Object.keys(map).length, maxLength)
                    map = {}
                    break
                } else {
                    map[s[j]] = 1
                    maxLength = Math.max(Object.keys(map).length, maxLength)
                }
            }
        }
        return maxLength
    }
}
