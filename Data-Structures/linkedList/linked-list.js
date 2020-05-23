'use strict';
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    return;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }
  Add(value=''){
    const node = new Node(value);
    if(!this.head){
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }
  includes(value){
    let current = this.head;
    while(current){
      if(current.data === value){
        return true;
      }
      current = current.next;
    }
    return false;
  }
  toString(){
    let string = '';
    let current = this.head;
    while(current){
        string += `{${current.data}} -> `;
      current = current.next;
    }
    string += 'NULL';
    return string;
  }
}

module.exports.Node = Node;
module.exports.LinkedList = LinkedList;