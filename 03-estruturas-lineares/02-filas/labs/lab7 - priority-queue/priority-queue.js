class Node {
  constructor(value, priority = 0, next = null) {
    this.value = value;
    this.priority = priority;
    this.next = next;
  }
  print() {
    console.log(`${this.value} - ${this.priority}`);
  }
}
class PriorityQueue {
  constructor() {
    this._front = null;
    this._tail = null;
    this._size = 0;
  }

  enqueue(value, priority) {
    const node = new Node(value, priority, null);
    if (this._front === null && this._tail === null) {
      this._front = node;
      this._tail = node;
    } else if (node.priority < this._front.priority) {
      node.next = this._front;
      this._front = node;
    } else {
      let temp = this._front;
      while (temp.next !== null && temp.next.priority <= node.priority) {
        temp = temp.next;
      }
      node.next = temp.next;
      temp.next = node;
      if (node.next === null) {
        this._tail = node;
      }
    }
    this._size++;
  }

  print() {
    let temp = this._front;
    while (temp !== null) {
      temp.print();
      temp = temp.next;
    }
  }
}

module.exports = PriorityQueue;
