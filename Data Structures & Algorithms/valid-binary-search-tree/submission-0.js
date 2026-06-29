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
    isValidBST(root) {
        function validate(node, min, max) {
        // 1. 基礎情況：如果是空節點，回傳 true
        if (node === null) {
            return true;
        }
        
        // 2. 檢查目前節點的值是否符合範圍
        if (node.val <= min || node.val >= max) {
            return false;
        }
        
        // 3. 遞迴檢查左子樹與右子樹
        // 左子樹的上限變成 node.val
        // 右子樹的下限變成 node.val
        return validate(node.left, min, node.val) && validate(node.right, node.val, max);
    }
    
    // 呼叫輔助函式，傳入初始的邊界值
    return validate(root, -Infinity, Infinity);
    }

}
