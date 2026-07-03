class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const heap = new MaxHeap();
        for (const point of points) {
            const x = point[0];
            const y = point[1];
            const distance = x * x + y * y;
            heap.push([distance, x, y]);
            if (heap.size() > k) {
                heap.pop();
            }
        }
        return heap.heap.map(([_, x, y]) => [x, y]);
    }
}
class MaxHeap {
    constructor() {
        this.heap = [];
    }
    size() {
        return this.heap.length;
    }
    push(item) {
        this.heap.push(item);
        this.bubbleUp();
    }
    pop() {
        const max = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.sinkDown();
        }
        return max;
    }
    bubbleUp() {
        let i = this.heap.length - 1;
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if (this.heap[i][0] <= this.heap[parent][0]) break;
            [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
            i = parent;
        }
    }
    sinkDown() {
        let i = 0;
        while (true) {
            let largest = i;
            const left = i * 2 + 1;
            const right = i * 2 + 2;
            if (left < this.heap.length && this.heap[largest][0] < this.heap[left][0]) {
                largest = left;
            }
            if (right < this.heap.length && this.heap[largest][0] < this.heap[right][0]) {
                largest = right;
            }
            if (largest === i) break;
            [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
            i = largest;
        }
    }
}
