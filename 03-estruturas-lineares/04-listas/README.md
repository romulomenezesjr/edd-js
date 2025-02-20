# Listas

As listas são uma das ferramentas de organização mais comuns que as pessoas utilizam no dia a dia. Temos listas de tarefas, listas de compras, listas dos dez melhores, listas dos dez piores e muitos outros tipos. Nossas aplicações no computador também costumam utilizar listas, especialmente quando temos diversos itens para manipular da mesma forma. Elas são especialmente úteis quando não precisamos realizar buscas constantemente nos itens ou organizá-los em algum tipo de ordem específica.

Quando precisamos realizar buscas rápidas, realizar ordenações constantes as listas ou fazer muitas modificações nos elementos centrais as listas se tornam menos úteis. Para estes casos podemos utilizar estruturas como sets, árvores ou deques.

Inicialmente vamos projetar um TAD para uma lista. Desta forma precisamos fornecer as propriedades e as operações que podem ser realizadas sobre ela ou por ela.

## Exemplos no nosso cotidiano

- Redes Sociais (Facebook, Instagram, Twitter, LinkedIn)
    - Lista de amigos/seguidores.
    - Lista de postagens e comentários.
    - Lista de notificações.

- Jogos Online e Aplicativos de Classificação
    - Lista de jogadores online.
    - Lista de pontuações (ranking/leaderboard).
    - Lista de itens coletados pelo jogador.

- Sistemas de Busca (Google, Bing)
    - Listas de resultados de pesquisa.
    - Listas de sugestões automáticas (autocomplete)

## Definição

Uma lista é uma sequência ordenada de dados. Cada item de dado armazenado em uma lista é chamado de elemento. Em JavaScript, os elementos de uma lista podem ser de qualquer tipo de dado. Não há um número predefinido de elementos que podem ser armazenados em uma lista, embora o limite prático seja a quantidade de memória disponível para o programa que está utilizando a lista.

Uma lista sem elementos é chamada de lista vazia. O número de elementos armazenados em uma lista é conhecido como o comprimento da lista. Internamente, esse número é mantido em uma variável chamada listSize.

## Operações

Estas são as operações comuns de uma lista:

- append(element) - Adicionar elementos no final da lista
- insert(position, element) - Inserir elementos em uma posição específica.
- remove(element) - Remover um elemento da lista.
- removeAt(position) - Remover elementos em uma posição específica.
- indexOf(element) - Retorna a posição de um dado elemento
- isEmpty() - Retorna se a lista está vazia
- size() - Retorna o tamanho da lista
- toString() - Retorna a lista como texto
- print() - Imprime os elementos da lista
- clear() - Limpar a lista removendo todos os elementos atuais para torná-la vazia.

Esses conceitos formam a base para o design e a implementação de um ADT de lista em qualquer linguagem de programação.


## Arrays no Javascript e Listas


Cada linguagem possui sua própria implementação de arrays, existem linguagens que implementam arrays com tamanhos fixos (na maioria das linguagens) e linguagens que tratam arrays como objetos (javascript). Os arrays na linguagem javascript são implementados com diversas operações similares às de uma lista. Veja a seguir as operações implementadas pelo tipo [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)


- [Array.prototype.push()
](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/push) - Adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.
- [Array.prototype.shift()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) - Remove o primeiro elemento de um array e retorna esse elemento. Este método muda o tamanho do array.
- [Array.prototype.unshift()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) - Adiciona um ou mais elementos no início de um array e retorna o número de elementos (propriedade length) atualizado..
- [Array.prototype.splice()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) - Altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
- [Array.prototype.length](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/length) - A propriedade length representa um inteiro de 32-bit sem sinal, que especifíca o número de elementos em um array.
- [Array constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array) - Cria um novo array



Embora essa estrutura seja muito conveniente e nos fornece uma sintaxe prática com [] para acessar seus elementos, ela possui desvantagens ao realizar algumas operações, como inserir ou remover itens do início ou do meio do array. Estas operações são consideradas "caras" pois os elementos precisam ser realocados (em outras linguagens) ou os índices precisam ser realocados (em javascript).

