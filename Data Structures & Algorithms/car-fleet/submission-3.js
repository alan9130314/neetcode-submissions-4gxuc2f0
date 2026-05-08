class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let cars = position.map((pos, idx) => [pos, speed[idx]]);
        let sortCars = cars.sort((a, b) => b[0] - a[0]);
        let stack = [];
        for (const car of sortCars) {
            let time = (target - car[0]) / car[1];
            stack.push(time);

            if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
                stack.pop();
            }
        }
        return stack.length;
    }
}
