## Merge Sort Notes

Time Complexity: O(n log(n))  
Space Complexity: O(n)

---

## Quick Sort Notes

Time Complexity  
- Avg Case: O(n log(n))
- Worst Case: O(n2)

Space Complexity: O(n)

---

## Binary Sort Notes

Time Complexity: O(log(n))  
Space Complexity: O(n)

---

## Linked List Notes

### Linked List Properties:
`head` - the first node in the list  
`tail` - the last node in the list  
`length` - then number of nodes in the list, the list's length

### Linked List Node Properties:
`value` - actual val this node represents  
`next` - next node in the list (relative to this node)  
`previous` - prev node in the lsit (relative to this node)  
^ only for doubly linked lists!!  


Time , Space Compexity  
Access - O(n) , O(n)  
Search - O(n) , O(n)  
Insertion - O(1) , O(n)  
Deletion - O(1) , O(n)  

* insertion/ deletion are O(1) only if we already have a reference to that node, otherwise it's O(n)
---

## Stacks and Queues Notes  
- `stacks` and `queues` are NOT 'data structures'  
- they are ADTs (abstract data types) that represent a linear collection of nodes or values  
  - similar to linked list data structure

## Stack
- `LIFO` (last in first out) data structure
  - last node added is the first node removed
  - first node added is the last node removed
    - like a stack of trays in a cafeteria
- use JS arrays to implement a basic stack 
  - `Array#push` adds to the top of the stack
  - `Array#pop` removes from the top of the stack
- **DFS tree traversal** algo takes advantage of a stack

Properties:  
`top`, `bottom` (optional), `length`

## Queue
- `FIFO` (first in first out) data structure  
  - like on line to checkout
- use JS arrays to implement a basic stack 
  - `Array#push` adds to the top of the stack
  - `Array#shift` removes from the top of the stack
- **BFS tree traversal** algo takes advantage of a queue

Properties:  
`front`, `back`, `length`

## Both
`value`, `next`

Time , Space Compexity  
Access - O(n) , O(n)  
Search - O(n) , O(n)  
Insertion - O(1) , O(n)  
Deletion - O(1) , O(n)  