export class Node {
    constructor(element, next = null) {
        this.element = element
        this.next = next
    }

    toString(){
        return this.next!==null
        ?  this.element + " -> " + this.next.toString()
        : this.element
    }
}

export class LinkedList {
    constructor(){
        this.head = null
        this._size = 0
    }

    /**
     * Inserir um novo elemento no final da lista
     */
    append(element){
        const node = new Node(element)
        if (this.size () === 0) {
            this.head = node
        } else {
            let current = this.head
            while (current.next !== null) {
                current = current.next
            }
            current.next = node
        }
        this._size++
    }

    /**
     * Insere um elemento em uma dada posição
     */
    insert(position, element) {
        const node = new Node(element)
        if (position === 0) {
            node.next = this.head
            this.head = node
            this._size ++
        } else if (position > 0 && position <= this.size()) {
            let pos = 0
            let current = this.head
            let previous = null
            while (pos < position) {
                previous = current
                current = current.next
                pos++
            }

            previous.next = node
            node.next = current
            this._size++
        }

    }

    /**
     * Remover um dado elemento
     */
    remove(element){
        const pos = this.indexOf(element)
        if (pos < 0) {
            this.removeAt(pos)
        }
    }

    /**
     * Remover um elemento dada uma posição
     */
    removeAt(position){
        if (position >= this.size()) {
            console.log(`Posição inválida. Escolha o intervalo de 0 até ${this.size() - 1}`)
            return
        }

        if (position == 0) {
            this.head = this.head.next
            this._size--
        } else if (position > 0  && position < this.size()) {
            let pos = 0
            let current = this.head
            while(pos < position - 1){
                current = current.next
                pos++
            } 
            current.next = current.next.next
            this._size--
        }
    }

    /**
     * Informa a posição de um dado elemento na lista
     */
    indexOf(element){
        if (this.size() > 0) {
            let pos = 0
            let current = this.head
            while (current.next !== null) {
                if (current.element == element) {
                    return pos
                }
                pos++
                current = current.next
            }
        }
        return -1
    }

    /**
     * Imprimir todos os nós até chegar no final da lista
     */
    toString(){
        if (this.size () === 0) {
            return "Lista vazia"
        }
        return this.head.toString()

    }

    /**
     * Retornar a quantidade de elementos na lista
     */
    size(){
        return this._size
    }

    /**
     * Informa se a lista está vazia
     */
    isEmpty(){
        return this.size() === 0
    }

    /**
     * Reinicia a lista removendo os seus elementos
     */
    clear(){
        this.head = null
        this._size = 0
    }



}

