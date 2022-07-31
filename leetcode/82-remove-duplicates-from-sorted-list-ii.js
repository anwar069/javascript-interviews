/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (!head || !head.next) return head;

    let slow = new ListNode();
    let fast = head;

    slow.next = head;

    while (fast) {
        while (fast.next && fast.val == fast.next.val) {
            fast = fast.next;
        }

        if (slow.next != fast) {
            slow.next = fast.next;
            fast = fast.next;
        } else {
            slow = slow.next;
            fast = fast.next;
        }
    }

    return head;
};