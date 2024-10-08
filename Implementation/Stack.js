/** Stack Implementation using Array */
//  This is very easy.........
/*class Stack {
  constructor() {
    this.stack = [];
  }
  push(val) {
    this.stack.push(val);
  }
  pop() {
    if (this.stack.length > 0) this.stack.pop();
    else return "Stack underflow";
  }
  peek() {
    if (this.stack.length > 0) return this.stack[this.stack.length - 1];
    else return "Nothing to show";
  }
  isEmpty() {
    return this.stack.length === 0;
  }
  print() {
    return this.stack;
  }
  length() {
    return this.stack.length;
  }
} */

/** Stack Implementation using Node  */
//  This is important

/* Creating a Node Class to store value 
    This store value and link to the next value  */
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

// Initialize the Stack object with two varaibles
// top varaible -> this store every value and link to the next object ---> this.top = Node={null,null}
// Size -> this is to track the length of the stack
class Stack {
  constructor() {
    this.top = new Node(null, null);
    this.size = 0;
  }
  /* 
In push method three steps are involed
1. creating a temperary Node to store the value and previous value to the next (link) to store reference
2. Assigning the temperary Node to the top value so the new value will be store in top of the stack
3. Increasing the size 
*/
  push(val) {
    let temp = new Node(val, this.top);
    this.top = temp;
    this.size++;
    return true;
  }
  /* Example: if stack is empty 
this.top = Node{null, null}
1. temperory node -> Node {value: 42 next:{null, null}}
2. Assigning -> this.top = {value:42, next:{null,null}}
            If stack is not empty
this.top = {value:42, next:{null,null}}
1. temperory Node -> Node {value:23, next:{value:42, next:{null,null}}}
2. Assigning -> this.top = {value:23, next:{value:42, next:{null,null}}}
        Adding another value is on to the stack
1. temperory Node -> Node {value:13, next:{value:23,next:{value:42, next:{null,null}}}}
2. Assigining -> this.top = {value:13, next:{value:23,next:{value:42, next:{null,null}}}}
*/

  /* In pop Method we are simply removing the value or replacing the top value */
  pop() {
    if (this.top.value === null) return "Stack Underflow";
    else {
      let removeValue = this.top.value;
      this.top = this.top.next;
      this.size--;
      return removeValue;
    }
  }
  peek() {
    if (this.top.value === null) return "No values to show";
    else return this.top.value;
  }
  print() {
    let holder = this.top;
    let values = [];
    while (holder.value !== null) {
      values.push(holder.value);
      holder = holder.next;
    }
    return values;
  }
  /*
   assign top node to holder and loop through it to find the required value
   */
  search(val) {
    var index = -1;
    var holder = this.top;
    var found = false;
    while (!found && holder != null) {
      if (holder.value == val) found = true;
      holder = holder.next;
      index++;
    }
    if (!found) return -1;
    else return index;
  }
  isEmpty() {
    return this.size === 0;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.peek());
stack.pop();
console.log(stack.peek());

console.log(stack.size);
console.log(stack.print());

// console.log(stack)
