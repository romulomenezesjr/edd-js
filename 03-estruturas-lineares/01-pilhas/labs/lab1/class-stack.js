class Stack {

    constructor(){
        this.pilha = []
    }

    push(item){
        this.pilha.push(item)
    }

    pop(){
        return this.pilha.pop()
    }

    peek(){
        const pos_ultimo = this.pilha.length - 1
        const ultimo = this.pilha[pos_ultimo]
        return ultimo
    }

    isEmpty(){
        if (this.pilha.length > 0) {
            return false
        } else {
            return true
        }
    }

    size(){
        return this.pilha.length
    }

}

const s = new Stack()

console.log(s.isEmpty())
s.push(4)
s.push("dog")
console.log(s.peek())
s.push(true)
console.log(s.size())
s.push(8.4)
console.log(s.pop())
console.log(s.pop())
console.log(s.pop())
console.log(s.size())

