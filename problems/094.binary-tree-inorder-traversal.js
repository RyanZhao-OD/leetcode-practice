/**
 * Medium
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  var res = [];
  var helper = function (node) {
    if (!node) return;
    res.push(node.val);
    helper(node.left);
    helper(node.right);
  };
  helper(root);
  return res;
};

