class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        console.log(s.length)
        let newS = ''

        for (let c of s) {
            if (c.charCodeAt() >= 48 && c.charCodeAt() <= 57 || c.charCodeAt() >= 65 && c.charCodeAt() <= 90 || c.charCodeAt() >= 97 && c.charCodeAt() <= 122) {
                console.log(c, c.charCodeAt())
                newS += c.toLowerCase()
            }
        }
        console.log(newS, newS.length)
        let isEven = newS % 2 === 0
        console.log('isEven', isEven)
        let half = newS.length / 2
        console.log('half', half)
        for (let i = 0; i < half; i++) {
            console.log(i, newS[i], Number((half * 2) - i - 1), newS[Number((half * 2) - i - 1)])
            if (newS[i] !== newS[Number((half * 2) - i - 1)]) {
                return false
            }
        }
        return true
    }
}
