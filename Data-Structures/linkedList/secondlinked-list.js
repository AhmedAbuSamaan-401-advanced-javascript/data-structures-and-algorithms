class Node {
    constructor(data) {
      this.previous = null;
      this.data = data;
      this.next = null;
    }
  }
  
  class SecondLinked {
    constructor(){
      this.head = null;
      this.tail = null;
    }
    addToLast(value){
      const node = new Node(value);
      if(!this.head){
        this.head = node;
        this.tail = node;
        return this;
      }
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      node.previous = currentNode;
      currentNode.next = node;
      this.tail = node;
      return this;
    }
    addToFirst(value){
      let node = new Node(value);
      node.next = this.head;
      this.head.previous = node;
      this.head = node;
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
      let string = 'NULL';
      let current = this.head;
      while(current){
        string += ` <- {${current.data}} -> `;
        current = current.next;
      }
      string += 'NULL';
      return string;
    }
  }
  
  module.exports.SecondLinked = new SecondLinked();