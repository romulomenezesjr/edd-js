let pilha = []

function push(item){
    pilha.push(item)
}

function pop(){
    return pilha.pop()
}

function peek(){
    if (pilha.length > 0) {
        const pos_ultimo = pilha.length - 1
        const ultimo = pilha[pos_ultimo]
        return ultimo
    } else {
        return null
    }
    
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


export {push, pop, peek, size, isEmpty}