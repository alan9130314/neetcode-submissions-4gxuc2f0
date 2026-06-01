// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
if (!head) return null;
    
    let cur = head;
    
    // 第一步：複製新節點並插入到舊節點後面
    while (cur) {
        let nextNode = cur.next;
        // 建立新節點，讓它的 next 先指向原本的下一個舊節點
        cur.next = new Node(cur.val, nextNode, null);
        cur = nextNode;
    }
    
    cur = head;
    // 第二步：連接新節點的 random 指標
    while (cur) {
        if (cur.random) {
            // 新節點的 random = 舊節點 random 的下一個（就是對應的新節點）
            cur.next.random = cur.random.next;
        }
        cur = cur.next.next; // 跳過新節點，走到下一個舊節點
    }
    
    cur = head;
    let newHead = head.next; // 這是新鏈結串列的開頭
    let newCur = newHead;
    
    // 第三步：拆分兩個鏈結串列
    while (cur) {
        cur.next = cur.next.next; // 恢復舊串列
        if (newCur.next) {
            newCur.next = newCur.next.next; // 串聯新串列
        }
        cur = cur.next;
        newCur = newCur.next;
    }
    
    return newHead;
    }
}
