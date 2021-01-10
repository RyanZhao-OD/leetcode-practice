/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  // 临时节点
  let tempStartNode = new ListNode(0);
  let prev = tempStartNode;
  while (l1 && l2) {
    if (l1.val > l2.val) {
      prev.next = l2;
      l2 = l2.next;
    } else {
      prev.next = l1;
      l1 = l1.next;
    }
    prev = prev.next;
  }

  if (l1) {
    prev.next = l1;
  }
  if (l2) {
    prev.next = l2;
  }
  return tempStartNode.next;
};