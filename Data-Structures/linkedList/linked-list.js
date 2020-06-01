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
  append(value=''){
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
  insertBefore(value,newvValue){
    let current = this.head;
    if(current.data === value){
      node.next = current;
      this.head = node;
      return this;
    }
    while(current.next !== null){
      if(current.next.data===value){
        node.next = current.next;
        current.next = node;
        return this;
      }
      current = current.next;
    }
    return 'the value you add is not in the linkedlest data';
  }
  insertAfter(value,newValue){
    let node = new Node(newValue);
    let current = this.head;
    while(current){
      if(current.data===value){
        node.next = current.next;
        current.next = node;
        return this;
      }
      current = current.next;
    }
    return 'the value you add is not in the linkedlest data';
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
    let linkedDataString = '';
    let current = this.head;
    while(current){
      linkedDataString += `{${current.data}} -> `;
      current = current.next;
    }
    linkedDataString += 'NULL';
    return linkedDataString;
  }
  delete(value){
    let current = this.head;
    if(current.data === value){
      this.head = current.next;
      return this;
    }
    while(current.next !== null){
      if(current.next.data===value){
        current.next = current.next.next;
        return this;
      }
      current = current.next;
    }
    return 'the value you are trying to add is not in the linkedlist';
  }
}

module.exports.Node = Node;
module.exports.LinkedList = LinkedList;