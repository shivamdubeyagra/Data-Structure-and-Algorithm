class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
function arrayToLList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current.next.prev = current;
        current = current.next;
    }
    return head;
}

let arr = [10, 20, 30, 40,50,60];
let list = arrayToLList(arr);
// console.log(list);

function removeHead(head){
    if(head === null) return null;
    head = head.next;
    if(head !== null){
        head.prev = null;
    }
    return head;
}
// list = removeHead(list);
console.log(list);

function removeTail(head){
    if(head === null) return null;
    if (head.next === null) {
        return null;
    }
    let curr = head;
    while(curr.next.next !== null){
        curr = curr.next;
    }
    curr.next.prev = null;
    curr.next = null;
    return head;

}
// list = removeTail(list,)

function removeKth(head, k) {
    if (head === null) return null;

    // Case 1: remove head
    if (k === 0) {
        head = head.next;
        if (head !== null) head.prev = null;
        return head;
    }

    let curr = head;
    let idx = 0;

    // move to (k-1)-th node
    while (curr !== null && idx < k - 1) {
        curr = curr.next;
        idx++;
    }

    // if k is out of bounds
    if (curr === null || curr.next === null) return head;

    let nodeToRemove = curr.next;

    // Case 2: removing last node
    if (nodeToRemove.next === null) {
        curr.next = null;
        return head;
    }

    // Case 3: removing middle node
    curr.next = nodeToRemove.next;
    nodeToRemove.next.prev = curr;

    return head;
}
list = removeKth(list,3)