class Node {
    constructor(value) {
      this.value = value;
      // this.left = null;
      // this.right = null;
    }
  }
  
  class Trees {
    constructor() {
      this.root = null;
      this.children = [];
    }
  
    insert(node) {
      node = new Node(node);
      if(this.root === null) {
        this.root = node;
      } else {
        this.children.push(node);
      }
      return node;
    }
      remove(node) {
      if(this.root.value === node.value) {
        delete(this.root.value);
      } else if(this.children){
        for(let i =0; i < this.children.length; i++) {
          if(this.children[i].value === node.value){
            delete(this.children[i].value);
          }
        }
        //return('removed ' + node);
      }
    }
      find(node) {
        node = new Node(node);
      if(this.root.value === node.value) {
        return node;
      } else if(this.children){
          for(let i = 0; i < this.children.length; i++) {
            console.log(this.children.length);
            if(this.children[i].value === node.value){
            return(this.children[i]);
            } else {return('node does not exist');}
          }
        }
    }
  
  }
  let mytree = new Trees;
  mytree.insert(2);
  mytree.insert(5);
  mytree.insert(15);
  mytree.insert(3);
  mytree.insert(4);
  mytree.insert(5);
  mytree.insert(8);
  mytree.insert(10);
  
  function fizzBuzzTree(tree) {
    if(tree.root.value % 3 === 0 && tree.root.value % 5 === 0){
      tree.root.value = 'fizzbuzz';
    } else if(tree.root.value % 3 === 0) {
      tree.root.value = 'fizz';
    } else if(tree.root.value % 5 === 0) {
      tree.root.value = 'buzz';
    }
    for(let i = 0; i < tree.children.length; i++){
      if(tree.children[i].value % 3 === 0 && tree.children[i].value % 5 === 0){
        tree.children[i].value = 'fizzbuzz';
      } else if(tree.children[i].value % 3 === 0) {
        tree.children[i].value = 'fizz';
      }  else if(tree.children[i].value % 5 === 0) {
        tree.children[i].value = 'buzz';
      }  
    }
    return tree;
  }
  fizzBuzzTree(mytree);
  