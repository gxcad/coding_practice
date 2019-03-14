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
    }
    this.getFirst = () => this.head;
    this.getLast = () => {
      let node = this.head;
      let next = this.head.next;
      while (next) {
        node = next;
        next = node.next;
      }

    return node;
    }
    this.clear = () => this.head = null;
    this.removeFirst = () => this.head = this.head.next;
    this.removeLast = () => {
      let node = this.head;
      let next = this.head.next;
      let previous = null;
      while (next) {
        previous = node;
        node = next;
        next = node.next;
      }
      if (previous) previous.next = null;
      // while (this.head.next) {
      //   this.head = this.head.next;
      //   this.head.next = this.head;
      // }
      // this.head = this.head.next;
    }
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