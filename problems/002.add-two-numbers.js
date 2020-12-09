/**
 * https://leetcode.com/problems/add-two-numbers/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

const l11 = new ListNode(2);
const l12 = new ListNode(4);
const l13 = new ListNode(3);
l11.next = l12;
l12.next = l13;

const l21 = new ListNode(5);
const l22 = new ListNode(6);
const l23 = new ListNode(4);
l21.next = l22;
l22.next = l23;

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let node = new ListNode(0);
    const firstNode = node;
    let carry = 0;
    while (l1 || l2 || carry) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
        const sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        node.next = new ListNode(sum % 10);
        node = node.next;
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }
    return firstNode.next;
};

console.log(addTwoNumbers(l11, l21));