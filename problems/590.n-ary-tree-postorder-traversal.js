/**
 * Easy
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
  var res = [];
  var helper = function (node) {
    if (!node) return;
    if (node.children.length) {
      for (let i = 0; i < node.children.length; i++) {
        helper(node.children[i])
      }
    }
    res.push(node.val);
  };
  helper(root);
  return res;
};