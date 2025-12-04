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

let arr = [10, 20];
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
list = removeHead(list);
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
list = removeTail(list)
