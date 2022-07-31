/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (k <= 0 || !head || !head.next) return head;

    let start = head;
    let curr = head;
    let length = 1;

    // Calculate the lenght of the list
    // Current node will be the last node of the list afte this loop
    while (curr.next) {
        length++;
        curr = curr.next;
    }

    // If k is greater than the length of the list, rotate the list by k % length
    let n = k % length;

    // If n is 0, then no rotation is required
    if (n == 0) return head;

    // Point last node i.e. curr to the head
    curr.next = head;

    // Find the new Tail of the list (Lenght - n -1)
    for (let i = 0; i < length - n - 1; i++) {
        start = start.next;
    }

    // Set the new head
    head = start.next;

    // Set the new tail to null
    start.next = null;

    return head;
};