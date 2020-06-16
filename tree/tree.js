class BinaryTree {
    constructor(root) {
      this.root = root;
    }
    // Root -> Left -> Right
    preOrder() {
      const results = [];
      const _traversal = (node) => {
        results.push(node.value);
        if (node.left) _traversal(node.left);
        if (node.right) _traversal(node.right);
      };
      _traversal(this.root);
      return results;
    }
    // Left -> Root -> Right
    inOrder() {
      const results = [];
      const _traversal = (node) => {
        if (node.left) _traversal(node.left);
        results.push(node.value);
        if (node.right) _traversal(node.right);
      };
      _traversal(this.root);
      return results;
    }
    // Left -> Right -> Root
    postOrder() {
      const results = [];
      const _traversal = (node) => {
        if (node.left) _traversal(node.left);
        if (node.right) _traversal(node.right);
        results.push(node.value);
      };
      _traversal(this.root);
      return results;
    }
    breadthFirstTraversal(tree) {
      var queue=[this];
      var n;
      while(queue.length>0) {
        n = queue.shift();
        tree(n.value);
        if (!n.children) {
          continue;
        }
        for (var i = 0; i< n.children.length; i++) {
           queue.push(n.children[i]);
        }
      }
    }
    findMaximumValue() {
      let results = null;
      const _traversal = (node) => {
        if (node.left) _traversal(node.left);
        if (node.right) _traversal(node.right);
        results = results < node.value ? node.value : results;
      };
      if (this.root) {
        _traversal(this.root);
      }
      return results;
    }
  }
  
  module.exports = BinaryTree;
  