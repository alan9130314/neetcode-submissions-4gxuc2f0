class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
const n = nums.length;
    const deque = []; // 用來存儲索引，並保持 nums[index] 是遞減的
    const res = [];   // 用來儲存每個視窗的最大值

    for (let i = 0; i < n; i++) {
        // 1. 保持單調性：踢掉隊列尾端比當前元素小的值
        // 因為當前元素 nums[i] 更有潛力成為未來的最大值
        while (deque.length > 0 && nums[i] >= nums[deque[deque.length - 1]]) {
            deque.pop();
        }
        
        // 2. 將當前索引加入隊列
        deque.push(i);

        // 3. 移除過期索引：如果隊列頭端的索引已經超出視窗範圍
        // 視窗範圍是 [i-k+1, i]，所以小於等於 i-k 的都過期了
        if (deque[0] <= i - k) {
            deque.shift();
        }

        // 4. 紀錄答案：當 i 來到 k-1 時，代表第一個視窗形成了
        // 之後每移動一步都要紀錄當前隊列頭端（最大值）
        if (i >= k - 1) {
            res.push(nums[deque[0]]);
        }
    }

    return res;
    }
}
