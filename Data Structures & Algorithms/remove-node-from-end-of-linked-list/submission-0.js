/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        // 1. 建立 dummy 節點，並讓它指向 head
    let dummy = new ListNode(0);
    dummy.next = head;
    
    // 2. 初始化兩個指標，一開始都指向 dummy
    let fast = dummy;
    let slow = dummy;
    
    // 3. 讓 fast 先往前走 n 步
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }
    
    // 4. 同步移動指標，直到 fast 抵達最後一個節點
    while (fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }
    
    // 5. 改變 slow.next 的指向，刪除目標節點
    slow.next = slow.next.next;
    
    // 6. 回傳新的頭節點
    return dummy.next;
    }
}
