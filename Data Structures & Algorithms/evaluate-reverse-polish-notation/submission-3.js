class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let cal = [];
        let result;

        let i = 0;
        while (i < tokens.length) {
            cal.push(tokens[i]);
            console.log(tokens, cal, i);
            // console.log(cal, result);

            if (isNaN(Number(tokens[i]))) {
                result = Math.trunc(
                    eval(`${cal[cal.length - 3]} ${cal[cal.length - 1]} ${cal[cal.length - 2]} `),
                );
                console.log("result ", result);
                tokens.splice(cal.length - 3, 3, result);
                cal = [];
                i = 0;
            } else {
                i++;
            }
        }
        return result ?? cal[0];
    }
}
