class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let newS = ''

        for (let c of s) {
            if (c.charCodeAt() >= 48 && c.charCodeAt() <= 57 || c.charCodeAt() >= 65 && c.charCodeAt() <= 90 || c.charCodeAt() >= 97 && c.charCodeAt() <= 122) {
                console.log(c, c.charCodeAt())
                newS += c.toLowerCase()
            }
        }
        let half = newS.length / 2
        for (let i = 0; i < half; i++) {
            if (newS[i] !== newS[Number((half * 2) - i - 1)]) {
                return false
            }
        }
        return true
    }
}
