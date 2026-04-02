class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let range = 9
        // row
        for (let i = 0; i < range; i += 1) {
            let rowHash = {}
            for (let j = 0; j < range; j += 1) {
                if (rowHash[board[i][j]]) {
                    rowHash[board[i][j]] += 1
                } else if (board[i][j] !== '.') {
                    rowHash[board[i][j]] = 1
                }
                if (rowHash[board[i][j]] > 1) {
                    return false
                }
            }
            // console.log(rowHash)
        }

        // column
        for (let j = 0; j < range; j += 1) {
            let columnHash = {}
            for (let i = 0; i < range; i += 1) {
                if (columnHash[board[i][j]]) {
                    columnHash[board[i][j]] += 1
                } else if (board[i][j] !== '.') {
                    columnHash[board[i][j]] = 1
                }
                if (columnHash[board[i][j]] > 1) {
                    return false
                }
            }
            // console.log(columnHash)
        }

        // grid
        // [mini,minj],[maxi][maxj]
        let gridRange = [[[0, 2], [0, 2]], [[0, 2], [3, 5]], [[0, 2], [6, 8]], [[3, 5], [0, 2]], [[3, 5], [3, 5]], [[3, 5], [6, 8]], [[6, 8], [0, 2]], [[6, 8], [3, 5]], [[6, 8], [6, 8]]]
        for (let g = 0; g < gridRange.length; g++) {
            console.log('45', 'g', g, gridRange[g])
            // for (let i = 0; i < 2; i++) {
            //     console.log('  47', 'i', i, gridRange[g][i])
            // }
            let gridHash = {}
            for (let j = gridRange[g][0][0]; j <= gridRange[g][0][1]; j++) {
                for (let k = gridRange[g][1][0]; k <= gridRange[g][1][1]; k++) {
                    console.log('61', 'j:', j, 'k:', k, `board[${j}][${k}]`, board[j][k])
                    if (gridHash[board[j][k]]) {
                        gridHash[board[j][k]] += 1
                    } else if (board[j][k] !== '.') {
                        gridHash[board[j][k]] = 1
                    }
                    if (gridHash[board[j][k]] && gridHash[board[j][k]] > 1) {
                        return false
                    }
                }
            }
            console.log(gridHash)
        }
        return true
    }
}
