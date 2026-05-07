class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for (const item of tokens) {
            switch (item) {
                case "+":
                    stack.push(stack.pop() + stack.pop());
                    break;
                case "-": {
                    const a = stack.pop();
                    const b = stack.pop();
                    stack.push(b - a);
                    break;
                }
                case "*":
                    stack.push(stack.pop() * stack.pop());
                    break;
                case "/": {
                    const a = stack.pop();
                    const b = stack.pop();
                    stack.push(Math.trunc(b / a));
                    break;
                }
                default:
                    stack.push(Number(item));
                    break;
            }
        }
        return stack.pop();
    }
}
