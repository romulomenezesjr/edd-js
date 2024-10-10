let pilha = []

function push(item){
    pilha.push(item)
}

function pop(){
    return pilha.pop()
}

function peek(){
    const pos_ultimo = pilha.length - 1
    const ultimo = pilha[pos_ultimo]
    return ultimo
}

function isEmpty(){
    if (pilha.length > 0) {
        return false
    } else {
        return true
    }
}

function size(){
    return pilha.length
}

console.log(isEmpty())
push(4)
push("dog")
console.log(peek())
push(true)
console.log(size())
push(8.4)
console.log(pop())
console.log(pop())
console.log(pop())
console.log(size())

