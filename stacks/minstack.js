// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

/**
 * initialize your data structure here.
 */
let MinStack = function() {
  this.stack = new Stack();
  this.minStack = new Stack();
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x);

  if (this.minStack.size === 0) {
    this.minStack.push(x);
  } else if (x <= this.minStack.peek()) {
    this.minStack.push(x);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  let removedElement = this.stack.pop();
  if (removedElement === this.minStack.peek()) {
    this.minStack.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack.peek();
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack.peek();
};


/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


// Stack implementation from Terrible Whiteboard
class Stack {
    constructor() {
      this.storage = {};
      this.size = 0;
    }
  
    push(val) {
      this.storage[this.size] = val;
      this.size++;
    }
  
    pop() {
      let top = this.storage[this.size - 1];
      this.size--;
      delete this.storage[this.size];
      return top;
    }
  
    peek() {
      return this.storage[this.size - 1];
    }
  
    empty() {
      return this.size === 0;
    }
  
    getSize() {
      return this.size;
    }
  }

