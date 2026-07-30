class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const rows = heights.length;
        const cols = heights[0].length;

        const pacific = new Set();
        const atlantic = new Set();
        const result = [];

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];
        const dfs = (row, col, visited) => {
            const key = `${row},${col}`;

            if (visited.has(key)) {
                return;
            }

            visited.add(key);

            for (const [dr, dc] of directions) {
                const nextRow = row + dr;
                const nextCol = col + dc;

                if (
                    nextRow < 0 ||
                    nextRow >= rows ||
                    nextCol < 0 ||
                    nextCol >= cols ||
                    visited.has(`${nextRow},${nextCol}`) ||
                    heights[nextRow][nextCol] < heights[row][col]
                ) {
                    continue;
                }

                dfs(nextRow, nextCol, visited);
            }
        };
        for (let row = 0; row < rows; row++) {
            dfs(row, 0, pacific);
            dfs(row, cols - 1, atlantic);
        }

        for (let col = 0; col < cols; col++) {
            dfs(0, col, pacific);
            dfs(rows - 1, col, atlantic);
        }
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const key = `${row},${col}`;

                if (pacific.has(key) && atlantic.has(key)) {
                    result.push([row, col]);
                }
            }
        }
        return result;
    }
}
