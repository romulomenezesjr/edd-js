import {Queue} from "./class-queue.js"

const q = new Queue()

let valor_retornado = q.isEmpty()
console.log(valor_retornado)

q.enqueue(4)
q.enqueue("dog")
q.enqueue(true)

valor_retornado = q.size()
console.log(valor_retornado)

valor_retornado = q.isEmpty()
console.log(valor_retornado)

q.enqueue(8.4)

valor_retornado = q.dequeue()
console.log(valor_retornado)

valor_retornado = q.dequeue()
console.log(valor_retornado)

valor_retornado = q.size()
console.log(valor_retornado)

valor_retornado = q.isEmpty()
console.log(valor_retornado)