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

/**Recursive */
var reverseKGroup = function (head, k) {
    if (k <= 1 || !head || !head.next) return head;

    let start = head;
    let count = 0;
    // Start will point to k+1 node. or the last node.
    while (start && count != k) {
        start = start.next;
        count++;
    }

    //if k is greater than the length of the list, reverse the list as it is, no need to swap
    if (count == k) {

        // get the next list head
        let curr = reverseKGroup(start, k);

        // Reveser till k
        for (let i = 0; i < k; i++) {
            let tmp = head.next;
            head.next = curr;
            curr = head;
            head = tmp;
        }

        // Set the new head
        head = curr;
    }

    return head;
};