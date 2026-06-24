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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        // 1. 如果 p 和 q 都大於 root 的值 ➡️ 往右子樹找
        if (p.val > root.val && q.val > root.val) {
            return this.lowestCommonAncestor(root.right, p, q);
        }

        // 2. 如果 p 和 q 都小於 root 的值 ➡️ 往左子樹找
        if (p.val < root.val && q.val < root.val) {
            return this.lowestCommonAncestor(root.left, p, q);
        }

        // 3. 一左一右，或 root 恰好是 p 或 q ➡️ root 就是 LCA
        return root;
    }
}
