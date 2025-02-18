

# Pilhas

Até agora estudamos a manipulação dos arrays, um tipo de estrutura de utilização genérica comum na computação. Como você aprendeu, podemos adicionar e remover elementos de um array em qualquer índice desejado. No entanto, às vezes precisamos de uma forma de estrutura de dados onde tenhamos mais controle sobre a adição e remoção de itens. 

Existem algumas estruturas de dados que possuem algumas semelhanças com os arrays, mas que nos dão mais controle sobre a adição e remoção de elementos. Uma delas é a Pilha.

Esta estrutura recebeu este nome pois se comporta da mesma forma que uma pilha de itens, como pilha de roupas ou de pratos.

![alt text](https://www.tutorialspoint.com/data_structures_algorithms/images/stack_example.jpg)


## Definição

Uma pilha (stack) é uma estrutura de dados muito comum que segue o princípio LIFO (Last In, First Out), ou seja, o último elemento adicionado à pilha é o primeiro a ser removido. Podemos imaginar uma pilha como uma pilha de pratos: o último prato colocado no topo da pilha é o primeiro a ser retirado.

![alt text](https://www.tutorialspoint.com/data_structures_algorithms/images/stack_representation.jpg)


Podemos fazer algumas considerações sobre os elementos:
- Itens mais perto da base são aqueles que estão na pilha a mais tempo;
- Itens inseridos recentemente estão mais perto do topo; 
- O último item inserido é aquele que está na posição em que pode ser removido primeiro;

## Casos de uso

Pilhas são muito úteis em várias situações. Aqui estão alguns exemplos:

- O sistema operacional armazena a chamada em uma pilha na memória quando estamos fazendo uso funções que executam outras funções. Assim que as instruções return são encontradas, as funções devolvem o valor e, são desempilhadas da memória. Veja o exemplo a seguir de uma função recursiva: Uma função que chama a si, enquanto não chegar à condição de parada, terá a execução armazenada em uma pilha de chamadas (call stack).

<div style="text-align: center; margin: 1rem">
<img src="https://pbs.twimg.com/media/Et0ScQ8XEAYbXob.png">
</div>

- À medida que você navega de uma página web para outra página, a url das páginas são colocadas em uma pilha. A página atual está no topo e a primeira página que você olhou está na base. Se você clicar no botão Voltar, você começa a se mover pelas páginas na ordem inversa.

- Em um editor de texto a pilha é utilizada para armazenar as versões digitadas. Ao realizar uma nova inserção de texto, o novo texto pode ser empilhado. Para desfazer a edição e retornar ao último estado basta desempilhadar a pilha.

<div style="text-align: center; margin: 1rem">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUvJr1d3oMT9g1zDd-EMnS-qq53aPwIYcw1Q&s">
</div>

- Expressões Matemáticas (Conversão e Avaliação): Pilhas são amplamente utilizadas em algoritmos que convertem ou avaliam expressões matemáticas. 
  - Podemos utilizar as pilhas para avaliar os balanceamento de parenteses 
  - Conversão de números entre diferentes bases numéricas.
  - Avaliações de expressões infixas, prefixas e posfixas
  - Reversão de informações

## Operações

O tipo abstrato de dados pilha é definido pelas seguintes operações

- push: Adiciona um elemento no topo da pilha.
- pop: Remove o elemento do topo da pilha.
- peek (ou Top): Olha o elemento do topo sem removê-lo.
- isEmpty: Verifica se a pilha está vazia.
- size: Retorna o tamanho da pilha.

Essas operações são básicas e permitem manipular dados de forma simples, mas eficaz.

## Implementações

A pilha pode ser implementada de várias formas em JavaScript, como com arrays, objetos e classes. 

### Implementação usando Arrays

Em JavaScript, os arrays podem ser facilmente usados para implementar uma pilha, pois eles já possuem métodos como push() e pop(). Os outros métodos presentes na pilha são apenas acesso ao conteúdo do array e à propriedade length.

Arquivo **stack.js**

```js
const stack = []

function push(value){
    stack.push(value)
}
function pop(){
    return stack.pop()
}
function peek(){
    return stack[size()-1]
}
function isEmpty(){
    return size() === 0
}
function size(){
    return stack.length 
}
export {push, pop, peek, isEmpty, size, stack}

```

Podemos utilizar esta implementação a partir de outro arquivo **app.js**.

```js
import {push, pop, peek, size, isEmpty, stack  } from './stack.js'

console.log(isEmpty())
push(4)
push('dog')
console.log(peek())
push(true)
console.log(size())
console.log(isEmpty())
push(8.4)
console.log(pop())
console.log(pop())
console.log(size())

```

### Implementação usando Classes

Na nossa segunda implementação vamos utilizar classes para abstrair o conceito de pilha e empacotar as operações desta estrutura. Assim, podemos ter mais controle sobre a estrutura e facilitar sua utilização.

Arquivo **stack-class.js**

```js
class Stack{
    constructor(){
        this.stack = []
    }

    push(value){
        this.stack.push(value)
    }
    pop(){
        return this.stack.pop()
    }
    peek(){
        return this.stack[this.size()-1]
    }
    isEmpty(){
        return this.size() === 0
    }
    size(){
        return this.stack.length 
    }
}
export {Stack}
```

Podemos utilizar esta implementação em outro arquivo **app.js**

```js
import {Stack } from './stack-class.js'

const s = new Stack()
console.log(s.isEmpty())
s.push(4)
s.push('dog')
console.log(s.peek())
s.push(true)
console.log(s.size())
console.log(s.isEmpty())
s.push(8.4)
console.log(s.pop())
console.log(s.pop())
console.log(s.size())

```


### Implementação Pilha Encadeada

#### Conceito de Nó

Precisamos de uma estrutura onde seja fácil armazenar os dados e fazer ligações com outra parte da pilha. Chamaremos essa estrutura de nó (Node) e ele consiste de duas partes:
  - O valor ou dado que o nó armazena.
  - Um ponteiro (ou referência) para o próximo nó na pilha.

#### Implementação dos Nós

Vamos criar uma classe Node para representar cada nó da lista e ela terá duas propriedades:
- Valor: O dado armazenado no nó.
- Próximo: A referência para o próximo nó.


```js
// Classe Node para representar cada nó da pilha
class Node {
  constructor(valor) {
    this.valor = valor;  // Dado do nó
    this.proximo = null; // Referência para o próximo nó
  }
}

```

#### Implementação da Pilha

Para entender a implementação de pilhas (stacks) com nós é importante compreender a ideia de usar elementos ligados entre si em vez de um array. Usar nós permite uma implementação flexível, que facilita a adição e remoção de elementos sem realocação de memória ou alteração de índices.

Cada elemento da pilha é um nó. A pilha mantém uma referência ao topo da pilha, que aponta para o nó mais recente inserido.
- A operação push adiciona um novo nó no topo.
- A operação pop remove o nó do topo.
- A operação peek retorna o valor presente no nó do topo
- A operação size retorna a quantidade de elementos na pilha
- A operação isEmpty retorna se a pilha está vazia.

#### Implementação da Pilha

A classe Stack terá:

- Um ponteiro para o topo da pilha.
- Métodos como push, pop, peek, e isEmpty.


```js
// Classe Node para representar cada nó da pilha
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
```

Explicação do Código:
- A classe Node é responsável por armazenar o valor e uma referência para o próximo nó na pilha.
- A classe Stack gerencia a pilha propriamente dita, contendo o ponteiro para o topo da pilha e o número de elementos.
- O método push adiciona um novo nó no topo da pilha.
- O método pop remove e retorna o valor do nó no topo da pilha.
- O método peek apenas retorna o valor no topo da pilha sem removê-lo.
- O método isEmpty verifica se a pilha está vazia.

#### Vantagens da Implementação com Nós

Em diversas linguagens os arrays são alocados de forma fixa na memória e a utilização de nós evita o trabalho de  realocação. Essa implementação é muito útil em algoritmos que exigem controle explícito da memória, como na avaliação de expressões matemáticas, navegação entre páginas de um navegador, ou funções recursivas.

Na linguagem Javascript os arrays são objetos e seus elementos são alocados de forma esparça na memória. A implementação usando nós no Javascript nos mostra como a alocação esparça funciona, sendo mais eficiente em termos de inserções e remoções constantes no topo.

Usar nós permite criar uma estrutura mais flexível em comparação com arrays fixos usandos em diversas linguagens ( e até mesmo em Javascript [TypedArray](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Typed_arrays)), sem precisar lidar com o redimensionamento do array.



### Utilizando as operações

Podemos utilizar as operações implementadas da Stack para testar o funcionamento da nossa pilha. Realize as chamadas dos métodos do quadro a seguir:

![Testando a classe Stack](./img/testing-stack.png)

### Complexidade de Tempo

- push: O tempo para adicionar um elemento na pilha é O(1).
- pop: O tempo para remover um elemento do topo da pilha também é O(1).
- peek: Visualizar o elemento no topo da pilha é O(1).
- isEmpty:


As operações mais comuns são push, pop, peek, isEmpty e size.
Você pode implementar uma pilha de maneira simples usando arrays ou criando uma classe em JavaScript para personalizar suas funcionalidades.

## Resolvendo problemas usando pilhas

Pilhas têm uma variedade de aplicações em problemas do mundo real. Elas podem ser usadas em problemas de retrocesso (backtracking) para lembrar tarefas ou caminhos visitados, e para desfazer ações (aprenderemos como aplicar esse exemplo quando discutirmos grafos e problemas de retrocesso mais adiante). 

As linguagens de programação usam pilhas para armazenar variáveis e chamadas de métodos, e há uma exceção de estouro de pilha (stack overflow) que pode ser lançada especialmente ao trabalhar com algoritmos recursivos.

Agora que sabemos como usar uma Pilha, vamos utilizá-la para resolver alguns problemas. Nesta seção, aprenderemos os três exemplos de algoritmos mais famosos que utilizam uma pilha. 

- Conversão de decimal para binário
- Balanceamento de parênteses 
- Torre de Hanói usando pilhas

### Decimal para binário

Você provavelmente já está familiarizado com a base decimal. No entanto, a representação binária é muito importante na Ciência da Computação, pois tudo em um computador é representado por dígitos binários (0 e 1). Sem a capacidade de converter de decimal para binário e vice-versa, seria um pouco difícil se comunicar com um computador.

Para converter um número decimal em uma representação binária, podemos dividir o número por 2 (binário é um sistema numérico de base 2) até que o resultado da divisão seja 0. Como exemplo, vamos converter o número 10 em dígitos binários:
Essa conversão é uma das primeiras coisas que você aprende na faculdade (nas aulas de Ciência da Computação). A seguir está o nosso algoritmo:


```js
function divideBy2(decNumber){
  const restoStack = new Stack()
  let resto, binaryString = ''

  while (decNumber > 0){ 
    resto = parseInt(decNumber % 2)
    restoStack.push(resto) 
    decNumber = parseInt(decNumber / 2)
  }
  while (!restoStack.isEmpty())
    binaryString += restoStack.pop().toString()
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

 ### Balanceamento de Parenteses

 ### Torre de Hanoi