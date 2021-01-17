/**
 * Easy
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  var res = [];
  var helper = function (node) {
    if (!node) return;
    res.push(node.val);
    if (node.children.length) {
      for (let i = 0; i < node.children.length; i++) {
        helper(node.children[i])
      }
    }
  };
  helper(root);
  return res;
};
