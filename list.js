class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class LinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null, 
            prev:null,
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }
    insert(index, value){
        if(index >= this.length){
            return this.append(value);
        }
        const newNode = new Node(value);
        const leader = this.traverseToIndex(index-1);
        const hold = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = hold;
        hold.prev = newNode;
        this.length++;
        return this;
    }
    remove(index){
        if(index === 0){
            this.head = this.head.next;
            this.head.prev = null;
            this.length--;
            return this;
        }
        const leader = this.traverseToIndex(index-1);
        const nodeToRemove = leader.next;
        const hold = nodeToRemove.next;
        leader.next = hold;
        if (hold) {
            hold.prev = leader;
        }
        this.length--;
        return this;
    }
    traverseToIndex(index){
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    printList(){
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
    reverse(){
        let currentNode = this.head;
        let prev = null;
        let next = null;
        while(currentNode !== null){
            next = currentNode.next;
            currentNode.next = prev;
            prev = currentNode;
            currentNode = next;
        }
        this.head = prev;
        this.tail = currentNode;
        return this;
    }
    middle(){
        let slow = this.head;
        let fast = this.head;
        while(fast !== null && fast.next !== null){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
console.log(myLinkedList.prepend(1));
console.log(myLinkedList.printList());
console.log(myLinkedList.insert(1, 99));
// console.log(myLinkedList.printList());
// console.log(myLinkedList.insert(20, 88));
// console.log(myLinkedList.printList());
console.log(myLinkedList.remove(2));
console.log(myLinkedList.printList());
// console.log(myLinkedList.length)
console.log(myLinkedList.reverse());
console.log(myLinkedList.printList());
console.log(myLinkedList.middle());
console.log(myLinkedList);
