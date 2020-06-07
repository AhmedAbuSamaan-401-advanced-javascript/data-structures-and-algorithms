'use strict';
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  peek() {
    if(this.isEmpty()) return 'Error,Empty';
    return this.top.data;
  }
  push(item) {
    let newNode = new Node(item);
    newNode.next = this.top;
    this.top = newNode;
  }
  pop() {
    if(!!this.isEmpty()) return 'Error,Empty';
    if(this.top.next){
      let value = this.top.data;
      this.top = this.top.next;
      return value;
    }else{
      let value = this.top.data;
      this.top = null;
      return value;
    }
  }
  isEmpty(){
    return !this.top;
  }
}


class Queue {
  constructor(){
    this.forward = null;
    this.unique = null;
  }
  enqueue (item) {
    let newNode = new Node(item);
    if(this.unique){
      this.unique.next = newNode;
      this.unique = newNode;
    }else{
      this.forward = newNode;
      this.unique = this.forward;
    }
  }
  dequeue(){
    if(this.forward === this.unique){
      this.forward = null;
      this.unique = null;
      return 'Error,Empty';
    }
    let temp = this.forward.data;
    this.forward = this.forward.next;
    return temp;
  }
  peek(){
    if(!this.isEmpty()) return this.forward.data;
    return 'Error,Empty';
  }
  isEmpty(){
    return !this.forward;
  }
}

module.exports= {
  Stack,
  Queue,
};