## Implementação

A lista pode ser implementada de várias formas em JavaScript, como com arrays, objetos, ou classes.

## Implementação com Arrays


Em JavaScript, os arrays podem ser facilmente usados para implementar uma lista, pois ele já possui diversos métodos para compor as operações. Aqui estamos utilizando nomes das funções mais convencionais para listas

```js
const items = []; // Inicializa a lista como um array vazio

// Adicionar elementos no final da lista
function append(element) {
  items.push(element);
}

// Inserir elementos em uma posição específica
function insert(position, element) {
  if (position >= 0 && position <= items.length) {
    items.splice(position, 0, element);
    return true;
  }
  return false;
}

// Remover um elemento da lista
function remove(element) {
  const index = indexOf(element);
  if (index !== -1) {
    removeAt(index);
    return true;
  }
  return false;
}

// Remover elementos em uma posição específica
function removeAt(position) {
  if (position >= 0 && position < items.length) {
    return items.splice(position, 1)[0];
  }
  return null;
}

// Retorna a posição de um dado elemento
function indexOf(element) {
  return items.indexOf(element);
}

// Retorna se a lista está vazia
function isEmpty() {
  return items.length === 0;
}

// Retorna o tamanho da lista
function size() {
  return items.length;
}

// Retorna a lista como texto
function toString() {
  return items.join(", ");
}

// Imprime os elementos da lista
function print() {
  console.log(toString());
}

// Limpa a lista removendo todos os elementos
function clear() {
  items.length = 0;
}

// Exemplo de uso
append("A");
append("B");
insert(1, "C");
print(); // A, C, B
remove("C");
print(); // A, B
removeAt(0);
print(); // B

``` 


## Implementação com Classes e Arrays



```js
class ArrayList {
  constructor() {
    this.items = []; // Atributo para armazenar os elementos
  }

  // Adicionar elementos no final da lista
  append(element) {
    this.items.push(element);
  }

  // Inserir elementos em uma posição específica
  insert(position, element) {
    if (position >= 0 && position <= this.items.length) {
      this.items.splice(position, 0, element);
      return true;
    }
    return false;
  }

  // Remover um elemento da lista
  remove(element) {
    const index = this.indexOf(element);
    if (index !== -1) {
      this.removeAt(index);
      return true;
    }
    return false;
  }

  // Remover elementos em uma posição específica
  removeAt(position) {
    if (position >= 0 && position < this.items.length) {
      return this.items.splice(position, 1)[0];
    }
    return null;
  }

  // Retorna a posição de um dado elemento
  indexOf(element) {
    return this.items.indexOf(element);
  }

  // Retorna se a lista está vazia
  isEmpty() {
    return this.items.length === 0;
  }

  // Retorna o tamanho da lista
  size() {
    return this.items.length;
  }

  // Retorna a lista como texto
  toString() {
    return this.items.join(", ");
  }

  // Imprime os elementos da lista
  print() {
    console.log(this.toString());
  }

  // Limpa a lista removendo todos os elementos
  clear() {
    this.items = [];
  }
}

// Exemplo de uso
const list = new ArrayList();
list.append("A");
list.append("B");
list.insert(1, "C");
list.print(); // A, C, B
list.remove("C");
list.print(); // A, B
list.removeAt(0);
list.print(); // B

```

## Listas Ligadas

As listas ligadas armazenam uma coleção sequencial de elementos, mas, diferentemente dos arrays contíguos ou dos arrays no javascript (objetos especiais), os elementos nas listas ligadas não estão localizados de forma contígua na memória.

Cada elemento consiste em um nó, que armazena o próprio elemento e também uma referência (também conhecida como ponteiro ou link) que aponta para o próximo elemento. O seguinte diagrama exemplifica a estrutura de uma lista ligada:

<div align="center">
  <img width="480"  src="https://media.geeksforgeeks.org/wp-content/uploads/20240917161540/Singly-Linked-List.webp">
