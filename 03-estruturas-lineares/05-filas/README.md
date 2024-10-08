# Fila

Uma fila é uma coleção ordenada de itens que segue o princípio FIFO (First In First Out), também conhecido como o princípio de primeiro a entrar, primeiro a sair. A adição de novos elementos em uma fila ocorre na cauda, e a remoção é feita pela frente. O elemento mais recente adicionado à fila deve esperar no final da fila.  

O exemplo mais popular de uma fila na vida real. Temos filas para o cinema, a cafeteria e a fila do caixa em um supermercado, entre outros exemplos. A primeira pessoa que está na fila é a primeira que será atendida.

Um exemplo muito popular na Ciência da Computação é a fila de impressão. Suponha que precisamos imprimir cinco documentos. Abrimos cada documento e clicamos no botão de imprimir. Cada documento será enviado para a fila de impressão. O primeiro documento que pedimos para ser impresso será o primeiro a ser impresso, e assim por diante, até que todos os documentos sejam impressos.

## Operações básicas da Fila

Aqui estão as operações principais realizadas em uma fila:

Enqueue (inserir): Adiciona um elemento no final da fila.
Dequeue (remover): Remove o elemento da frente da fila.
Peek: Verifica o elemento na frente da fila sem removê-lo.
isEmpty: Verifica se a fila está vazia


## Implementação


A fila pode ser implementada de várias formas em JavaScript, como com arrays, objetos, ou classes. Vamos implementar usando uma classe.

Exemplo de implementação de Fila usando uma classe:

```js
// Implementação de uma classe Fila (Queue)
class Queue {
  constructor() {
    this.items = []; // Array para armazenar os elementos da fila
  }

  // Método para adicionar um elemento na fila (enqueue)
  enqueue(element) {
    this.items.push(element); // Adiciona o elemento no final da fila
  }

  // Método para remover o elemento da frente da fila (dequeue)
  dequeue() {
    if (this.isEmpty()) {
      return 'A fila está vazia'; // Verifica se a fila está vazia
    }
    return this.items.shift(); // Remove e retorna o primeiro elemento da fila
  }

  // Método para ver o elemento na frente da fila (peek)
  peek() {
    if (this.isEmpty()) {
      return 'A fila está vazia'; // Verifica se a fila está vazia
    }
    return this.items[0]; // Retorna o primeiro elemento sem removê-lo
  }

  // Método para verificar se a fila está vazia
  isEmpty() {
    return this.items.length === 0; // Retorna true se o array estiver vazio
  }

  // Método para verificar o tamanho da fila
  size() {
    return this.items.length; // Retorna o número de elementos na fila
  }

  // Método para limpar a fila
  clear() {
    this.items = []; // Limpa o array, removendo todos os elementos
  }
}

// Exemplo de uso da Fila
const fila = new Queue();

// Adicionando elementos à fila
fila.enqueue('Documento 1');
fila.enqueue('Documento 2');
fila.enqueue('Documento 3');

console.log(fila.peek());   // Output: 'Documento 1' (primeiro da fila)
console.log(fila.dequeue()); // Output: 'Documento 1' (remove o primeiro)
console.log(fila.size());    // Output: 2 (restam dois elementos)
console.log(fila.peek());   // Output: 'Documento 2' (novo primeiro da fila)

```

## Explicação do Código:
enqueue(element): Adiciona um elemento no final da fila com o método push(), que insere no final do array.
dequeue(): Remove o primeiro elemento da fila com shift(), que remove o primeiro item de um array.
peek(): Mostra o primeiro elemento da fila sem removê-lo.
isEmpty(): Verifica se a fila está vazia ao checar se o comprimento do array é 0.
size(): Retorna o tamanho da fila.
clear(): Remove todos os elementos da fila, limpando o array.

## Complexidade de Tempo:
enqueue: O tempo de inserção é O(1), pois estamos apenas adicionando ao final da fila.
dequeue: O tempo de remoção é O(n), pois shift() precisa reorganizar os índices do array após a remoção.
peek e isEmpty: Ambas as operações têm tempo O(1).


## Fila com Objeto para Melhor Desempenho
Usar um array para implementar uma fila pode ter uma desvantagem na operação dequeue(), já que shift() tem um custo O(n) para reorganizar os índices. Podemos melhorar isso usando um objeto para manter um índice separado para o início e o fim da fila.

