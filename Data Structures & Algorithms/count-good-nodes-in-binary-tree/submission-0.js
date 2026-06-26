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
    goodNodes(root) {
        let count = 0;

        function dfs(node, maxSoFar) {
            if (!node) return;

            // 如果目前節點的值大於等於路徑最大值，就是好節點
            if (node.val >= maxSoFar) {
                count++;
                maxSoFar = node.val; // 更新路徑最大值
            }

            // 帶著更新後的 maxSoFar 繼續往左右子樹搜尋
            dfs(node.left, maxSoFar);
            dfs(node.right, maxSoFar);
        }

        // 從根節點開始走訪，初始的最大值就是根節點本身的值
        dfs(root, root.val);
        return count;
    }
}
