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