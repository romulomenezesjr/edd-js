class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor(){
        this.clear()
    }
    // Método para adicionar um elemento na fila 
    enqueue(element){
        const node = new Node(element)
        if (this.front === null && this.rear === null) {
            this.front = node
            this.rear = node
        } else {
            this.rear.next = node 
            this.rear = node
        }
        
        this._size += 1      
    }
    // Método para remover o elemento da frente da fila
    dequeue(){
        if (this.isEmpty()){
            return "A fila está vazia"
        }
        const node = this.front
        this.front = this.front.next

        if (!this.front) {
            this.rear = null; // Se a fila ficar vazia, rear também se torna null
        }

        this._size -= 1
        return node.value
    }
    // Método para verificar o tamanho da fila
    size(){
        return this._size
    }
    // Método para verificar se a fila está vazia
    isEmpty(){
        return this._size === 0
    }
    // Método para ver o elemento na frente da fila
    front(){
        return this.isEmpty()? "A fila está vazia": this.front.value
    }
    // Método para ver o elemento no final da fila
    rear(){
        return this.isEmpty()? "A fila está vazia": this.rear.value
    }
    // Método para limpar a fila
    clear() {
        this.front = null 
        this.rear = null
        this._size = 0
    }
}

export {Queue}
