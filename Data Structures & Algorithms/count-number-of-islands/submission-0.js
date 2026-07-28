class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
     numIslands(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        let count = 0;

        function dfs(row, col) {
            // 超出邊界，或目前不是尚未拜訪的陸地
            if (
                row < 0 ||
                row >= rows ||
                col < 0 ||
                col >= cols ||
                grid[row][col] === "0"
            ) {
                return;
            }

            // 標記目前陸地為已拜訪
            grid[row][col] = "0";

            // 探索上下左右
            dfs(row - 1, col);
            dfs(row + 1, col);
            dfs(row, col - 1);
            dfs(row, col + 1);
        }

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (grid[row][col] === "1") {
                    // 找到一座尚未處理的新島
                    count++;

                    // 將整座島標記為已處理
                    dfs(row, col);
                }
            }
        }

        return count;
    }
}
