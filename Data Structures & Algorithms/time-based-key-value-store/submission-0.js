class TimeMap {
    constructor() {
        this.store = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        // 如果 key 還不存在，先建立一個空陣列
        if (!this.store.has(key)) {
            this.store.set(key, []);
        }
        // 將物件格式 push 進去
        this.store.get(key).push({ timestamp, value });
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        console.log("get", key, timestamp);
        // 如果連 key 都不存在，直接回傳空字串
        if (!this.store.has(key)) return "";

        const list = this.store.get(key);
        let left = 0;
        let right = list.length - 1;
        let res = ""; // 用來記錄目前找到最接近且小於等於目標的 value

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            console.log(key, left, mid, right, list[mid].timestamp, timestamp);
            if (list[mid].timestamp <= timestamp) {
                // 找到的mid timestam 小於或等於要找timestamp，因此記錄答案，並將左指標往右，往大的方向尋找
                res = list[mid].value;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return res;
    }
}
