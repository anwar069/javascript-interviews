/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {

    if (!head || !head.next || !head.next.next) return head;

    function midNode(head) {
        let f = head, s = head;

        while (f && f.next) {
            f = f.next.next;
            s = s.next;
        }
        return s;
    }

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

    let mid = midNode(head);
    let h1 = head;
    let h2 = reverseList(mid);

    while (h1 && h2) {
        // Point 1st head to 2nd head and move next
        let tmp = h1.next;
        h1.next = h2;
        h1 = tmp;

        // Point 2nd head to 1st head and move next
        tmp = h2.next;
        h2.next = h1;
        h2 = tmp;
    }

    // In case of odd h1 will have one extra node, setting it to null as tail
    if (h1) h1.next = null;

    return head;

};