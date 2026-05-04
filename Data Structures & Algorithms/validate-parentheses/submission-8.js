class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const closeToOpen = {
            "}": "{",
            ")": "(",
            "]": "[",
        };
        let stack = [];
        for (let i = 0; i < s.length; i++) {
            if (!closeToOpen[s[i]]) {
                stack.push(s[i]);
            } else {
                if (stack.length > 0 && stack[stack.length - 1] === closeToOpen[s[i]]) {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }
        return stack.length === 0
    }
}
