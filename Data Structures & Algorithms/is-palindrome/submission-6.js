class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkAscii(c) {
        return (c >= '0' && c <= '9' || c >= 'A' && c <= 'Z' || c >= 'a' && c <= 'z')
    }
    isPalindrome(s) {
        let left = 0, right = s.length - 1
        while (left < right) {
            while (left < right && !this.checkAscii(s[left])) {
                left++
            }
            while (right > left && !this.checkAscii(s[right])) {
                right--
            }
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                console.log(false, s[left], s[right])
                return false
            }
            left++
            right--
        }
        return true
    }
}
