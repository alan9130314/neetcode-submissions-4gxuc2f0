class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        // 建立鄰接表。
        // graph[node] 會儲存所有與 node 相連的鄰居。
        const graph = Array.from({ length: n }, () => []);

        // 因為是無向圖，所以每條邊都要加入兩個方向。
        // 例如 [0, 1] 代表 0 可以走到 1，1 也可以走到 0。
        for (const [a, b] of edges) {
            graph[a].push(b);
            graph[b].push(a);
        }

        // 記錄已經拜訪過的節點，
        // 避免重複拜訪或在無向圖中來回遞迴。
        const visited = new Set();

        /**
         * 從 node 開始進行 DFS。
         * 執行結束後，與 node 位於同一個連通區塊的節點
         * 都會被加入 visited。
         */
        const dfs = (node) => {
            // 進入節點後，先標記為已拜訪。
            visited.add(node);

            // 查看目前節點的所有鄰居。
            for (const neighbor of graph[node]) {
                // 只繼續拜訪尚未走過的鄰居。
                if (!visited.has(neighbor)) {
                    dfs(neighbor);
                }
            }
        };

        // 記錄連通區塊的數量。
        let count = 0;

        // 每個節點都要檢查，
        // 因為圖可能由多個互不相連的區塊組成。
        for (let node = 0; node < n; node++) {
            // 遇到尚未拜訪的節點，
            // 代表發現了一個新的連通區塊。
            if (!visited.has(node)) {
                count++;

                // 從這個節點開始 DFS，
                // 將同一個連通區塊的所有節點標記為已拜訪。
                dfs(node);
            }
        }

        // 回傳連通區塊總數。
        return count;
    }
}
