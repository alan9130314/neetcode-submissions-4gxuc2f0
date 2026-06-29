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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let count = 0;
        let result = null;

        function inorder(node) {
            if (!node || result !== null) return; // 如果找完了就提早結束

            // 1. 先往左邊走
            inorder(node.left);

            // 2. 訪問當前節點
            count++; // 每看一個節點，計數器就加 1
            if (count === k) {
                result = node.val;
                return;
            }

            // 3. 最後往右邊走
            inorder(node.right);
        }

        inorder(root);
        return result;
    }
}
