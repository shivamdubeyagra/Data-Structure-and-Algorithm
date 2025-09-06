/*
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  pop(){
    if(!this.top){
        return null;
    }
    if(this.top === this.bottom){
        this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;
    return this;
  }
  push(value){
    const newNode = new Node(value);
    if(this.length === 0){
        this.top = newNode;
        this.bottom = newNode;
    }else{
        const holdingPointer = this.top;
        this.top = newNode;
        this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }
  peek(){
    return this.top
  }
}

const myStack = new Stack()
console.log(myStack.push('google'))
console.log(myStack.push('udemy'))
console.log(myStack.push('discord'))
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack)
*/

class Stack {
  constructor(){
      this.items = [];
  }
  push(item){
      this.items[this.items.length] = item;
  }
  pop(){
      if(this.items.length === 0){
          return null;
      }
      const item = this.items[this.items.length-1];
      this.items.length--;
      return item;
  }
  peek(){
      if(this.items.length === 0){
          return null;
      }
      return this.items[this.items.length-1];
  }
  isEmpty(){
      return this.items.length === 0;
  }
  size(){
      return this.items.length;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.items);
console.log(stack.peek());
stack.pop();
console.log(stack.items);
console.log(stack.isEmpty());
console.log(stack.size());