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
      // if (!this.head) this.head = new Node(data);
      // let node = this.head;
      // let next = this.head.next;
      // while (next) {
      //   node = next;
      //   next = node.next;
      // }
      // node.next = new Node(data);
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
      if (!this.head) {
        this.head = new Node(data);
      }
      if (!data) return;
      if (!this.getAt(index - 1)) return;
      let current = this.getAt(index);
      let previous = this.getAt(index - 1);
      current = this.getAt(index);
      current.next = current;
      previous.next = new Node(data);
    };
  }
}

module.exports = { Node, LinkedList };

// let list1 = new LinkedList();
// ----------
// node1 {
//   data: '35',
//   next: 'node2'  (head)
// }

// node2 {
//   data: '35',
//   next: 'node3'
// }

// node3 {
//   data: '35',
//   next: null
// }
// --------
