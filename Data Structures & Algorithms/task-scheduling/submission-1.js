class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const count = new Array(26).fill(0);

        for (const task of tasks) {
            count[task.charCodeAt(0) - "A".charCodeAt(0)] += 1;
        }

        const heap = new MaxHeap();

        for (const freq of count) {
            if (freq > 0) heap.push(freq);
        }

        const queue = [];
        let time = 0;

        while (heap.size() > 0 || queue.length > 0) {
            time += 1;

            while (queue.length > 0 && queue[0][1] <= time) {
                heap.push(queue[0][0]);
                queue.shift();
            }

            if (heap.size() > 0) {
                const freq = heap.pop();

                const remaining = freq - 1;
                const readyTime = time + n + 1;

                if (remaining > 0) {
                    queue.push([remaining, readyTime]);
                }
            }
        }

        return time;
    }
}

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    push(num) {
        this.heap.push(num);
        this.bubbleUp();
    }

    bubbleUp() {
        let i = this.heap.length - 1;

        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);

            if (this.heap[parent] >= this.heap[i]) break;

            [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
            i = parent;
        }
    }

    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0];

        this.heap[0] = this.heap.pop();

        this.sinkDown();

        return max;
    }

    sinkDown() {
        let i = 0;

        while (true) {
            const left = i * 2 + 1;
            const right = i * 2 + 2;
            let largest = i;

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
