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
var swapPairs = function (head) {


    if (!head || !head.next) return head;

    let root = new ListNode();
    let prev = root;
    let curr = head;

    while (curr && curr.next) {
        prev.next = curr.next;
        curr.next = prev.next.next;
        prev.next.next = curr;

        prev = curr;
        curr = curr.next;
    }
    return root.next
};