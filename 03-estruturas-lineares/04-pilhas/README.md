# Pilhas

Arrays, que são o tipo mais comum de estrutura de dados na computação. Como você aprendeu, podemos adicionar e remover elementos de um array em qualquer índice desejado. No entanto, às vezes precisamos de uma forma de estrutura de dados onde tenhamos mais controle sobre a adição e remoção de itens. Existem algumas estruturas de dados que possuem algumas semelhanças com os arrays, mas que nos dão mais controle sobre a adição e remoção de elementos. Uma delas é a Pilha.

## Definição

Uma pilha (stack) é uma estrutura de dados muito comum que segue o princípio LIFO (Last In, First Out), ou seja, o último elemento adicionado à pilha é o primeiro a ser removido. Podemos imaginar uma pilha como uma pilha de pratos: o último prato colocado no topo da pilha é o primeiro a ser retirado.


## Operações

Operações principais em uma pilha
Push: Adiciona um elemento no topo da pilha.
Pop: Remove o elemento do topo da pilha.
Peek (ou Top): Olha o elemento do topo sem removê-lo.
IsEmpty: Verifica se a pilha está vazia.
Size: Retorna o tamanho da pilha.
Essas operações são básicas e permitem manipular dados de forma simples, mas eficaz.


## Implementações

### Implementação Estática 

1. Usando Arrays em JavaScript
Em JavaScript, os arrays podem ser facilmente usados para implementar uma pilha, pois eles já têm métodos como push() e pop().


```js
let stack = [];

// Adicionando elementos na pilha (push)
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack);  // Output: [1, 2, 3]

// Removendo o último elemento da pilha (pop)
let lastItem = stack.pop();
console.log(lastItem);  // Output: 3
console.log(stack);     // Output: [1, 2]

// Ver o elemento do topo da pilha (peek)
let topItem = stack[stack.length - 1];
console.log(topItem);   // Output: 2

```


2. Implementação com Classes
Agora, vamos implementar uma pilha usando classes para ter mais controle sobre a estrutura de dados e facilitar sua reutilização.


```js
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

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek());  // Output: 30
console.log(stack.pop());   // Output: 30
console.log(stack.size());  // Output: 2

```

3. Casos de uso de uma Pilha
Pilhas são muito úteis em várias situações. Aqui estão alguns exemplos:

Funções Recursivas: Toda vez que uma função chama a si mesma, a execução atual é armazenada em uma pilha de chamadas.

Navegação no navegador: Quando você navega em páginas da web, o histórico é armazenado em uma pilha. Ao pressionar o botão "voltar", a página anterior é retirada da pilha.

Expressões Matemáticas (Conversão e Avaliação): Pilhas são amplamente utilizadas em algoritmos que convertem ou avaliam expressões matemáticas.

Desfazer/Refazer em editores de texto: As ações realizadas são armazenadas em uma pilha. Quando você clica em "Desfazer", a última ação é removida.

4. Complexidade de Tempo
Push: O tempo para adicionar um elemento na pilha é O(1).
Pop: O tempo para remover um elemento do topo da pilha também é O(1).
Peek: Visualizar o elemento no topo da pilha é O(1).
Resumo
Uma pilha segue a regra LIFO (Last In, First Out).
As operações mais comuns são push, pop, peek, isEmpty e size.
Você pode implementar uma pilha de maneira simples usando arrays ou criando uma classe em JavaScript para personalizar suas funcionalidades.

### Implementação Encadeada

Para entender a implementação de pilhas (stacks) com nós em JavaScript, é importante compreender a ideia de usar uma lista encadeada (ou linked list) em vez de um array. Usar nós permite uma implementação flexível, que facilita a adição e remoção de elementos sem realocação de memória, como em arrays.

1. Conceito de Nó
Um nó em uma lista encadeada tem duas partes:

O valor ou dado que o nó armazena.
Um ponteiro (ou referência) para o próximo nó na pilha.
Quando falamos de pilhas, a operação principal acontece no topo. Portanto, precisamos de uma estrutura onde seja fácil adicionar e remover nós do topo.

2. Estrutura da Pilha com Nós
Cada elemento da pilha é um nó.
A pilha mantém uma referência ao topo da pilha, que aponta para o nó mais recente inserido.
A operação push adiciona um novo nó no topo.
A operação pop remove o nó do topo.
3. Implementação da Pilha com Nós
Vamos criar uma classe Node para representar cada nó da pilha e uma classe Stack para a estrutura da pilha.

Classe Node
A classe Node terá duas propriedades:

