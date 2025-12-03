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
list = removeHead(list);
console.log(list);