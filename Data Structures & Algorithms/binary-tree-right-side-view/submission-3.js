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
            for (let i = 0; i < levelSize; i++) {
                const currentNode = queue.shift(); // 成功取出

                if (i === levelSize - 1) {
                    result.push(currentNode.val);
                }

                if (currentNode.left) queue.push(currentNode.left);
                if (currentNode.right) queue.push(currentNode.right); // 成功推入
            }
        }
        return result;
    }
}