Aqui está a implementação de uma fila usando um objeto:
```js
class QueueWithObject {
  constructor() {
    this.items = {};
    this.front = 0; // Índice do início da fila
    this.rear = 0;  // Índice do final da fila
  }

  // Adiciona um elemento no final da fila
  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  // Remove o elemento da frente da fila
  dequeue() {
    if (this.isEmpty()) {
      return 'A fila está vazia';
    }
    const removed = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return removed;
  }

  // Verifica o primeiro elemento sem removê-lo
  peek() {
    if (this.isEmpty()) {
      return 'A fila está vazia';
    }
    return this.items[this.front];
  }

  // Verifica se a fila está vazia
  isEmpty() {
    return this.rear === this.front;
  }

  // Tamanho da fila
  size() {
    return this.rear - this.front;
  }

  // Limpa a fila
  clear() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }
}

// Exemplo de uso da fila com objeto
const filaObj = new QueueWithObject();

filaObj.enqueue('A');
filaObj.enqueue('B');
filaObj.enqueue('C');

console.log(filaObj.peek());    // Output: 'A'
console.log(filaObj.dequeue()); // Output: 'A'
console.log(filaObj.size());    // Output: 2

```

Vantagens do Objeto:
A operação de dequeue() agora tem tempo O(1), pois não há necessidade de reorganizar os elementos após a remoção.
Melhor para grandes quantidades de dados ou em cenários de tempo crítico.

## Fila Ligada

Para implementar uma fila usando nós (nodes), também chamada de fila ligada (linked queue), utilizamos uma estrutura onde cada elemento (nó) contém duas partes:

O valor do elemento.
Uma referência para o próximo nó da fila.
Essa estrutura é útil pois permite que as operações de enqueue (inserir) e dequeue (remover) tenham complexidade constante O(1), já que não precisamos deslocar ou reorganizar elementos como em arrays.

```js
// Classe que representa um nó da fila
class Node {
  constructor(value) {
    this.value = value;   // Valor do nó
    this.next = null;     // Referência para o próximo nó
  }
}

// Classe que representa a fila
class LinkedQueue {
  constructor() {
    this.front = null;  // Referência para o primeiro nó (início da fila)
    this.rear = null;   // Referência para o último nó (final da fila)
    this.size = 0;      // Tamanho da fila
  }

  // Método para adicionar um elemento na fila (enqueue)
  enqueue(value) {
    const newNode = new Node(value);  // Cria um novo nó

    if (this.isEmpty()) {
      this.front = newNode;  // Se a fila estiver vazia, o novo nó é o primeiro
      this.rear = newNode;   // E também é o último
    } else {
      this.rear.next = newNode; // O último nó atual aponta para o novo nó
      this.rear = newNode;      // O novo nó se torna o último
    }
    this.size++; // Incrementa o tamanho da fila
  }

  // Método para remover um elemento da fila (dequeue)
  dequeue() {
    if (this.isEmpty()) {
      return 'A fila está vazia'; // Não há nada para remover
    }

    const removedValue = this.front.value; // Valor do nó removido
    this.front = this.front.next;          // O próximo nó se torna o primeiro

    if (!this.front) {
      this.rear = null; // Se a fila ficar vazia, rear também se torna null
    }

    this.size--; // Decrementa o tamanho da fila
    return removedValue;
  }

  // Método para ver o primeiro elemento da fila (peek)
  peek() {
    if (this.isEmpty()) {
      return 'A fila está vazia';
    }
    return this.front.value; // Retorna o valor do primeiro nó
  }

  // Método para verificar se a fila está vazia
  isEmpty() {
    return this.size === 0;
  }

  // Método para verificar o tamanho da fila
  getSize() {
    return this.size;
  }

  // Método para limpar a fila
  clear() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }
}

// Exemplo de uso da fila ligada
const filaLigada = new LinkedQueue();

// Adicionando elementos à fila
filaLigada.enqueue('Primeiro');
filaLigada.enqueue('Segundo');
filaLigada.enqueue('Terceiro');

console.log(filaLigada.peek());    // Output: 'Primeiro' (o primeiro da fila)
console.log(filaLigada.dequeue()); // Output: 'Primeiro' (remove o primeiro)
console.log(filaLigada.peek());    // Output: 'Segundo' (agora é o primeiro)
console.log(filaLigada.getSize()); // Output: 2 (restam dois elementos)
filaLigada.clear();
console.log(filaLigada.isEmpty()); // Output: true (a fila está vazia)

```

### Vantagens da implementação com nós (linked queue):
A operação enqueue e dequeue são realizadas em tempo constante O(1), pois não há necessidade de deslocar ou reorganizar elementos como acontece em um array.
Essa estrutura é eficiente para gerenciar filas dinâmicas de tamanho variável, já que não há necessidade de redimensionar arrays.

Implementar filas usando nós (fila ligada) é uma maneira eficiente de gerenciar coleções de elementos quando a inserção e remoção frequentes são necessárias. É particularmente útil quando não queremos os custos de realocação de memória que podem ocorrer em arrays.


# A fila de prioridade  

