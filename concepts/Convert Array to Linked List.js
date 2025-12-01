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

let arr = [10, 20, 30, 40,50,60];
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
  // invalid range
  if (head === null) return null;
  if (k > m) return head;  // nothing to delete

  // 1️⃣ If k == 0 → delete from head
  if (k === 0) {
    let current = head;
    let index = 0;

    // move current to (m+1)-th node
    while (current !== null && index < m) {
      current = current.next;
      index++;
    }

    // new head is (m+1)-th node (ya null)
    return current;
  }

  // 2️⃣ Find (k-1)-th node (just before start of deletion)
  let current = head;
  let index = 0;

  while (current !== null && index < k - 1) {
    current = current.next;
    index++;
  }

  // If k is out of range - nothing to delete
  if (current === null || current.next === null) return head;

  // 3️⃣ temp ko k-th node par rakhna hai
  let temp = current.next;
  let count = k;

  // Move temp from k-th to (m+1)-th node
  while (temp !== null && count <= m) {
    temp = temp.next;
    count++;
  }

  // 4️⃣ Connect (k-1)-th node → (m+1)-th node
  current.next = temp;

  return head;
}

// list = deleteRange(list, 1, 1);
// list = deleteRange(list, 2, 4);
// list = deleteRange(list, 0, 2);
// list = deleteRange(list, 3, 10);
// list = deleteRange(list, 0, 100);
// list = deleteRange(list, 5, 7);
// list = deleteRange(list, 2, 1);
// list = deleteRange(list, 0, 0);
// list = deleteRange(list, 1, 100);
// console.log(JSON.stringify(list))

function insertAtHead(head, value) {
    let newNode = new ListNode(value);  // create new node
    newNode.next = head;                // point to existing head
    return newNode;                     // newNode becomes new head
}
list = insertAtHead(list, 5);
console.log(JSON.stringify(list, null, 2));

function insertAtTail(head,value){
    let curr = head;
    while(curr && curr.next){
        curr = curr.next;
    }
    curr.next = new ListNode(value);
    return head;
}
list = insertAtTail(list, 70);
console.log(JSON.stringify(list, null, 2));

function insertAtK(head, k, value) {
    if (head === null) {
        return new ListNode(value);
    }
    if (k === 0) {
        return insertAtHead(head, value);
    }
    
    let curr = head;
    let index = 0;
    
    while (curr && index < k - 1) {
        curr = curr.next;
        index++;
    }
    
    if (curr === null) {
        return insertAtTail(head, value);
    }
    
    let newNode = new ListNode(value);
    newNode.next = curr.next;
    curr.next = newNode;
    
    return head;
}

list = insertAtK(list, 8, 80);
console.log(JSON.stringify(list, null, 2));

function insertMultipleAtTail(head,arr){
    for(let i = 0; i < arr.length; i++){
        head = insertAtTail(head, arr[i]);
    }
    return head;
}
const arr1 = [90, 100, 200, 300];
list = insertMultipleAtTail(list, arr1);
console.log(JSON.stringify(list, null, 2));

function insertAtHeadMultiple(head, arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        head = insertAtHead(head, arr[i]);
    }
    return head;
}

// Test the function
const arr2 = [1, 2, 3];
list = insertAtHeadMultiple(list, arr2);
console.log(JSON.stringify(list, null, 2));

function insertAtKMultiple(head, k, arr) {
    for (let i = 0; i < arr.length; i++) {
        head = insertAtK(head, k + i, arr[i]);
    }
    return head;
}

// Test the function
const arr3 = [1000, 2000];
list = insertAtKMultiple(list, 3, arr3);
console.log(JSON.stringify(list, null, 2));

const arr4 = [1,2,4];
const arr5 = [1,3,4];

// Convert arrays to linked lists and merge them
const list1 = arrayToLList(arr4);
const list2 = arrayToLList(arr5);
function mergeTwoLists(list1, list2) {
    // Placeholder for merge logic
    
    // // Create a dummy node to simplify the logic
    let dummy = new ListNode(0);
    let current = dummy;
    
    // // Traverse both lists and connect nodes in sorted order
    while (list1 !== null && list2 !== null) {
        if (list1.value <= list2.value) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    
    // Connect remaining nodes (if any)
    current.next = list1 || list2;
    
    return dummy.next;
}

const ans = mergeTwoLists(list1, list2);
console.log("Merged list:", JSON.stringify(ans, null, 2));