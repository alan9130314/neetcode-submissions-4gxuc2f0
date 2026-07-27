class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let node = this.root;

        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }

            node = node.children[char];
        }

        node.isEnd = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        function dfs(index, node) {
            // 搜尋字串已處理完，確認目前位置是否為完整單字結尾
            if (index === word.length) {
                return node.isEnd;
            }

            const char = word[index];

            // 萬用字元：嘗試目前節點的所有子節點
            if (char === ".") {
                for (const key in node.children) {
                    const child = node.children[key];

                    if (dfs(index + 1, child)) {
                        return true;
                    }
                }

                return false;
            }

            // 一般字母：只能走對應的子節點
            if (!node.children[char]) {
                return false;
            }

            return dfs(index + 1, node.children[char]);
        }

        return dfs(0, this.root);
    }
}