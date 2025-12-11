class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null
    this._size = 0
  }

  insert(value, pos) {
    if (pos === 0 ){
        const node = new Node(value)
        node.next = this.head
        this.head = node
        this._size++
    }
  }

  remove(element) {}

  removeAt(position) {
    if (this.isEmpty()){
        console.log("Lista está vazia. Não é possível remover")
        return -1
    }
    if (position === 0){
        const value = this.head.value
        this.head = this.head.next
        this._size--
        return value
    }
  }

  indexOf(element) {}

  isEmpty() {}

  size() {
    // let temp = this.head
    // let count = 0
    // while (temp.next !== null) {
    //     count++
    // }
    // return count
    return this._size
  }

  print() {}

  clear() {}

  search(value) {}

  toString() {}

  toArray() {}
}
