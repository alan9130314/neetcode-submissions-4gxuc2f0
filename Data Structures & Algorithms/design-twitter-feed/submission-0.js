class Twitter {
  constructor() {
    this.time = 0;
    this.tweets = new Map();     // userId -> [[time, tweetId]]
    this.following = new Map();  // userId -> Set<followeeId>
  }

  ensureUser(userId) {
    if (!this.tweets.has(userId)) {
      this.tweets.set(userId, []);
    }

    if (!this.following.has(userId)) {
      this.following.set(userId, new Set([userId]));
    }
  }

  postTweet(userId, tweetId) {
    this.ensureUser(userId);

    this.tweets.get(userId).push([this.time, tweetId]);
    this.time += 1;
  }

  getNewsFeed(userId) {
    this.ensureUser(userId);

    const heap = new MaxHeap();

    for (const followeeId of this.following.get(userId)) {
      const arr = this.tweets.get(followeeId);

      if (arr.length > 0) {
        const index = arr.length - 1;
        const [time, tweetId] = arr[index];

        heap.push([time, tweetId, followeeId, index]);
      }
    }

    const result = [];

    while (heap.size() > 0 && result.length < 10) {
      const [time, tweetId, userId, index] = heap.pop();

      result.push(tweetId);

      const prevIndex = index - 1;

      if (prevIndex >= 0) {
        const [prevTime, prevTweetId] = this.tweets.get(userId)[prevIndex];

        heap.push([prevTime, prevTweetId, userId, prevIndex]);
      }
    }

    return result;
  }

  follow(followerId, followeeId) {
    this.ensureUser(followerId);
    // this.ensureUser(followeeId);

    this.following.get(followerId).add(followeeId);
  }

  unfollow(followerId, followeeId) {
    this.ensureUser(followerId);
    // this.ensureUser(followeeId);

    if (followerId === followeeId) return;

    this.following.get(followerId).delete(followeeId);
  }
}

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  push(item) {
    this.heap.push(item);
    this.bubbleUp();
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown();

    return max;
  }

  size() {
    return this.heap.length;
  }

  bubbleUp() {
    let i = this.heap.length - 1;

    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);

      if (this.heap[parent][0] >= this.heap[i][0]) break;

      [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
      i = parent;
    }
  }

  sinkDown() {
    let i = 0;

    while (true) {
      let largest = i;
      const left = i * 2 + 1;
      const right = i * 2 + 2;

      if (
        left < this.heap.length &&
        this.heap[left][0] > this.heap[largest][0]
      ) {
        largest = left;
      }

      if (
        right < this.heap.length &&
        this.heap[right][0] > this.heap[largest][0]
      ) {
        largest = right;
      }

      if (largest === i) break;

      [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
      i = largest;
    }
  }
}