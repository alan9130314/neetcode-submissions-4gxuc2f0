/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        const res = [];

        function dfs(node) {
            if (node === null) {
                res.push("null");
                return;
            }

            res.push(String(node.val));
            dfs(node.left);
            dfs(node.right);
        }

        dfs(root);
        return res.join(",");
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const values = data.split(",");
        let i = 0;

        function dfs() {
            const val = values[i];
            i++;

            if (val === "null") {
                return null;
            }

            const node = new TreeNode(Number(val));
            node.left = dfs();
            node.right = dfs();

            return node;
        }

        return dfs();
    }
}
