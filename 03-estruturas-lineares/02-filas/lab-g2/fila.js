const items = []

// (enfileirar): Adiciona um elemento no final da fila.
function enqueue(element){
    items.push(element)
}

// (desenfileirar): Remove o elemento da frente da fila.
function dequeue() {
    if (items.length > 0){
        return items.shift()
    } else {
        return "Fila está vazia"
    }
}

// Verifica o elemento na frente da fila sem removê-lo.
function front(){
    if (items.length > 0) {
        return items[0]
    } else {
        return "Fila está vazia"
    }
}

// Verifica o último elemento na fila, sem removê-lo
function rear(){
    if (items.length > 0) {
        const end = items.length - 1
        return items[end]
    } else {
        return "A fila está vazia"
    }
}

// Verifica se a fila está vazia
function isEmpty(){
    return items.length === 0
}

// Verifica o tamanho da fila
function size(){
    return items.length
}
