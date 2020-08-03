'use strict';
class Node {
    constructor(value,left=null,right=null){
        this.value=value;
        this.right=right;
        this.left=left;
        this.sum=0;
    }
}
class BinaryTree{
    
    constructor(root){
        this.root=root
    }
    
    inOrder(){
        let result =[];
        function _walk(node){
            if(node.left){_walk(node.left)};
            result.push(node.value);
            if(node.right){_walk(node.right)};
        }
    _walk(this.root);
    return  result;
    }
​
    preOrder(){
        let result =[];
        function _walk(node){
            result.push(node.value);
            if(node.left){_walk(node.left)};
            if(node.right){_walk(node.right)};
        }
    _walk(this.root);
    return  result;
    }
​
    postOrder(){
        let result =[];
        function _walk(node){
            if(node.left){_walk(node.left)};
            if(node.right){_walk(node.right)};
            result.push(node.value);
        };
    _walk(this.root);
    return  result;
    }
​
    // add to BTS code 16
    add(value){
        let node = new Node(value)
        if(!this.root){
            this.root =node;
            return;
        };
        let current =this.root;
        while(current){
            if(value<current.value){
                if(!current.left){current.left=node; return;}
                else {current =current.left}             
            }
            if(value>= current.value){
                if(!current.right){current.right=node; return;}
                else {current =current.right}       
            }
        }
    }
​
    addRecursion(value){
        let node = new Node(value)
        if(!this.root){
            this.root =node;
            return;
        };
        function _walk(current){
                if(value<current.value){
                if(!current.left){current.left=node; return;}
                else {_walk(current.left)}             
            }
            if(value >= current.value){
                if(!current.right){current.right=node; return;}
                else {_walk(current.right)}       
            }
        }
        _walk(this.root)
      }
​
      //check if the value in a BST code 16 Big(O) time O(log(n))
    containsBST(value){
        let flag = false;
        if(!this.root){return false;}
        function _walk(node){
            if(node.value == value){
                flag =true
                return flag;};
            if(value<node.value){
                if(node.left){_walk(node.left)};
            }
            if(value>node.value){
                if(node.right){_walk(node.right)};
            }
        }
        _walk(this.root);
        return flag;
    }
​
      //check if the value in a BT code 16 Big(O) time O(n)
    containsBT(value){
        let flag = false;
        if(!this.root){return false;}
        function _walk(node){
            if(node.value == value){
                flag =true
                return flag;};
            if(node.left){_walk(node.left)};
            if(node.right){_walk(node.right)};
        }
        _walk(this.root);
        return flag;
    }
​
    //find Max value in BST
    findMaximumValueBST(){
        if(!this.root){return 'Its empty!!';}
        let max;
        function _walk(node){
            console.log(node.value,max)
            max= node.value;   
            if(node.right){_walk(node.right)}                 
        }
         _walk(this.root)
         return max
    }
​
        //find Max value in BT
    findMaximumValueBT(){
        if(!this.root){return 'Its empty!!';}
        let max=0;
        function _walk(node){
            console.log(node.value,max)
            if(node.value>max){max= node.value; }
            if(node.left){_walk(node.left)} 
            if(node.right){_walk(node.right)}         
        }
         _walk(this.root)
         return max
    }
        //Traverse with BF method 
    bft(tree){
        let result = [];
        let queue =[];
        queue.push(tree.root);
        while (queue.length){
            let currentNode = queue.shift();
            result.push(currentNode.value)
            console.log(result)
            if(currentNode.left){queue.push(currentNode.left)}
            if(currentNode.right){queue.push(currentNode.right)}
        }
        return result;
​
    }
​
    // sum all BT values
    sum(tree){
        let sum=0; 
        function _walk(newTree){
            sum+=newTree.value;
            if(newTree.left)_walk(newTree.left)
            if(newTree.right)_walk(newTree.right)     
            }
            _walk(tree.root)
            return sum
    }
​
    // count all leafs
    fileCounter(tree){
        let sum=0; 
        function _walk(newTree){
            if(newTree.left===null&&newTree.right===null){sum+=1;}
            if(newTree.left)_walk(newTree.left)
            if(newTree.right)_walk(newTree.right)     
            }
            _walk(tree.root)
            return sum
    }
​
    // checkSumPath and return true/false with modifing the node class
    checkSumPath(tree,value){
        let result =[];
        function _walk(node,pastnode){
            node.sum=pastnode.sum+node.value
            if(node.left==null&&node.right==null){
                if(node.sum == value){result.push(node.sum)}else{result.push(node.sum);}}
            if(node.left){_walk(node.left,node)};
            if(node.right){_walk(node.right,node)};
        }
    _walk(tree.root,new Node(0));
    return  result;
    }
​
    // checkSumPath and return true/false without modifing the node class
    check2(tree,value){
        let arr = [];
        let walk = function(node,sum){
        sum = sum +node.value
            if(node.left){walk(node.left, sum )};
            if(node.right){walk(node.right,sum )};
            if(!node.right && !node.left)arr.push(sum === value);
            }
        walk(tree.root,0)
        return arr
    }
​
    // check if the BT is BST solution with Big O(2*n)
    checkBST(tree){
        let arr = [];
        function _walk(node){
            if(node.left)(_walk(node.left))
            arr.push(node.value)
            if(node.right)(_walk(node.right))
        }
        _walk(tree.root)
        console.log(arr)
        let flag = true
        arr.forEach((ele,i)=>{if(ele>arr[i+1])flag= false;})
        return flag;
    }
​
    // check if the BT is BST solution with Big O(n)    
    checkBST2(tree){
        let flag = true;
        function _walk(node){
            if(node.left){if(node.left.value>node.value){flag = false;}else{_walk(node.left)}}
            if(node.right){if(node.right.value<node.value){flag = false;}else{_walk(node.right)}}
        }
        _walk(tree.root)
        return flag;
    }
​
    // merge tow BT 
    merge(tree,tree1){
        let arr = [];
        function _walk(node1,node2){
            if(node1.left,node2.left)(_walk(node1.left,node2.left))
            arr.push(node1.value+node2.value)
            if(node1.right,node2.right)(_walk(node1.right,node2.right))
        }
        _walk(tree.root,tree1.root)
        return arr;
    }
    
}
​
     // fizz buzz code challenge
