// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.insertFirst = function(data) {
      let node1 = new Node(data);
      if (this.head) node1.next = this.head;
      this.head = node1;
    };
  }
}

module.exports = { Node, LinkedList };
