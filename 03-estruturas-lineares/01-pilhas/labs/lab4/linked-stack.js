// Classe Node para representar cada nó da pilha
class Node {
    constructor(valor) {
      this.valor = valor;  // Dado do nó
      this.proximo = null; // Referência para o próximo nó
    }
  }
  
  // Classe Stack para representar a pilha
  class Stack {
    constructor() {
      this.topo = null; // O topo da pilha começa vazio
      this.tamanho = 0; // Controle do tamanho da pilha
    }
  
    // Método para adicionar um elemento na pilha (push)
    push(valor) {
      const novoNo = new Node(valor); // Cria um novo nó
      novoNo.proximo = this.topo;     // Aponta o próximo nó para o nó atual do topo
      this.topo = novoNo;             // Atualiza o topo para ser o novo nó
      this.tamanho++;                 // Aumenta o tamanho da pilha
    }
  
    // Método para remover o elemento do topo da pilha (pop)
    pop() {
      if (this.isEmpty()) {
        return 'A pilha está vazia';  // Verifica se a pilha está vazia
      }
  
      const noRemovido = this.topo;   // Pega o nó do topo
      this.topo = this.topo.proximo;  // Atualiza o topo para o próximo nó
      this.tamanho--;                 // Diminui o tamanho da pilha
      return noRemovido.valor;        // Retorna o valor removido
    }
  
    // Método para ver o valor no topo da pilha (peek)
    peek() {
      if (this.isEmpty()) {
        return 'A pilha está vazia'; // Verifica se a pilha está vazia
      }
      return this.topo.valor; // Retorna o valor no topo
    }
  
    // Método para verificar se a pilha está vazia
    isEmpty() {
      return this.tamanho === 0;
    }
  
    // Método para ver o tamanho da pilha
    size() {
      return this.tamanho;
    }
  }
  
  // Exemplo de uso da pilha com nós
  const pilha = new Stack();
  
  pilha.push(10);
  pilha.push(20);
  pilha.push(30);
  
  console.log(pilha.peek());  // Output: 30 (valor no topo)
  console.log(pilha.pop());   // Output: 30 (remove e retorna o valor do topo)
  console.log(pilha.size());  // Output: 2 (dois elementos restantes)
  console.log(pilha.peek());  // Output: 20 (novo topo da pilha)
  console.log(pilha.isEmpty()); // Output: false (a pilha não está vazia)