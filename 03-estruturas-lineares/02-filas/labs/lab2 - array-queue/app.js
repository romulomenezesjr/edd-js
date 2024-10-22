import {dequeue, enqueue, front, isEmpty, rear, size} from "./array-queue.js"

let valor_retornado = isEmpty()
console.log(valor_retornado)

enqueue(4)
enqueue("dog")
enqueue(true)

valor_retornado = size()
console.log(valor_retornado)

valor_retornado = isEmpty()
console.log(valor_retornado)

enqueue(8.4)

valor_retornado = dequeue()
console.log(valor_retornado)

valor_retornado = dequeue()
console.log(valor_retornado)

valor_retornado = size()
console.log(valor_retornado)

valor_retornado = isEmpty()
console.log(valor_retornado)