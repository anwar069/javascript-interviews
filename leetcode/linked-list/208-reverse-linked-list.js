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
function reverseList(head) {
    if (!head) {
        return null;
    }

    let prev = null;
    let curr = head;
    let next = head.next;

    while (curr) {
        curr.next = prev;
        prev = curr;
        curr = next;

        if (next) {
            next = next.next;
        }
    }
    return prev;
};