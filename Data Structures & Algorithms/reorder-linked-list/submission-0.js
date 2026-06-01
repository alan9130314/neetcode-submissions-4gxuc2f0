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
     * @return {void}
     */
    reorderList(head) {
        if (!head || !head.next) return;

        // 1. 尋找中點：快慢指標
        let slow = head;
        let fast = head;
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // 2. 反轉後半段串列 (從 slow.next 開始)
        // 8, 10, null => 10, 8, null
        // 斷開前半段與後半段
        let curr = slow.next;
        slow.next = null;
        let prev = null;
        while (curr !== null) {
            let tempNext = curr.next;
            curr.next = prev;
            prev = curr;
            curr = tempNext;
        }

        // 3. 交錯合併兩個串列
        let first = head; // 前半段的頭
        let second = prev; // 反轉後後半段的頭 (此時 prev 是後半段的第一個節點)

        while (second !== null) {
            // 暫存兩邊的下一個節點，避免斷鏈
            let tmp1 = first.next;
            let tmp2 = second.next;

            // 重新串接指標
            first.next = second;
            second.next = tmp1;

            // 指標往後移動，繼續下一次合併
            first = tmp1;
            second = tmp2;
        }
    }
}
