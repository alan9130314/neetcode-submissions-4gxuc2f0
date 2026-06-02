class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cache = new Map();
        this.capacity = capacity;
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    /**
     * @param {Node} node
     */
    remove(node) {
        let prevNode = node.prev;
        let nextNode = node.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
    }

    /**
     * @param {Node} node
     */
    insert(node) {
        let tailPrevNode = this.tail.prev;
        tailPrevNode.next = node;
        node.prev = tailPrevNode;
        node.next = this.tail;
        this.tail.prev = node;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.cache.has(key)) {
            const node = this.cache.get(key);
            this.remove(node);
            this.insert(node);
            return node.val;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.cache.has(key)) {
            this.remove(this.cache.get(key));
        }
        let newNode = new Node(key, value);
        this.cache.set(key, newNode);
        this.insert(newNode);
        
        if (this.cache.size > this.capacity) {
            const lru = this.head.next;
            this.remove(lru);
            this.cache.delete(lru.key);
        }
    }
}
