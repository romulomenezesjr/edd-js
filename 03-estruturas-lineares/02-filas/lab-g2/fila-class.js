class Queue {
    constructor(){
        this.items = []
    }

    // (enfileirar): Adiciona um elemento no final da fila.
    enqueue(element){
        this.items.push(element)
    }

    // (desenfileirar): Remove o elemento da frente da fila.
    dequeue() {
        if (this.items.length > 0){
            return this.items.shift()
        } else {
            return "Fila está vazia"
        }
    }

    // Verifica o elemento na frente da fila sem removê-lo.
    front(){
        if (this.items.length > 0) {
            return this.items[0]
        } else {
            return "Fila está vazia"
        }
    }

    // Verifica o último elemento na fila, sem removê-lo
    rear(){
        if (this.items.length > 0) {
            const end = this.items.length - 1
            return this.items[end]
        } else {
            return "A fila está vazia"
        }
    }

    // Verifica se a fila está vazia
    isEmpty(){
        return this.items.length === 0
    }

    // Verifica o tamanho da fila
    size(){
        return this.items.length
    }

}


