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

  let maxFreq = 0;
  let maxCount = 0;

  for (const freq of count) {
    if (freq === 0) continue;

    if (freq > maxFreq) {
      maxFreq = freq;
      maxCount = 1;
    } else if (freq === maxFreq) {
      maxCount += 1;
    }
  }

  return Math.max(
    tasks.length,
    (maxFreq - 1) * (n + 1) + maxCount
  );
    }
}
