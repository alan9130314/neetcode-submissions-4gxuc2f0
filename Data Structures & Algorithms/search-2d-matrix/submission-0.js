class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let flatArr = matrix.flat();
        console.log(flatArr);
        let left = 0;
        let right = flatArr.length - 1;
        let mid = Math.floor((left + right) / 2);

        while (left <= right) {
            if (flatArr[mid] === target) {
                return true;
            } else if (flatArr[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
            mid = Math.floor((left + right) / 2);
        }

        return false;
    }
}
