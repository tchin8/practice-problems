// Trees

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let a = new TreeNode("a");
let b = new TreeNode("b");
let c = new TreeNode("c");
let d = new TreeNode("d");
let e = new TreeNode("e");
let f = new TreeNode("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(a);

// -----------------------------------------------------------------------------

// In-Order Pre-Order Post-Order 

// In-Order 

function inOrderPrint(root) {
  if (!root) return;

  inOrderPrint(root.left);
  console.log(root.val);
  inOrderPrint(root.right);
}

// Pre-Order 

function preOrderPrint(root) {
  if (!root) return;

  console.log(root.val);
  preOrderPrint(root.left);
  preOrderPrint(root.right);
}

// Post-Order

function postOrderPrint(root) {
  if (!root) return;

  postOrderPrint(root.left);
  postOrderPrint(root.right);
  console.log(root.val);
}


// -----------------------------------------------------------------------------

// DFS

function depthFirst(root) {
  let stack = [root];
  while (stack.length) {
    let node = stack.pop();
    console.log(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
}

function depthFirst(root) {
  // initialize the stack with the root node
  let stack = [root];

  // continue running the algorithm while there are still nodes on the stack
  while (stack.length) {

    // pop the top node from the stack
    let node = stack.pop();

    // we consider a node visited once we pop it,
    // so we should print the node's value now
    console.log(node.val);

    // add the node's left and right children, if they exist
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);

    // IMPORTANT: do not print out the children yet; they must wait their turn to be popped first
  }
}


// recursively

function depthFirstRecursive(root) {
  if (!root) return;

  console.log(root.val);
  depthFirstRecursive(root.left);
  depthFirstRecursive(root.right);
}


// -----------------------------------------------------------------------------

// BFS

function breadthFirst(root) {
  let queue = [root];
  while (queue.length) {
    let node = queue.shift();

    console.log(node.val);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}

function breadthFirst(root) {
  // initialize the queue with the root node
  let queue = [root];

  // continue running the algorithm while there are still nodes on the queue
  while (queue.length) {
    // remove the front node from the queue
    let node = queue.shift();

    // the node we just removed is now "visited", so print it
    console.log(node.val);

    // add the left and right children to the back of the queue, if they exist
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);

    // IMPORTANT: do not print out the children yet; they must wait their turn to exit the front of the queue first
  }
}


// -----------------------------------------------------------------------------

// Binary Search Trees BST

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val, root = this.root) {
    if (!this.root) {
      this.root = new TreeNode(val);
      return;
    }

    if (val < root.val) {
      if (!root.left) {
        root.left = new TreeNode(val);
      } else {
        this.insert(val, root.left);
      }
    } else {
      if (!root.right) {
        root.right = new TreeNode(val);
      } else {
        this.insert(val, root.right);
      }
    }
  }
}



// commented naive BST class
class BST {
  constructor() {
    // initialize the tree to be empty
    this.root = null;
  }

  insert(val, root = this.root) {
    // if the tree is currently empty, then create the node as the 'absolute' root
    if (!this.root) {
      this.root = new TreeNode(val);
      return;
    }

    // otherwise, the tree is not empty, so...
    // if our val to insert is less than the root...
    if (val < root.val) {
      if (!root.left) {                       // ...and the left child does not exist,
        root.left = new TreeNode(val);      //      then create the node as the left child
      } else {                                // ...and the left child already exists,
        this.insert(val, root.left);        //      then recursively insert on the left subtree
      }

      // if our val to insert is greater than or equal to the root...
    } else {
      if (!root.right) {                      //  ...and the right child does not exist,
        root.right = new TreeNode(val);     //      then create the node as the right child
      } else {                                //  ...and the right child already exists,
        this.insert(val, root.right);       //      then recursively insert on the right subtree
      }
    }
  }
}


let tree1 = new BST();
tree1.insert(10);
tree1.insert(5);
tree1.insert(16);
tree1.insert(1);
tree1.insert(7);
tree1.insert(16);

let tree2 = new BST();
tree2.insert(1);
tree2.insert(5);
tree2.insert(7);
tree2.insert(10);
tree2.insert(16);
tree2.insert(16);