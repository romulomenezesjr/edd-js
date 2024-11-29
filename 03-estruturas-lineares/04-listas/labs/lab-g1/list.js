class Node {
    constructor(value){
        this.value = value
        this.next = null
    }    
}

class List {
    constructor(){
        this.start = null
        this.end = null
        this.size = 0
    }
    // insere no fim
    append(value){
        let node = new Node(value)
        if (this.end !== null) {
            this.end.next = node
            this.end = this.end.next
        } else {
            this.end = node
        }
         
        if (this.start === null) {
            this.start = node
        }
        this.size += 1
    }
    // remove do fim
    pop(){

    }
    // insere no inicio
    shift(value) {
        let node = new Node(value)

        if (this.start !== null) {
            node.next = this.start
            this.start = node
        } else {
            this.start = node
            this.end = node
        }

        this.size += 1
    }

    // remove do inicio
    unshift(){

    }

    // inserir 'value' na posicao 'pos'
    insert(value, pos){
        
    }

    // remover algum valor na posição 'pos'
    delete(pos){

    }

    // pesquisa um valor e retorna a posição 
    // na lista
    search(value){

    }

    print(){
        let temp = this.start
        while (temp !== null) {
            console.log(temp.value)
            temp = temp.next
        }
    }
}

let lista = new List()
lista.append(33)
lista.append(34)
lista.append(35)
lista.shift(0)
lista.shift(1)
//1 0 33 34 35
lista.print()
lista.search(33)