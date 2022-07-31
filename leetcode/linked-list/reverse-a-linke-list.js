import { linkedLinkedToArray, ListNode, arrayToLinkedList } from "../helper.js";


function reverse(head) {

    let res;

    // Recursively call teh helper till last node
    function helper(node) {
        if (!node.next) {
            res = node;
            return node;
        }
        let rev = helper(node.next);

        rev.next = node;

        return node;
    }

    helper(head);

    // Head will be last node so point head to null
    head.next = null;
    return res;
}


console.log(linkedLinkedToArray(reverse(arrayToLinkedList([1, 2, 3, 4, 5]))));