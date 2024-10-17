class Stack {
    constructor() {
        this.items = [];
    }

    // Adicionar item à pilha (push)
    push(element) {
        this.items.push(element);
    }

    // Remover o último item da pilha (pop)
    pop() {
        if (this.isEmpty()) {
            return 'Stack is empty';
        }
        return this.items.pop();
    }

    // Ver o último item sem remover (peek)
    peek() {
        if (this.isEmpty()) {
            return 'Stack is empty';
        }
        return this.items[this.items.length - 1];
    }

    // Verificar se a pilha está vazia
    isEmpty() {
        return this.items.length === 0;
    }

    // Ver o tamanho da pilha
    size() {
        return this.items.length;
    }

    // Limpar a pilha
    clear() {
        this.items = [];
    }
}

export {Stack}