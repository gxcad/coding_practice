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
    this.size = function() {
      let count = 0;
      let node = this.head;
      while (node) {
        count += 1;
        node = node.next;
      }

      return count;
    };
    this.getFirst = () => this.head;
    this.getLast = () => {
      if (!this.head) return;
      let node = this.head;
      let next = this.head.next;
      while (next) {
        node = next;
        next = node.next;
      }

      return node;
    };
    this.clear = () => (this.head = null);
    this.removeFirst = () => (this.head = this.head.next);
    this.removeLast = () => {
      if (!this.head) return;
      let node = this.head;
      let next = this.head.next;
      let previous = null;
      while (next) {
        previous = node;
        node = next;
        next = node.next;
      }
      if (previous) previous.next = null;
      else this.head = null;
    };
    this.insertLast = data => {
      const last = this.getLast();
      if (last) last.next = new Node(data);
      else this.head = new Node(data);
    };
    this.getAt = index => {
      if (!this.head) return null;
      let current = this.head;
      let next = current.next;
      for (let i = 0; i < index; i++) {
        current = next;
        if (next) next = current.next;
      }
      return current;
    };
    this.removeAt = index => {
      if (!this.getAt(index)) return;
      if (!index && !this.head.next) this.head = null;
      if (!index) this.head = this.head.next;
      let previous = this.getAt(index - 1);
      let current = this.getAt(index);
      previous.next = current.next;
    };
    this.insertAt = (data, index) => {
      if (!this.head) this.head = new Node(data);
      else if (index === 0) this.insertFirst(data);
      else if (index > this.size()) this.insertLast(data);
      else {
        let previous = this.getAt(index - 1);
        let current = previous.next;
        let nNode = new Node(data);
        previous.next = nNode;
        nNode.next = current;
      }
    };
  }
}

module.exports = { Node, LinkedList };

// linked list:
// {data: 'blahHead', next: node1} < this.head (index 0)
// {data: 'blah1', next: newNode} (index 1)
// {data: 'newNode', next: node2} (index 2)
// {data: 'blah2', next: node3} (index 3)
// {data: 'blah3', next: node4} (index 4)
// {data: 'blah4', next: node5} (index 5)

// {data: 'b' next: node1}
