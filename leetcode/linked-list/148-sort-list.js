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
var sortList = function (head) {

    function mergeTwoLists(list1, list2) {
        let res = new ListNode(0);
        let current = res;

        while (list1 && list2) {
            if (list1.val < list2.val) {
                res.next = list1;
                list1 = list1.next;
            } else {
                res.next = list2;
                list2 = list2.next;
            }
            res = res.next;
        }
        res.next = list1 || list2
        return current.next
    };

    function middleNode(head) {
        let fast = head;
        let slow = new ListNode();
        slow.next = head;

        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
        }
        let mid = slow.next;
        slow.next = null;
        return mid;
    };

    function helper(head) {
        if (!head || !head.next) return head;

        let mid = middleNode(head);
        let left = helper(head);
        let right = helper(mid);

        return mergeTwoLists(left, right);

    }

    return helper(head);


};