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
     * @return {boolean}
     */
    isBalanced(root) {
        let dfs = (node) => {
            if (node === null) return 0;
            let leftDepth = dfs(node.left);
            let rightDepth = dfs(node.right);
            if (leftDepth === -1 || rightDepth === -1) return -1;
            if (Math.abs(leftDepth - rightDepth) > 1) return -1;

            return Math.max(leftDepth, rightDepth) + 1;
        };
        return dfs(root) !== -1;
    }
}