Valor: O dado armazenado no nó.
Próximo: A referência para o próximo nó.
Classe Stack
A classe Stack terá:

Um ponteiro para o topo da pilha.
Métodos como push, pop, peek, e isEmpty.
Exemplo de implementação:

```js
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

```

Explicação do Código:
A classe Node é responsável por armazenar o valor e uma referência para o próximo nó na pilha.
A classe Stack gerencia a pilha propriamente dita, contendo o ponteiro para o topo da pilha e o número de elementos.
O método push adiciona um novo nó no topo da pilha.
O método pop remove e retorna o valor do nó no topo da pilha.
O método peek apenas retorna o valor no topo da pilha sem removê-lo.
O método isEmpty verifica se a pilha está vazia.
4. Complexidade de Tempo
Push: A adição de um nó no topo da pilha ocorre em O(1).
Pop: A remoção do nó do topo também ocorre em O(1).
Peek: Olhar o valor do topo é uma operação de tempo constante, O(1).
5. Vantagens da Implementação com Nós
O uso de nós evita o realocamento de memória, como acontece em arrays.
A implementação é mais eficiente em termos de inserções e remoções constantes no topo.
Resumo:
Pilhas com nós oferecem uma maneira eficiente de organizar e manipular dados, especialmente quando o tamanho da estrutura é dinâmico.
Usar nós permite criar uma estrutura mais flexível em comparação com arrays, sem precisar lidar com o redimensionamento do array.
Essa implementação é muito útil em algoritmos que exigem controle explícito da memória, como na avaliação de expressões matemáticas, navegação entre páginas de um navegador, ou funções recursivas.


## Resolvendo problemas usando pilhas

Pilhas têm uma variedade de aplicações em problemas do mundo real. Elas podem ser usadas em problemas de retrocesso (backtracking) para lembrar tarefas ou caminhos visitados, e para desfazer ações (aprenderemos como aplicar esse exemplo quando discutirmos grafos e problemas de retrocesso mais adiante). 

As linguagens de programação Java e C# usam pilhas para armazenar variáveis e chamadas de métodos, e há uma exceção de estouro de pilha (stack overflow) que pode ser lançada especialmente ao trabalhar com algoritmos recursivos (os quais também cobriremos mais adiante neste livro).
Agora que sabemos como usar uma Pilha, vamos utilizá-la para resolver alguns problemas. Nesta seção, aprenderemos os três exemplos de algoritmos mais famosos que utilizam uma pilha. Iremos abordar o problema de conversão de decimal para binário, onde também transformaremos o algoritmo em um conversor de bases, o problema dos parênteses balanceados, e, finalmente, aprenderemos a resolver o problema da Torre de Hanói usando pilhas.

### Decimal para binário

Você provavelmente já está familiarizado com a base decimal. No entanto, a representação binária é muito importante na Ciência da Computação, pois tudo em um computador é representado por dígitos binários (0 e 1). Sem a capacidade de converter de decimal para binário e vice-versa, seria um pouco difícil se comunicar com um computador.

Para converter um número decimal em uma representação binária, podemos dividir o número por 2 (binário é um sistema numérico de base 2) até que o resultado da divisão seja 0. Como exemplo, vamos converter o número 10 em dígitos binários:
Essa conversão é uma das primeiras coisas que você aprende na faculdade (nas aulas de Ciência da Computação). A seguir está o nosso algoritmo:


```js
function divideBy2(decNumber){
  var remStack = new Stack(),
  rem,
  binaryString = '';
  while (decNumber > 0){ //{1}
    rem = Math.floor(decNumber % 2); //{2}
    remStack.push(rem); //{3}
    decNumber = Math.floor(decNumber / 2); //{4}
  }
  while (!remStack.isEmpty()){ //{5}
    binaryString += remStack.pop().toString();
  }
  return binaryString;
 }
```


Podemos facilmente modificar o algoritmo anterior para que funcione como um conversor de decimal para qualquer base. Em vez de dividir o número decimal por 2, podemos passar a base desejada como um argumento para o método e usá-la nas divisões, conforme mostrado no algoritmo a seguir:

```js
 function baseConverter(decNumber, base){
  var remStack = new Stack(),
  rem,
  baseString = '',
  digits = '0123456789ABCDEF'; //{6}
  while (decNumber > 0){
    rem = Math.floor(decNumber % base);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / base);
  }
  while (!remStack.isEmpty()){
    baseString += digits[remStack.pop()]; //{7}
  }
  return baseString;
 }
 ```