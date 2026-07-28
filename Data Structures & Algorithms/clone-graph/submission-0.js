/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
            // 空圖沒有起始節點
    if (node === null) {
        return null;
    }

    // 原節點物件 → 複製節點物件
    const oldToNew = new Map();

    /**
     * dfs(originalNode)
     * 回傳 originalNode 對應的複製節點
     */
    function dfs(originalNode) {
        // 已經複製過，直接回傳同一個複製節點
        if (oldToNew.has(originalNode)) {
            return oldToNew.get(originalNode);
        }

        // 建立目前節點的複製品
        const copy = new Node(originalNode.val);

        // 必須先記錄，再遞迴處理鄰居
        oldToNew.set(originalNode, copy);

        // 複製目前節點與所有鄰居之間的連線
        for (const neighbor of originalNode.neighbors) {
            const clonedNeighbor = dfs(neighbor);
            copy.neighbors.push(clonedNeighbor);
        }

        return copy;
    }

    // 回傳複製圖的起始節點
    return dfs(node);
    }
}