</div>

Um dos benefícios de uma lista ligada em comparação a um array convencional é que não precisamos deslocar os elementos ao adicionar ou remover itens. No entanto, esta implementação possui uma passo adicional. Devemos marcar as posições de início e fim com alguma variável a qual chamaremos de ponteiros. 

Outro detalhe é que, em um array, podemos acessar diretamente qualquer elemento em qualquer posição; já em uma lista ligada, se quisermos acessar um elemento do meio, precisamos começar do início (a cabeça da lista) e iterar por ela até encontrar o elemento desejado.

### Exemplos do mundo real

Temos alguns exemplos do mundo real que podem ser representados como uma lista ligada. O primeiro exemplo é uma fila de dança (conga line). Cada pessoa é um elemento, e as mãos representam os ponteiros que conectam a próxima pessoa na fila. Você pode adicionar pessoas à fila — basta encontrar o local onde deseja inseri-las, desconectar a ligação, inserir a nova pessoa e reconectar novamente.

<div align="center">
  <img width="480"  src="https://img.freepik.com/vetores-premium/pessoas-idosas-danca-conga-ficar-na-fila-com-confete-caindo-homens-e-mulheres-idosos-ativos-avo-e-avos-personagens-festa-lazer-conceito-desenhos-animados-pessoas-ilustracao-vetorial_87771-20065.jpg?w=480">
</div>


Outro exemplo seria uma caça ao tesouro. Você tem uma pista, e essa pista é o ponteiro para o local onde encontrará a próxima pista. Com esse vínculo, você vai ao próximo lugar e obtém outra pista que levará à seguinte. A única maneira de obter uma pista no meio da lista é seguindo a lista desde o início (da primeira pista).

<div align="center">
  <img width="480" src="https://media.istockphoto.com/id/1252391957/vector/antique-vector-treasure-map.jpg?s=612x612&w=0&k=20&c=HLqALRm0QuuVMgR-dcpzGtEdhoQC9uRPDnXaDfwJCYQ=">
</div>


Outro exemplo — que pode ser o mais popular para ilustrar listas ligadas — é o de um trem. Um trem consiste em uma série de veículos (também conhecidos como vagões). Cada vagão está conectado ao outro. Você pode facilmente desacoplar um vagão, mudar sua posição, ou adicioná-lo e removê-lo. A figura a seguir demonstra um trem. Cada vagão é um elemento da lista, e a ligação entre os vagões representa o ponteiro.

<div align="center">
  <img width="480" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaV2jgrui6-MPUNo1dtKs4S4EP7O99KBEwpw&s">
</div>


## Implementação Listas Ligadas


Agora que você entendeu a estrutura de uma lista ligada, vamos implementá-la no javascript a partir da classe a seguir. Observe que além da classe LinkedList vamos criar uma classe Node que representa um elemento da lista (conteúdo do item e próximo).


```js
class Node {
    constructor(data) {
        this.data = data;   
        this.next = null;   
    }
}
/**
 * 
 * 
- insert(position, element) - Inserir elementos em uma posição específica.
- remove(element) - Remover um elemento da lista.
- removeAt(position) - Remover elementos em uma posição específica.
- indexOf(element) - Retorna a posição de um dado elemento
- isEmpty() - Retorna se a lista está vazia
- size() - Retorna o tamanho da lista
- toString() - Retorna a lista como texto
- print() - Imprime os elementos da lista
- clear() - Limpar a lista removendo todos os elementos atuais para torná-la vazia.
 * 
 */
class LinkedList {

    constructor(){

    }

    /** 
     * Adicionar elementos no final da lista
     */
    append(element) {

    }

    insert(position, element) {

    }

    remove(element) {

    }

    removeAt(position){

    }

    indexOf(element) {

    }

    isEmpty(){
      
    }

    size() {

    } 

    print() {

    }

    clear(){

    }

    search(value){

    }

    toString(){

    }

    toArray(){

    }

}

```

