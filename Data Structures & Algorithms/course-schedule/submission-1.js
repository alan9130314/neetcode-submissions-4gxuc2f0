class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        // graph[i] 儲存：
        // 修完課程 i 後，可以解鎖哪些後續課程
        const graph = Array.from({ length: numCourses }, () => []);

        // indegree[i] 表示：
        // 課程 i 還有幾門先修課需要完成
        const indegree = new Array(numCourses).fill(0);

        // 建立有向圖與每門課的入度
        //
        // [course, prerequisite] 表示：
        // prerequisite → course
        for (const [course, prerequisite] of prerequisites) {
            graph[prerequisite].push(course);
            indegree[course]++;
        }

        // BFS queue：
        // 放入目前所有沒有先修條件的課程
        const queue = [];

        for (let course = 0; course < numCourses; course++) {
            if (indegree[course] === 0) {
                queue.push(course);
            }
        }

        // 使用 head 取代 shift()，
        // 避免每次刪除陣列第一個元素造成額外搬移成本
        let head = 0;

        // 記錄成功完成的課程數
        let completed = 0;

        while (head < queue.length) {
            // 取出一門目前可以修的課程
            const course = queue[head++];
            completed++;

            // 完成目前課程後，
            // 更新它所解鎖的所有後續課程
            for (const nextCourse of graph[course]) {
                // 移除一個已完成的先修條件
                indegree[nextCourse]--;

                // 入度變成 0，代表所有先修課都已完成
                if (indegree[nextCourse] === 0) {
                    queue.push(nextCourse);
                }
            }
        }

        // 所有課程都完成，代表圖中沒有環
        //
        // 若 completed < numCourses，
        // 代表剩下的課程永遠無法變成入度 0，
        // 因此存在循環依賴
        return completed === numCourses;
    }
}
