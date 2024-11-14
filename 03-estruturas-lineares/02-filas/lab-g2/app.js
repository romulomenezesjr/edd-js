import {Queue} from "./queue-class.mjs"

const queue = new Queue()

console.log(queue.isEmpty())
queue.enqueue(4)
queue.enqueue("dog")
queue.enqueue(true)
console.log(queue.size())
console.log(queue.isEmpty())
queue.enqueue(8.4)
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.size())
console.log(queue.isEmpty())
