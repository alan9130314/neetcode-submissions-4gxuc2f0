class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        const queue = [];
        let freshCount = 0;
        const directions = [
            [0, -1],
            [0, 1],
            [-1, 0],
            [1, 0],
        ];
        let head = 0;
        let minutes = 0;
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (grid[row][col] === 2) {
                    queue.push([row, col]);
                }
                if (grid[row][col] === 1) {
                    freshCount++;
                }
            }
        }
        while (head < queue.length && freshCount > 0) {
            const size = queue.length - head;
            for (let i = 0; i < size; i++) {
                const [row, col] = queue[head++];
                for (const [dr, dc] of directions) {
                    const nextRow = row + dr;
                    const nextCol = col + dc;
                    if (
                        nextRow < 0 ||
                        nextRow >= rows ||
                        nextCol < 0 ||
                        nextCol >= cols ||
                        grid[nextRow][nextCol] !== 1
                    ) {
                        continue;
                    }
                    grid[nextRow][nextCol] = 2;
                    freshCount--;
                    queue.push([nextRow, nextCol]);
                }
            }
            minutes++;
        }
        return freshCount === 0 ? minutes : -1;
    }
}
