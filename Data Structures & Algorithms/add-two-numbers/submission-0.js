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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummy = new ListNode();
        let curr = dummy;
        let carry = 0;
        while (l1 !== null || l2 !== null || carry !== 0) {
            // 1. 安全地取得數值（不覆寫 l1 和 l2）
            let val1 = l1 ? l1.val : 0;
            let val2 = l2 ? l2.val : 0;

            // 2. 計算總和與進位
            let sum = val1 + val2 + carry;
            let nodeVal = sum % 10;
            carry = Math.floor(sum / 10);

            // 3. 建立新節點並串接
            curr.next = new ListNode(nodeVal);
            curr = curr.next; // 移動答案串列的指標

            // 4. 移動原本串列的指標
            l1 = l1 ? l1.next : null;
            l2 = l2 ? l2.next : null;
        }
        return dummy.next
    }
}
