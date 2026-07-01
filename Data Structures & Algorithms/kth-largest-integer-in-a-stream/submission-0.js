class KthLargest {
  constructor(k, nums) {
    this.k = k;
    this.heap = new MinHeap();

    for (const num of nums) {
      this.add(num);
    }
  }

  add(val) {
    this.heap.push(val);

    if (this.heap.size() > this.k) {
      this.heap.pop();
    }

    return this.heap.peek();
  }
}
class MinHeap {
  constructor() {
    this.heap = [];
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  push(val) {
    this.heap.push(val);

    let i = this.heap.length - 1;

    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);

      if (this.heap[parent] <= this.heap[i]) {
        break;
      }

      [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
      i = parent;
    }
  }

  pop() {
    const min = this.heap[0];
    const last = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = last;

      let i = 0;

      while (true) {
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        let smallest = i;

        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
          smallest = left;
        }

        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
          smallest = right;
        }

        if (smallest === i) {
          break;
        }

        [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
        i = smallest;
      }
    }

    return min;
  }
}