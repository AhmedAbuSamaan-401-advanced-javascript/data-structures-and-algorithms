'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.stackSpace = [];
    }

    push(nodeValue) {
        const newNode = new Node(nodeValue);
        newNode.next = this.stackSpace[0];
        this.stackSpace.unshift(newNode);
        this.top = this.stackSpace[0];
    }

    pop() {
        if (this.top) {
            const removedNode = this.stackSpace.shift();
            this.top = this.stackSpace[0] ? this.stackSpace[0] : null;
            return removedNode;
        }
        else {
            return 'Empty stack';
        }
    }

    peek() {
        return this.top ? this.top.value : 'Empty stack';

    }

}

class PseudoQueue {
  constructor(){
    this.front = null;
    this.pseudoQueueSpace = [];
    this.stack = new Stack();

  }
  enqueue (value){
    this.stack.push(value);
    this.pseudoQueueSpace = this.stack.stackSpace;
    this.front = this.pseudoQueueSpace[0];
  }

  dequeue (){
    this.stack.pop();
    this.pseudoQueueSpace = this.stack.stackSpace;
    this.front = this.pseudoQueueSpace[0];
  }
  peek(){
    return this.front ? this.front.value : 'Empty queue';
  }
}