As filas são amplamente aplicadas na Ciência da Computação e também em nossas vidas, existem algumas versões modificadas da fila padrão que implementamos no tópico anterior. Uma versão modificada é a fila de prioridade. Os elementos são adicionados e removidos com base em uma prioridade. Um exemplo da vida real é a fila de embarque no aeroporto. Os passageiros da primeira classe e da classe executiva têm prioridade sobre os passageiros da classe econômica. 

Há situações em que pessoas idosas e mulheres grávidas (ou mulheres com recém-nascidos) também têm prioridades.  
Outro exemplo da vida real é a sala de espera de pacientes em um hospital (emergência). Pacientes em estado grave são atendidos por um médico antes dos pacientes em condições menos graves. Normalmente, uma enfermeira fará a triagem e atribuirá um código ao paciente, dependendo da gravidade da condição.  
Existem duas opções ao implementar uma fila de prioridade: você pode definir a prioridade e adicionar o elemento na posição correta, ou pode enfileirar os elementos à medida que são adicionados à fila e removê-los de acordo com a prioridade. Para este exemplo, adicionaremos os elementos em sua posição correta, para que possamos removê-los por padrão:"


```js
// Classe que representa um nó na fila de prioridade
class Node {
  constructor(value, priority) {
    this.value = value;       // Valor do nó
    this.priority = priority; // Prioridade do nó
  }
}

// Classe que representa a fila de prioridade
class PriorityQueue {
  constructor() {
    this.items = []; // Array para armazenar os nós
  }

  // Método para adicionar um elemento na fila com uma prioridade
  enqueue(value, priority) {
    const newNode = new Node(value, priority);

    // Se a fila estiver vazia, simplesmente adiciona o novo nó
    if (this.isEmpty()) {
      this.items.push(newNode);
    } else {
      // Encontra a posição correta para inserir o novo nó com base na prioridade
      let added = false;
      for (let i = 0; i < this.items.length; i++) {
        // Se a prioridade do novo nó for maior que a do nó atual
        if (newNode.priority > this.items[i].priority) {
          this.items.splice(i, 0, newNode); // Insere na posição correta
          added = true;
          break;
        }
      }
      // Se o nó não foi adicionado, significa que ele tem a menor prioridade
      if (!added) {
        this.items.push(newNode); // Adiciona no final da fila
      }
    }
  }

  // Método para remover o elemento com a maior prioridade
  dequeue() {
    if (this.isEmpty()) {
      return 'A fila está vazia'; // Não há nada para remover
    }
    return this.items.shift(); // Remove e retorna o primeiro nó
  }

  // Método para ver o primeiro elemento da fila (peek)
  peek() {
    if (this.isEmpty()) {
      return 'A fila está vazia';
    }
    return this.items[0]; // Retorna o nó com maior prioridade
  }

  // Método para verificar se a fila está vazia
  isEmpty() {
    return this.items.length === 0;
  }

  // Método para verificar o tamanho da fila
  size() {
    return this.items.length;
  }

  // Método para limpar a fila
  clear() {
    this.items = [];
  }
}

// Exemplo de uso da Fila de Prioridade
const filaPrioridade = new PriorityQueue();

// Adicionando elementos com prioridade
filaPrioridade.enqueue('Paciente A', 2); // Prioridade 2
filaPrioridade.enqueue('Paciente B', 5); // Prioridade 5
filaPrioridade.enqueue('Paciente C', 1); // Prioridade 1
filaPrioridade.enqueue('Paciente D', 3); // Prioridade 3

console.log(filaPrioridade.peek()); // Output: { value: 'Paciente B', priority: 5 }
console.log(filaPrioridade.dequeue()); // Output: { value: 'Paciente B', priority: 5 }
console.log(filaPrioridade.peek()); // Output: { value: 'Paciente D', priority: 3 }
console.log(filaPrioridade.size()); // Output: 3

```

A diferença entre a implementação das classes Queue padrão e PriorityQueue é que precisamos criar um elemento especial (linha {1}) para ser adicionado à PriorityQueue. Este elemento contém o elemento que desejamos adicionar à fila (pode ser de qualquer tipo), além da prioridade na fila.

Primeiro, precisamos comparar sua prioridade com os demais elementos (linha {2}). Quando encontramos um item que tem uma prioridade maior do que o elemento que estamos tentando adicionar, então inserimos o novo elemento uma posição antes (com essa lógica, também respeitamos os outros elementos com a mesma prioridade, mas que foram adicionados à fila primeiro). Para fazer isso, podemos usar o método splice da classe array do JavaScript que você aprendeu no Capítulo 2, Arrays. Uma vez que encontramos um elemento com uma prioridade mais alta, inserimos o novo elemento (linha {3}), e paramos de percorrer a fila (linha {4}). Dessa forma, nossa fila também será organizada e classificada por prioridade.

Além disso, se a prioridade que estamos adicionando for maior do que qualquer prioridade já adicionada, ou se a fila estiver vazia, simplesmente a adicionamos ao final da fila (linha {5}).