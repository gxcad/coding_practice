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
      while (this.head) {
        count += 1;
        this.head = this.head.next;
      }

      return count;
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
// list.size() return the number of nodes currently in the list.