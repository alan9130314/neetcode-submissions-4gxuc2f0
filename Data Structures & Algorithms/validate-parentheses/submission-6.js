class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let result = false;
        const left = {
            "{": "}",
            "(": ")",
            "[": "]",
        };
        const right = {
            "}": "{",
            ")": "(",
            "]": "[",
        };
        // const left = {
        //     "{": "{",
        //     "(": "(",
        //     "[": "[",
        // };
        // const right = {
        //     "}": "}",
        //     ")": ")",
        //     "]": "]",
        // };
        let pairArr = [];
        for (let i = 0; i < s.length; i++) {
            if (left[s[i]]) {
                console.log("left");
                pairArr.push(s[i]);
            } else if (right[s[i]] && pairArr[pairArr.length - 1] === right[s[i]]) {
                console.log("right");
                pairArr.pop();
            } else {
                pairArr.push(s[i]);
            }

            console.log("pairArr:", pairArr);
            if (pairArr.length === 0) {
                result = true;
            } else {
                result = false;
            }
        }
        return result;
    }
}
