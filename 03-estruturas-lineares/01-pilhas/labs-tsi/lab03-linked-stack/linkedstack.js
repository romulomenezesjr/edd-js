class Node {
    constructor(value){
        this.value = value
        this.prev = null
    }
}

export default class LinkedStack {
    constructor(){
        this.top = null
    }
    
    push(value) {
        const node = new Node(value)
        if (this.isEmpty()){
            this.top = node
        } else {
            node.prev = this.top
            this.top = node
        }
    }

    pop(){
        if (this.isEmpty()){
            console.log("A pilha está vazia")
            return null
        } else {
            const value = this.top.value
            this.top = this.top.prev
            return value
        }
        
    }

    isEmpty(){
        return this.top === null
    }

    peek(){
        if (this.isEmpty()){
            console.log("A pilha está vazia")
            return null
        }
        return this.top.value
    }

    size(){
        let temp = this.top
        let _size = 0
        while (temp !== null){
            _size += 1
            temp = temp.prev
        }
        return _size
    }

}
