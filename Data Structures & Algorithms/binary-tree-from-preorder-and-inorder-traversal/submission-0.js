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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        const inMap = new Map();
    for (let i = 0; i < inorder.length; i++) {
        inMap.set(inorder[i], i);
    }

function helper(preStart, preEnd, inStart, inEnd) {
        // 終止條件：當指針交錯，代表目前的子樹已經沒有節點了
        if (preStart > preEnd || inStart > inEnd) return null;

        // 1. 前序遍歷的第一個元素就是當前子樹的根節點值
        const rootVal = preorder[preStart];
        const root = new TreeNode(rootVal);

        // 2. 找出這個根節點在 inorder 中的索引位置
        const inRootIndex = inMap.get(rootVal);
        
        // 3. 計算左子樹的節點數量
        const leftTreeSize = inRootIndex - inStart;

        // 4. 遞迴建立左子樹
        root.left = helper(
            preStart + 1, 
            preStart + leftTreeSize, 
            inStart, 
            inRootIndex - 1
        );

        // 5. 遞迴建立右子樹
        root.right = helper(
            preStart + leftTreeSize + 1, 
            preEnd, 
            inRootIndex + 1, 
            inEnd
        );

        return root;
    }
    return helper(0, preorder.length - 1, 0, inorder.length - 1);
    }
}
