/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        if (root === null) return [];
        const result = [];
        const queue = [root];
        while (queue.length) {
            let levelSize = queue.length;
            const currentLevel = [];
            for (let i = 0; i < levelSize; i++) {
                const node = queue.shift(); // 成功取出

                currentLevel.push(node.val);

                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right); // 成功推入
            }
            result.push(currentLevel.pop());
        }
        return result;
    }
}
