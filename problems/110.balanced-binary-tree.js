/**
 * Easy
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 此方法时间复杂度O(N)，空间复杂度O(H)
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  return checkDepth(root) !== -1;
};

// 递归获得左右子树的深度
// 如果子树是平衡的，则返回真实的深度
// 若不平衡，直接返回-1
const checkDepth = (root) => {
  if (!root) {
    return 0;
  }
  const left = checkDepth(root.left);
  if (left === -1) {
    return -1;
  }
 
  const right = checkDepth(root.right);
  if (right === -1) {
    return -1;
  }
  const diff = Math.abs(left - right);
  if (diff > 1) {
    return -1;
  }
  return 1 + Math.max(left, right);
}