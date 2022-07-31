import { arrayToLinkedList, ListNode, linkedLinkedToArray } from "./helper.js"

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    let res = new ListNode();

    if (lists.length == 0) return null;

    let curr = res;

    //Create a list of pointers
    let ptrs = new Array(lists.length);

    // length to keep track of dead ptrs
    let len = ptrs.length;

    //Initialize the pointers to head of linked list
    for (let i = lists.length - 1; i >= 0; i--) {
        if (lists[i]) {
            ptrs[len - i - 1] = lists[i];
        } else {
            len--;
        }
    }
    console.log("Pointers", ptrs, len);
    if (len === 0) return null;

    while (len > 1) {
        let ind = findMin();
        // console.log("Min index", ind, ptrs[ind].val);
        // res.push(ptrs[ind].val);
        curr.next = ptrs[ind];
        curr = ptrs[ind];
        if (ptrs[ind].next) {
            ptrs[ind] = ptrs[ind].next;
        } else {
            [ptrs[ind], ptrs[len - 1]] = [ptrs[len - 1], ptrs[ind]]
            len--;
        }

    }

    curr.next = ptrs[0];
    // console.log(linkedLinkedToArray(res.next));

    return res.next;


    function findMin() {
        let min = Number.MAX_VALUE, ind = -1;
        for (let i = 0; i < len; i++) {
            if (min > ptrs[i].val) {
                min = ptrs[i].val;
                ind = i;
            }
        }
        return ind;
    }
};



console.log(mergeKLists(
    [arrayToLinkedList([]), arrayToLinkedList([1])]
))