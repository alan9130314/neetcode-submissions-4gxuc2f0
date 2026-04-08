class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let res = false
        let r = 0
        let mp1 = {}
        for (let i = 0; i < s1.length; i++) {
            mp1[s1[i]] = (mp1[s1[i]] || 0) + 1
        }
        // console.log(mp1)
        for (let l = 0; l < s2.length; l++) {
            let tempMp1 = { ...mp1 }
            // console.log(l, s2[l], tempMp1)
            let leftC = s1.length
            if (mp1[s2[l]]) {
                // console.log('- - -')
                r = l
                while (r - l + 1 <= s1.length) {
                    // console.log('while s2[r]', s2[r], r - l + 1, tempMp1)
                    if (tempMp1[s2[r]] && tempMp1[s2[r]] > 0) {
                        tempMp1[s2[r]] = tempMp1[s2[r]] - 1
                        leftC--
                    } else {
                        res = false
                    }
                    r++
                }
                // console.log('leftC', leftC)
            }
            if (leftC === 0) {
                res = true
                break
            }
        }
        return res
    }
}
