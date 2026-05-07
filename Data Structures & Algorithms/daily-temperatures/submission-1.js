class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let result = [];
        for (let i = 0; i < temperatures.length; i++) {
            let current = temperatures[i];
            let count = 0;
            result.push(0);
            for (let j = i + 1; j < temperatures.length; j++) {
                let future = temperatures[j];
                count++;
                if (future > current) {
                    result[i] = count;
                    break;
                }
            }
        }
        return result;
    }
}
