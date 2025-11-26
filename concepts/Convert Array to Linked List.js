class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
function arrayToLList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

let arr = [10, 20, 30, 40,50];
let list = arrayToLList(arr);
console.log(list);

// traverseLinkedList in linked List
function traverseLinkedList(head) {
    let curr = head;
    while (curr !== null) {
        console.log(curr.value)
        curr= curr.next;
    }
}
traverseLinkedList(list);

function lengthOfLinkedList(head) {
    let length = 0;
    let curr = head;
    while (curr !== null) {
        curr= curr.next;
        length++;
    }
    return length;
}
console.log(lengthOfLinkedList(list));


