class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let newS = ''

        for (let c of s) {
            if (c >= '0' && c <= '9' || c >= 'A' && c <= 'Z' || c >= 'a' && c <= 'z') {
                newS += c.toLocaleLowerCase()
            }
        }
        console.log(newS)
        // let half = newS.length / 2
        // for (let i = 0; i < half; i++) {
        //     if (newS[i] !== newS[Number((half * 2) - i - 1)]) {
        //         return false
        //     }
        // }
        let left = 0, right = newS.length - 1
        console.log(left, right)
        while (left < right) {
            if (newS[left] !== newS[right]) {
                console.log(false, newS[left], newS[right])
                return false
            }
            left++
            right--
        }
        return true
    }
}
