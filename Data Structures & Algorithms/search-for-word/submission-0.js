class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        function backtrack(row, col, index) {
            // 成功條件
            if (index === word.length) {
                return true;
            }
            // 失敗條件
            if (
                row < 0 ||
                row >= board.length ||
                col < 0 ||
                col >= board[0].length ||
                board[row][col] !== word[index]
            ) {
                return false;
            }
            // 標記目前格子
            const temp = board[row][col];
            board[row][col] = "#";
            // 搜尋四個方向
            const found =
                backtrack(row + 1, col, index + 1) ||
                backtrack(row - 1, col, index + 1) ||
                backtrack(row, col - 1, index + 1) ||
                backtrack(row, col + 1, index + 1);
            // 恢復目前格子
            board[row][col] = temp;
            // 回傳結果
            return found;
        }

        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[0].length; col++) {
                if (backtrack(row, col, 0)) return true;
            }
        }
        return false;
    }
}
