// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    // Create a new node with the given value
    const newNode = new SinglyLinkedNode(val);

    // Set the node's `next` pointer to the list's current head pointer
    newNode.next = this.head;

    // Set the list head to point to the new link
    this.head = newNode;

    this.length++;

    return this;
  }

  addToTail(val) {
    // Your code here
    const newNode = new SinglyLinkedNode(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
    return this;
  }

  removeFromHead() {
    // console.log(this)
    if (this.length === 0) {
      return undefined;
    } else {
      let currNode = this.head;
      this.head = this.head.next;
      // currNode.next = null;
      this.length--;
      return currNode;
    }
  }

  removeFromTail(val) {
    if (this.head === null) {
      return undefined;
    }

    if (this.head.next === null) {
      const removedVal = this.head.value;
      this.head = null;
      this.length--;
      return removedVal;
    }

    let prevNode = this.head;
    let currNode = this.head.next;

    while (currNode.next !== null) {
      prevNode = currNode;
      currNode = currNode.next;
    }

    const removedVal = currNode;
    prevNode.next = null;
    this.length--;

    return removedVal;
  }

  peekAtHead() {
    if (this.head !== null) {
      return this.head.value;
    } 
  }

  print() {
    let current = this.head;

    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

module.exports = {
  SinglyLinkedList,
  SinglyLinkedNode,
};
