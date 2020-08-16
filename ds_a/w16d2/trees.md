## Binary Tree  

`graph` is a collection of nodes (circles) and any edges (arrows) between those nodes

- a tree is a graph that does not contain any cycles  
  - a cycle is defined as a path thru edges that begins and the same node  

`binary tree` is a tree where nodes have at most 2 children  
there exists `ternary trees` (at most 3 kids) and `n-ary trees` (at most n kids)

- an empty gaph of 2 nodes and 0 edges is a binary tree
- a graph of 1 node and 0 edges is a binary tree
- a linked list is a binary tree  

![tree-example](tree.png)

**Basic Tree Terminology**  
`tree` - graph with no cycles  
`binary tree` - tree where nodes have at most 2 nodes  
`root` - the ultimate parent, the single node of a tree that can access every other node through edges; by definition the root will not have a parent  
`internal node` - a node that has children  
`leaf` - a node that does not have any children  
`path` - a series of nodes that can be traveled through edges - for example A, B, E is a path through the above tree  

---
## Inorder Preorder Postorder  
- print all nodes of the tree  

### In-Order 
- the steps for inOrderPrint: 
  - print all nodes in the left subtree
  - print root
  - print all nodes in the right subtree  
- in-order has the pattern of left, self right  
  - a node can only be printed once its left subtree has been completely printed
  - a node's right subtree can only be printed once the node itself has been printed

```javascript
function inOrderPrint(root) {
  if (!root) return;

  inOrderPrint(root.left);
  console.log(root.val);
  inOrderPrint(root.right);
}
```

### Pre-Order  
- the steps for preOrderPrint:
  - print root
  - print all nodes in the seft subtree
  - print all nodes in the right subtree
- pre-order has the pattern of self, left, right
  - a node must be printed before its children
  - a node's left subtree must be printed before its right subtree

```javascript
function preOrderPrint(root) {
  if (!root) return;

  console.log(root.val);
  preOrderPrint(root.left);
  preOrderPrint(root.right);
}
```

### Post-Order 
- the steps for postOrderPrint:
  - print all nodes in the left subtree
  - print all nodes in the right subtree
  - print root
- post-order has the pattern of left, right, self
  - a node can only be printed after its left and right subtrees
  - a node's left subtree is pritned before its right subtree  

```javascript
function postOrderPrint(root) {
    if (!root) return;

    postOrderPrint(root.left);
    postOrderPrint(root.right);
    console.log(root.val);
}
```
---
## DFS and BFS

- `B` and `C` are siblings
- `D` and `E` are descendants of `B`
- `B`, `C`, `D`, `E`, `F` are all descendants of `A`

## Depth First Search  

A depth-first traversal will continually travel deeper into a tree before switching branches.  
DFS utilizes a `stack`, or `LIFO`

## Breadth First Search

- level 0 contains `A`
- level 1 contains `B` and `C`
- level 2 contains `D`, `E`, `F`

A Breadth-First traversal will visit all nodes across a level (or all node siblings), before moving to the next level.  
BFS utilizes a `queue`, or `FIFO`