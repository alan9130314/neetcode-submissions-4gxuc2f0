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
     * @return {number}
     */
    maxDepth(root) {
        if (root === null) return 0;
        let queue = [root];
        let depth = 0;
        while (queue.length > 0) {
            let levelSize = queue.length;
            depth++;
            for (let i = 0; i < levelSize; i++) {
                let curr = queue.shift();
                if (curr.left !== null) {
                    queue.push(curr.left);
                }
                if (curr.right !== null) {
                    queue.push(curr.right);
                }
            }
        }
        return depth;
    }
}
