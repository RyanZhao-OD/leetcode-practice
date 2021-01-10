/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetricRecur = (left, right) => {
  if (left === null || right === null) {
    return left === right;
  }
  if (left.val !== right.val) {
    return false;
  }
  return isSymmetricRecur(left.left, right.right) && isSymmetricRecur(left.right, right.left);
};

var isSymmetric = function(root) {
  return root === null || isSymmetricRecur(root.left, root.right);
};