function FizzBuzzTree (tree){
let newTree = tree;
function _walk(newTree){
if(newTree.value%3==0 && newTree.value%5==0){newTree.value='fizzBuzz'}
if(newTree.value%3==0){newTree.value='fizz'}
if(newTree.value%5==0){newTree.value='Buzz'}
if(newTree.left)_walk(newTree.left)
if(newTree.right)_walk(newTree.right)     
}
_walk(newTree.root)
return newTree
}
​
      // find intersection vakue between tow BT
function treeInterSection(tree1,tree2){
    let obj ={}
    let arr =[]
    function _walk1(newTree){
        obj[newTree.value]=newTree;
        if(newTree.left)_walk1(newTree.left)    
        if(newTree.right)_walk1(newTree.right)
    }
    _walk1(tree1.root)
    function _walk2(newTree){
        if(obj[newTree.value])arr.push(newTree.value);
        if(newTree.left)_walk2(newTree.left)    
        if(newTree.right)_walk2(newTree.right)
    }
    _walk2(tree2.root)
    return arr;
}
​
    // delete from BT
function deleteNode(tree,value){
    function _walk(node){
        
        if(node.left){_walk(node.left)}
        if (node.value==value&&node.right){
            let wait = node
            node = node.right
            node.left =wait.left
        }
        if (node.value==value&&!node.right){
            node =node.left
        }
        if(node.right){_walk(node.right)}
    }
    _walk(tree.root)
    return tree;
}
    
let one = new Node(5);
let tow = new Node(3);
let three = new Node(1);
let four = new Node(4);
let five =  new Node(7);
let six =  new Node(9);
let seven = new Node(6);
​
​
​
one.left = tow;
one.right = five;
tow.left = three;
tow.right = four;
five.left= seven;
five.right = six;
let tree = new BinaryTree(one);
​
​
let one1 = new Node(4);
let tow1 = new Node(2);
let three1 = new Node(0);
let four1 = new Node(3);
let five1 =  new Node(6);
let six1 =  new Node(8);
let seven1 = new Node(5);
​
one1.left = tow1;
one1.right = five1;
tow1.left = three1;
tow1.right = four1;
five1.left= seven1;
five1.right = six1;
let tree1 = new BinaryTree(one1);
​
​
// tree.add(10);
// tree.addRecursion(11);
// tree.addRecursion(15);
console.log(tree.inOrder())
console.log(tree.containsBST(10))
console.log(tree.containsBST(12))
console.log(tree.containsBT(10))
console.log(tree.containsBT(12))
console.log(tree.findMaximumValueBST())
console.log(tree.findMaximumValueBT())
console.log(tree.bft(tree))
// console.log(FizzBuzzTree(tree).inOrder())
console.log(tree.sum(tree))
console.log(tree.fileCounter(tree))
console.log(tree.fileCounter(tree1))
console.log(tree.fileCounter(tree)===tree.fileCounter(tree)?true:false)
console.log(tree.fileCounter(tree)===tree.fileCounter(tree1)?true:false)
console.log(tree.inOrder())
console.log(tree1.inOrder())
console.log(treeInterSection(tree,tree1));
console.log(tree.checkSumPath(tree,12));
console.log(tree.check2(tree,12));
console.log(tree.checkBST(tree));
console.log(tree.inOrder())
console.log(tree1.inOrder())
console.log(tree.merge(tree,tree1));
console.log(tree.checkBST2(tree1));
console.log(tree.checkSumPath(tree,9));
console.log(tree.check2(tree,9));
​
// find nth largest number and nth min number https://khan4019.github.io/front-end-Interview-Questions/bst.html
// Find the hight of a tree  https://khan4019.github.io/front-end-Interview-Questions/bst.html
// check balance  https://khan4019.github.io/front-end-Interview-Questions/bst.html