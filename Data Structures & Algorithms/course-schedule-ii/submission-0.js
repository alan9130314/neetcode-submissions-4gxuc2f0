class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        // graph[course] 儲存修完 course 後，可以接著修的課程
        // 例如 [1, 0] 會建立 0 → 1
        const graph = Array.from({ length: numCourses }, () => []);

        // indegree[course] 表示該課程還有幾門先修課尚未完成
        const indegree = new Array(numCourses).fill(0);

        // 儲存目前入度為 0，也就是可以直接修的課程
        const queue = [];

        // 儲存最後的合法修課順序
        const order = [];

        // 使用 head 模擬 queue 的開頭，避免使用 shift() 搬移陣列元素
        let head = 0;

        // 建立 adjacency list，並計算每門課程的入度
        for (const [course, prerequisite] of prerequisites) {
            // 修完 prerequisite 後，可以接著修 course
            graph[prerequisite].push(course);

            // course 多了一門必須先完成的先修課
            indegree[course]++;
        }

        // 一開始將所有入度為 0 的課程放入 queue
        // 這些課程沒有任何先修限制，可以直接開始修
        for (let course = 0; course < numCourses; course++) {
            if (indegree[course] === 0) {
                queue.push(course);
            }
        }

        // 使用 BFS 執行拓樸排序
        while (head < queue.length) {
            // 取出目前可以修的課程
            const course = queue[head++];

            // 將這門課記錄到修課順序
            order.push(course);

            // 查看修完目前課程後，可以解鎖哪些後續課程
            for (const nextCourse of graph[course]) {
                // 目前課程已完成，因此後續課程少了一門未完成的先修課
                indegree[nextCourse]--;

                // 入度降為 0，代表所有先修課都已完成
                if (indegree[nextCourse] === 0) {
                    queue.push(nextCourse);
                }
            }
        }

        // 如果所有課程都進入 order，代表不存在環，回傳合法順序
        // 否則代表有部分課程被環卡住，無法完成，回傳空陣列
        return order.length === numCourses ? order : [];
    }
}
