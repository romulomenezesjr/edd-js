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
    }

    shift(value){
        let no = new Node(value)

        if (this.start == null ) {
            this.start = no
            this.end = no
        } else {
            no.next = this.start
            this.start = no
        }
    }

    append(value) {
        let no = new Node(value)

        if (this.end === null) {
            this.start = no
            this.end = no
        } else {
            this.end.next = no
            this.end = no
        }
       
    }

    size(){
        let temp = this.start
        let length = 0
        while (temp !== null) {
            temp = temp.next
            length += 1
        }
        return length
    }

    print(){
        console.log("Tamanho: " + this.size())
        if (this.start === null) {
            console.log("A lista está vazia.")
        } else {
            let temp = this.start
            while (temp !== null) {
                console.log(temp.value)
                temp = temp.next
            }
        }
    }
}

let lista = new List()
lista.print()
