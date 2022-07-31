/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {

    let mid = midNode(head);
    let head2 = reverseList(mid);
    let temp = head2;
    console.log(head, head2)
    while (head && head2) {
        if (head.val != head2.val) return false;
        head = head.next;
        head2 = head2.next;
    }

    return true;

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
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

/**Recursive */
var isPalindrome = function (head) {

    let ref = head;

    function check(node) {
        if (node == null) return true;
        let ans = check(node.next);
        let isEqual = (ref.val == node.val) ? true : false;
        ref = ref.next;
        return ans && isEqual;
    }
    return check(head)
};