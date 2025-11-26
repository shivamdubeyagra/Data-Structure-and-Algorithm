class ListNode {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
function arrayToLList(arr){
    if(arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for(let i=1; i<arr.length; i++){
        current.next = new ListNode(arr[i]);
        current =  current.next;
    }
    return head;
}

let arr = [10, 20, 30, 40];
let list = arrayToLList(arr);
console.log(list);
