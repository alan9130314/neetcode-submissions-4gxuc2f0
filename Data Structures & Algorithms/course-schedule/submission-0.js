class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const graph = Array.from({ length: numCourses }, () => []);

        for (const [course, prerequisite] of prerequisites) {
            graph[prerequisite].push(course);
        }

        const state = new Array(numCourses).fill(0);

        const dfs = (course) => {
            if (state[course] === 1) return false;

            if (state[course] === 2) return true;

            state[course] = 1;

            for (const nextCourse of graph[course]) {
                if (!dfs(nextCourse)) {
                    return false;
                }
            }

            state[course] = 2;

            return true;
        };

        for (let course = 0; course < numCourses; course++) {
            if (!dfs(course)) {
                return false;
            }
        }

        return true;
    }
}
