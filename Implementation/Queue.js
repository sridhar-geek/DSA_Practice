/** Queue Implementation using Array */

// It is very easy   --> it is better to use shift and unshift methods from array
/*class Queue {
    constructor(){
        this.queue = []
        this.front = 0
        this.rear = 0
    }
    enqueue(val){
        this.queue[this.rear] = val
        this.rear ++
        return true
    }
    dequeue(){
        if(this.queue.length > 0){
        let value = this.queue[this.front]
        delete this.queue[this.front]
        this.front++
        return value
    }
        else return 'Queue is Empty'
    }
    length(){
        return this.queue.length
    }
    isEmpty(){
        return this.queue.length === 0
    }
    print(){
        return this.queue
    }
} */

/** Queue Implementation using Stock */

// It is important

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.front = new Node(null, null);
    this.rear = new Node(null, null);
    this.size = 0;
  }
}
