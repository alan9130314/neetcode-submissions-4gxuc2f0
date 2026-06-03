/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         val = val;
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
    diameterOfBinaryTree(root) {
        let maxDepth = 0;
        let dfs = (node) => {
            if (node === null) return 0;
            let leftDepth = dfs(node.left);
            let rightDepth = dfs(node.right);
            maxDepth = Math.max(maxDepth, leftDepth + rightDepth);
            return Math.max(leftDepth, rightDepth) + 1;
        };
        dfs(root);
        return maxDepth;
    }
}
