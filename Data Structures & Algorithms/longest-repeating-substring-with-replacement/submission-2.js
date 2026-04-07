class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // s = ABBAB
        let mp = {}
        let res = 0
        let l = 0,
            maxf = 0

        // 2 pointer
        for (let r = 0; r < s.length; r++) {
            mp[[s[r]]] = (mp[s[r]] || 0) + 1
            maxf = Math.max(maxf, mp[s[r]])
            // sliding window
            while (r - l + 1 - maxf > k) {
                mp[s[l]] = mp[s[l]] - 1
                l++
            }
            res = Math.max(res, r - l + 1)
        }
        console.log(mp, maxf)
        return res;
    }
}
