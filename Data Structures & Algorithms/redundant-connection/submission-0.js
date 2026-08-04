class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        // edges 有 n 條邊，節點編號為 1～n
        const n = edges.length;

        // parent[i] 表示節點 i 目前的父節點
        // 一開始每個節點各自屬於不同集合，因此父節點是自己
        // 索引 0 不使用
        const parent = Array.from({ length: n + 1 }, (_, index) => index);

        // rank[i] 表示以節點 i 為根的樹，其高度等級
        // 用來避免合併後的樹變得太深
        const rank = new Array(n + 1).fill(0);

        /**
         * 找到 node 所屬集合的根節點
         */
        const find = (node) => {
            // 如果父節點不是自己，代表 node 還不是根節點
            if (parent[node] !== node) {
                // 遞迴尋找真正的根節點
                // 並將 node 直接指向根節點，進行路徑壓縮
                parent[node] = find(parent[node]);
            }

            return parent[node];
        };

        /**
         * 嘗試合併 a 和 b 所屬的集合
         *
         * 回傳 false：a、b 原本已經連通，加入這條邊會形成環
         * 回傳 true：成功合併兩個不同集合
         */
        const union = (a, b) => {
            const rootA = find(a);
            const rootB = find(b);

            // 根節點相同，代表 a 和 b 原本就在同一個集合
            // 此時加入 [a, b] 會形成環
            if (rootA === rootB) {
                return false;
            }

            // 將較矮的樹接到較高的樹下面，避免樹變得太深
            if (rank[rootA] > rank[rootB]) {
                parent[rootB] = rootA;
            } else if (rank[rootA] < rank[rootB]) {
                parent[rootA] = rootB;
            } else {
                // 兩棵樹高度相同時，任選一棵作為新根
                parent[rootB] = rootA;

                // 合併後，新根的高度才會增加
                rank[rootA]++;
            }

            return true;
        };

        // 按照輸入順序依序加入每一條邊
        for (const [a, b] of edges) {
            // 如果無法合併，代表 a 和 b 原本已經連通
            // 因此目前這條邊就是造成環的多餘邊
            if (!union(a, b)) {
                return [a, b];
            }
        }

        // 題目保證一定存在一條多餘邊
        // 這行只是讓函式在結構上保有預設回傳值
        return [];
    }
}
