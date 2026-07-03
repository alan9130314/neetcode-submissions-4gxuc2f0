class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const heap = new MinHeap();
        for (const num of nums) {
            heap.push(num);
            if (heap.size() > k) {
                heap.pop();
            }
        }
        return heap.peek();
    }
}

class MinHeap {
    constructor() {
        this.heap = [];
    }
    push(num) {
        this.heap.push(num);
        this.bubbleUp();
    }
    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];

        this.heap[0] = this.heap.pop();

        this.sinkDown();

        return min;
    }

    size() {
        return this.heap.length;
    }
    peek() {
        return this.heap[0];
    }
    bubbleUp() {
        let i = this.heap.length - 1;
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);
            if (this.heap[i] >= this.heap[parent]) break;
            [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
            i = parent;
        }
    }
    sinkDown() {
        let i = 0;
        while (true) {
            let smallest = i;
            let left = i * 2 + 1;
            let right = i * 2 + 2;
            if (left < this.heap.length && this.heap[smallest] > this.heap[left]) {
                smallest = left;
            }
            if (right < this.heap.length && this.heap[smallest] > this.heap[right]) {
                smallest = right;
            }
            if (smallest === i) break;
            [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
            i = smallest;
        }
    }
}
