// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        let newNode = new Node(val);
        
        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }

        this.tail = newNode;
        this.length++
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (!this.head) return undefined;

        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;

        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let newHead = new Node(val);
        
        if (!this.head) {
            this.tail = newHead;
            this.tail.next = null;
        }
        
        let oldHead = this.head;
        this.head = newHead;
        this.head.next = oldHead; 

        this.length++;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (!this.head) return undefined;

        let removedHead = this.head;
        let newHead = this.head.next;
        
        this.head = newHead;
        this.length--;

        if (this.tail === removedHead) {
            this.tail = null;
        }

        return removedHead;
    }

    // TODO: Implement the contains method here
    contains(target) {
        if (!this.head) return false;

        let current = this.head;
        while (current !== null) {
            if (current.value === target) return true;
            current = current.next;
        }

        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        let idx = 0;

        let current = this.head;
        while (current !== null) {
            if (idx === index) return current;
            current = current.next;
            idx++;
        }
        return null;
    }

    // TODO: Implement the set method here
    set(index, val) {
        let node = this.get(index);
        if (node) {
            node.value = val;
            return true;
        }
        return false;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        let node = this.get(index);

        if (!node) return false;

        let prevNode = this.get(index-1);
        let newNode = new Node(val);
        if (prevNode) {
            prevNode.next = newNode;
            newNode.next = node;
            this.length++;
            return true;
        } else {
            this.head = newNode;
            newNode.next = node;
            this.length++
            return true;
        }
        
    }

    // TODO: Implement the remove method here
    remove(index) {
        let removedNode = this.get(index);
        if (!removedNode) return undefined;

        let prevNode = this.get(index-1);
        let nextNode = removedNode.next;

        if (prevNode && nextNode) {
            prevNode.next = nextNode;
        } else if (!prevNode && nextNode) {
            this.head = nextNode;
        } else {
            this.head = null;
        }
        
        this.length--;
        return removedNode;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
