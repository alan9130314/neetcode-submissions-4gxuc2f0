class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false
        let mapS = new Map()
        let mapT = new Map()
        for (let i = 0; i < s.length; i++) {
            if (!mapS.get(s[i])) {
                mapS.set(s[i], 1)
            } else {
                mapS.set(s[i], mapS.get(s[i]) + 1)
            }
            if (!mapT.get(t[i])) {
                mapT.set(t[i], 1)
            } else {
                mapT.set(t[i], mapT.get(t[i]) + 1)
            }

        }
        for (let [i, j] of mapS) {
            console.log(i, j)
            if (!mapT.has(i) || mapT.get(i) !== mapS.get(i)) return false
        }
        return true
    }
}
