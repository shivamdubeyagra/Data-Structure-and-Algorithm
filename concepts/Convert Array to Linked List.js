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
// traverseLinkedList(list);

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


function searchLinkedList(head,tar){
    let curr = head;
    while(curr !== null){
        if(curr.value === tar) return true
        curr = curr.next;
    }
    return false
}
const tar = 30;
// console.log(searchLinkedList(list,tar));

// deleteHead
function deleteHead(head){
    if(head === null) return null;

    let newHead = head.next;
    head.next = null;
    head = newHead;

    return head;
}
// list = deleteHead(list)
// console.log(list)

function deleteTail(head){
    if(head === null) return null;
    if(head.next === null) return null;
    let curr = head;
    while(curr.next.next !== null){
        curr = curr.next;
    }
    curr.next = null;
    return head;
}
// list = deleteTail(list)
// console.log(list);

function deleteKth(head,k){
    if(head === null) return null;
    if (k === 0){
        let newHead = head.next;
        head.next = null;
        return newHead;
    }
    let curr = head;
    let index = 0;
    while(curr !== null && index < k-1){
        curr = curr.next;
        index++;
    }
      if (curr === null || curr.next === null) {
    return head;   // no deletion
  }

  // 5️⃣ Delete k-th node
  let temp = curr.next;    // node to delete
  curr.next = temp.next;   // bypass it
  temp.next = null;           // detach deleted node

  return {head,temp};
}
// list = deleteKth(list,0);
// console.log(list.temp,list)

function deleteRange(head, k, m) {
  // 1️⃣ If list is empty
  if (head === null) return null;

  // 2️⃣ If k == 0 → delete from head
  if (k === 0) {
    let current = head;
    let index = 0;

    // move to m-th node
    while (current !== null && index < m) {
      current = current.next;
      index++;
    }

    // new head will be node after m
    return current;
  }

  // 3️⃣ Find (k-1)-th node (just before start of deletion)
  let current = head;
  let index = 0;

  while (current !== null && index < k - 1) {
    current = current.next;
    index++;
  }

  // If k is out of range - nothing to delete
  if (current === null || current.next === null) return head;

  // 4️⃣ Find node at m-th index
  let temp = current;
  let count = k;

  while (temp !== null && count <= m) {
    temp = temp.next;
    count++;
  }

  // 5️⃣ Connect (k-1)-th node → (m+1)-th node
  current.next = temp;

  return head;
}

list = deleteRange(list, 2, 4);
console.log(list)
