/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    var dummy = new ListNode(0, head);
    var preLeft = dummy;//head might be left
    for (var i = 1; i < left; i++) {
        preLeft = preLeft.next;
    }


    //reverse
    var leftNode = preLeft.next;
    var current = preLeft.next;
    var pre = preLeft;
    for (var i = left; i <= right; i++) {
        var next = current.next;
        current.next = pre;
        pre = current;
        current = next;
    }

    //connect 
    preLeft.next = pre;
    leftNode.next = current;
    return dummy.next;
};