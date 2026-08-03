class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        // 一開始每個節點都是自己的代表
        const parent = Array.from({ length: n }, (_, i) => i);

        // 一開始每個節點各自是一個連通區塊
        let count = n;

        // 找出 node 所屬集合的根節點
        const find = (node) => {
            while (parent[node] !== node) {
                node = parent[node];
            }

            return node;
        };

        // 合併 a、b 所屬的兩個集合
        const union = (a, b) => {
            const rootA = find(a);
            const rootB = find(b);

            // 根相同，代表原本已經在同一個連通區塊
            if (rootA === rootB) {
                return;
            }

            // 讓其中一個集合的根指向另一個集合的根
            parent[rootA] = rootB;

            // 兩個區塊合併成一個，所以數量減一
            count--;
        };

        // 每條邊都表示兩個節點必須屬於同一個集合
        for (const [a, b] of edges) {
            union(a, b);
        }

        return count;
    }
}
