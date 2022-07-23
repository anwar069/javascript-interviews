
//  Definition for singly-linked list.
export function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

export function arrayToLinkedList(arr) {
    if (!arr.length) {
        return null
    }
    let head = new ListNode(arr[0]);
    let prev = head;
    for (let i = 1; i < arr.length; i++) {

        let node = new ListNode(arr[i]);;
        prev.next = node;
        prev = node;
    }
    return head;
}


export function linkedLinkedToArray(head) {
    let arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    return arr;
}

// console.log(arrayToLinkedList([]));