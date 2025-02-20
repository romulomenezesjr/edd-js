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
        if (this.front === null && this.tail === null) {
            this.front = node
            this.tail = node
        } else {
            this.tail.next = node 
            this.tail = node
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
            this.tail = null; // Se a fila ficar vazia, tail também se torna null
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
    tail(){
        return this.isEmpty()? "A fila está vazia": this.tail.value
    }
    // Método para limpar a fila
    clear() {
        this.front = null 
        this.tail = null
        this._size = 0
    }
    print(){
        let temp = this.front
        while(temp !== null) {
            console.log(temp.value)
            temp = temp.next
        }
    }

    toArray(){

        let temp = this.front
        const array = []
        while(temp !== null) {
            array.push(temp.value)
            temp = temp.next
        }
        return array
    }
}

export {Queue}
