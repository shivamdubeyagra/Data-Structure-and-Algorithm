class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    enqueue(value){ 
        const newNode = new Node(value);
        if(this.length === 0){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }
    dequeue(){
        if(!this.first){
            return null;
        }
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;
        return this;
    }
    peek(){
        return this.first;
    }
}

const myQueue = new Queue();
myQueue.enqueue('Joy')
myQueue.enqueue('Matt')
myQueue.enqueue('Pavel')
myQueue.enqueue('Samir')
console.log(myQueue.peek())
myQueue.dequeue()
console.log(myQueue.peek())
myQueue.dequeue()
console.log(myQueue.peek())
myQueue.dequeue()
console.log(myQueue.peek())
myQueue.dequeue()
console.log(myQueue.peek())
