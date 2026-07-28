class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        let maxArea = 0;

        function dfs(row, col) {
            // 超出邊界，或遇到海洋／已走訪的位置
            if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] === 0) {
                return 0;
            }

            // 標記成已走訪
            grid[row][col] = 0;

            // 目前格子的 1，加上四個方向的島嶼面積
            return (
                1 + dfs(row - 1, col) + dfs(row + 1, col) + dfs(row, col - 1) + dfs(row, col + 1)
            );
        }

        // 找出每一座尚未探索的島嶼起點
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (grid[row][col] === 1) {
                    const area = dfs(row, col);
                    maxArea = Math.max(maxArea, area);
                }
            }
        }

        return maxArea;
    }
}
