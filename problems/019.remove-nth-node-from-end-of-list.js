/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if (!head.next) {
    return null;
  }
  let pre = head;
  let cur = head;
  for (let i = 0; i < n; i++) {
    cur = cur.next;
  }
  if (!cur) return head.next;
  while (cur.next) {
      cur = cur.next;
      pre = pre.next;
  }
  pre.next = pre.next.next;
  return head;
};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}