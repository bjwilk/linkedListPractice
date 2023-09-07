// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add a node with the given value to the head of the linked list
        const newNode = new DoublyLinkedNode(val);
    
        if (this.length === 0) {
            // If the list is empty, set both head and tail to the new node
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Update the links for the existing head and the new node
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    
        // Increment the length of the list
        this.length++;
    }
    

    addToTail(val) {
        // Add node of val to tail of linked list

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        // Check if the list is empty.
        if (this.length === 0) {
            return undefined; // The list is empty, so there's nothing to remove.
        }
    
        const removedValue = this.head.value;
    
        if (this.length === 1) {
            // If there's only one node in the list, set both head and tail to null.
            this.head = null;
            this.tail = null;
        } else {
            // Remove the current head node.
            this.head = this.head.next;
            this.head.prev = null;
        }
    
        this.length--;
    
        return removedValue;
    }
    

    removeFromTail() {
        // Remove node at tail

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {

        if (this.head !== null) {
            return this.head.value;
          } else {
            return undefined;
          }

    }

    peekAtTail() {
        // Return value of tail node

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}