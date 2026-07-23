class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
  const res = [];
  const path = [];

  function backtrack(index) {
    if (index === nums.length) {
      res.push([...path]);
      return;
    }

    backtrack(index + 1);

    path.push(nums[index]);
    backtrack(index + 1);
    path.pop();
  }

  backtrack(0);
  return res;
    }
}
