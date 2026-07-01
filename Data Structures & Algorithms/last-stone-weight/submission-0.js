class MaxHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }

    pop() {
        const max = this.heap[0];
        const last = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.sinkDown(0);
        }

        return max;
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    bubbleUp(i) {
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);

            if (this.heap[parent] >= this.heap[i]) break;

            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
            i = parent;
        }
    }

    sinkDown(i) {
        while (true) {
            let largest = i;
            const left = i * 2 + 1;
            const right = i * 2 + 2;

            if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
                largest = left;
            }

            if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
                largest = right;
            }

            if (largest === i) break;

            [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
            i = largest;
        }
    }
}
class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const heap = new MaxHeap();

        for (const stone of stones) {
            heap.push(stone);
        }

        while (heap.size() > 1) {
            const y = heap.pop();
            const x = heap.pop();

            if (y !== x) {
                heap.push(y - x);
            }
        }

        return heap.peek() ?? 0;
    }
}
