class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size === 0;
    }
    getSize(){
        return this.size;
    }
    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
        return this.head;
    }
    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            let curr = this.head;
            while(curr.next){
                curr = curr.next;
            }
            curr.next = node;
        }
        this.size++;
        return this.head;
    }
    insert(value,index){
        if(index < 0 || index > this.size){
            return `Invalid index`;
        }
        if(index === 0){
            this.prepend(value);
        }else{
            const node = new Node(value);
            let curr = this.head;
            for(let i=0; i<index-1; i++){
                curr = curr.next;
            }
            node.next = curr.next;
            curr.next = node;
            this.size++;
        }
        return this.head;
    }
    print(){
        if(this.isEmpty()){
            return null;
        }
        let curr = this.head;
        let listValues = '';
        while(curr){
            listValues += `${curr.value} `;
            curr = curr.next;
        }
        console.log(listValues);
    }
};
const linkedList = new LinkedList();
console.log(linkedList.prepend(5))
console.log(linkedList.prepend(10))
console.log(linkedList.prepend(15))
linkedList.print();
console.log(linkedList.append(20))
linkedList.print();
console.log(linkedList.isEmpty());
console.log(linkedList.getSize());
console.log(linkedList.insert(25,2))
linkedList.print();
console.log(linkedList.insert(30,30))
linkedList.print();