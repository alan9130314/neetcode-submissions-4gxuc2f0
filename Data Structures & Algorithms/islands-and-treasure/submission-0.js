class Solution {
  /**
   * @param {number[][]} grid
   * @return {number[][]}
   */
  islandsAndTreasure(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const INF = 2147483647;

    const queue = [];
    let head = 0;

    const directions = [
      [-1, 0], // 上
      [0, 1],  // 右
      [1, 0],  // 下
      [0, -1], // 左
    ];

    // 第一階段：找出所有寶箱，作為多源 BFS 的起點
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (grid[row][col] === 0) {
          queue.push([row, col]);
        }
      }
    }

    // 第二階段：從所有寶箱同時向外擴散
    while (head < queue.length) {
      const [row, col] = queue[head];
      head++;

      for (const [dRow, dCol] of directions) {
        const nextRow = row + dRow;
        const nextCol = col + dCol;

        // 超出邊界就跳過
        if (
          nextRow < 0 ||
          nextRow >= rows ||
          nextCol < 0 ||
          nextCol >= cols
        ) {
          continue;
        }

        // 只更新尚未拜訪的陸地
        if (grid[nextRow][nextCol] !== INF) {
          continue;
        }

        // 鄰居距離 = 目前格子的距離 + 1
        grid[nextRow][nextCol] = grid[row][col] + 1;

        // 加入 queue，之後繼續向外擴散
        queue.push([nextRow, nextCol]);
      }
    }

    return grid;
  }
}