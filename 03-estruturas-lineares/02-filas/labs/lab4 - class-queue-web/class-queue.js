class Queue {
    constructor(){
        this.items = []
    }
    // Método para adicionar um elemento na fila 
    enqueue(element){
        this.items.push(element)
    }
    // Método para remover o elemento da frente da fila
    dequeue(){
        if (this.isEmpty()){
            return "A fila está vazia"
        }
        return this.items.shift()
    }
    // Método para verificar o tamanho da fila
    size(){
        return this.items.length
    }
    // Método para verificar se a fila está vazia
    isEmpty(){
        return this.items.length === 0
    }
    // Método para ver o elemento na frente da fila
    front(){
        return this.isEmpty()? "A fila está vazia": this.items[0]
    }
    // Método para ver o elemento no final da fila
    rear(){
        return this.isEmpty()? "A fila está vazia": this.items[this.size()-1]
    }
    // Método para limpar a fila
    clear() {
        this.items = []; // Limpa o array, removendo todos os elementos
    }
}

export {Queue}
