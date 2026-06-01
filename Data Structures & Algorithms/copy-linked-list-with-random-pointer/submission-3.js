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
        const copyMap = new Map()
        let curr = head
        // first round
        while(curr) {
            copyMap.set(curr, new Node(curr.val))
            curr = curr.next
        }
        // second round
        curr = head
        while(curr) {
            copyMap.get(curr).next = copyMap.get(curr.next) || null
            copyMap.get(curr).random = copyMap.get(curr.random) || null
            curr = curr.next
        }
        return copyMap.get(head)
    }
}
