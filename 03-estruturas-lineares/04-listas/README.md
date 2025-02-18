# Listas

As listas são uma das ferramentas de organização mais comuns que as pessoas utilizam no dia a dia. Temos listas de tarefas, listas de compras, listas dos dez melhores, listas dos dez piores e muitos outros tipos. Nossos programas de computador também podem usar listas, especialmente quando temos apenas alguns itens para armazenar nessa forma. Elas são especialmente úteis quando não precisamos realizar buscas nos itens da lista ou organizá-los em algum tipo de ordem específica.
Quando precisamos realizar buscas longas ou ordenações complexas, as listas se tornam menos úteis, especialmente ao lidarmos com estruturas de dados mais complexas.

Para projetar um TAD para uma lista precisamos fornecer uma definição: propriedades e as operações que podem ser realizadas sobre ela ou por ela.

## Definição

Uma lista é uma sequência ordenada de dados. Cada item de dado armazenado em uma lista é chamado de elemento. Em JavaScript, os elementos de uma lista podem ser de qualquer tipo de dado. Não há um número predefinido de elementos que podem ser armazenados em uma lista, embora o limite prático seja a quantidade de memória disponível para o programa que está utilizando a lista.

Uma lista sem elementos é chamada de lista vazia. O número de elementos armazenados em uma lista é conhecido como o comprimento da lista. Internamente, esse número é mantido em uma variável chamada listSize.

Estas são as operações comuns de uma lista:

- Adicionar elementos no final da lista (operação de append).
- Adicionar elementos no início da lista.
- Inserir elementos em uma posição específica.
- Remover elementos.
- Limpar a lista: removendo todos os elementos atuais para torná-la vazia.

Esses conceitos formam a base para o design e a implementação de um ADT de lista em qualquer linguagem de programação.

## Arrays e Listas

Os arrays na linguagem javascript são implementados com operações de listas. Podemos manipulá-lo facilmente acessando posições, inserindo ou removendo elementos por meio dos métodos implementados nos arrays do javascript. Cada linguagem possui sua própria implementação de arrays, existem linguagens que implementam arrays sem métodos e com tamanhos fixos (na maioria das linguagens). 

Embora essa estrutura seja muito conveniente e nos fornece uma sintaxe prática com [] para acessar seus elementos, ela possui desvantagens ao realizar algumas operações, como inserir ou remover itens do início ou do meio do array. Estas operações são consideradas "caras" pois os elementos precisam ser realocados (em outras linguagens) ou os índices precisam ser realocados (em javascript).


## Listas Ligadas

As listas ligadas armazenam uma coleção sequencial de elementos, mas, diferentemente dos arrays, os elementos nas listas ligadas não estão localizados de forma contígua na memória.

Cada elemento consiste em um nó, que armazena o próprio elemento e também uma referência (também conhecida como ponteiro ou link) que aponta para o próximo elemento.

O seguinte diagrama exemplifica a estrutura de uma lista ligada:

![](https://media.geeksforgeeks.org/wp-content/uploads/20240917161540/Singly-Linked-List.webp)

Um dos benefícios de uma lista ligada em comparação a um array convencional é que não precisamos deslocar os elementos ao adicionar ou remover itens. No entanto, esta implementação possui uma passo adicional. Devemos marcar as posições de início e fim com alguma variável a qual chamaremos de ponteiros. 

Outro detalhe é que, em um array, podemos acessar diretamente qualquer elemento em qualquer posição; já em uma lista ligada, se quisermos acessar um elemento do meio, precisamos começar do início (a cabeça da lista) e iterar por ela até encontrar o elemento desejado.

### Exemplos do mundo real

Temos alguns exemplos do mundo real que podem ser representados como uma lista ligada. O primeiro exemplo é uma fila de dança (conga line). Cada pessoa é um elemento, e as mãos representam os ponteiros que conectam a próxima pessoa na fila. Você pode adicionar pessoas à fila — basta encontrar o local onde deseja inseri-las, desconectar a ligação, inserir a nova pessoa e reconectar novamente.

![](https://img.freepik.com/vetores-premium/pessoas-idosas-danca-conga-ficar-na-fila-com-confete-caindo-homens-e-mulheres-idosos-ativos-avo-e-avos-personagens-festa-lazer-conceito-desenhos-animados-pessoas-ilustracao-vetorial_87771-20065.jpg?w=1380)

Outro exemplo seria uma caça ao tesouro. Você tem uma pista, e essa pista é o ponteiro para o local onde encontrará a próxima pista. Com esse vínculo, você vai ao próximo lugar e obtém outra pista que levará à seguinte. A única maneira de obter uma pista no meio da lista é seguindo a lista desde o início (da primeira pista).

![](https://media.istockphoto.com/id/1252391957/vector/antique-vector-treasure-map.jpg?s=612x612&w=0&k=20&c=HLqALRm0QuuVMgR-dcpzGtEdhoQC9uRPDnXaDfwJCYQ=)

Outro exemplo — que pode ser o mais popular para ilustrar listas ligadas — é o de um trem. Um trem consiste em uma série de veículos (também conhecidos como vagões). Cada vagão está conectado ao outro. Você pode facilmente desacoplar um vagão, mudar sua posição, ou adicioná-lo e removê-lo. A figura a seguir demonstra um trem. Cada vagão é um elemento da lista, e a ligação entre os vagões representa o ponteiro.

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaV2jgrui6-MPUNo1dtKs4S4EP7O99KBEwpw&s)

        Você conhece algum outro exemplos do uso de listas ligadas?


## Criando Listas Ligadas



Agora que você entendeu a estrutura de uma lista ligada, vamos implementá-la no javascript a partir da classe a seguir. Observe que além da classe LinkedList vamos criar uma classe Node que representa um elemento da lista (conteúdo do item e próximo).


```js
class Node {
    constructor(data) {
        this.data = data;   
        this.next = null;   
    }
}

class LinkedList {

    constructor(){

    }

    traverse(){

    }
    
    insert(pos=0) {

    }

    delete(pos=0){

    }

    search(value){

    }

    destroy(){

    }
}

```

### Operações

Traversal
Searching
Length
Insertion:
Insert at the beginning
Insert at the end
Insert at a specific position
Deletion:
Delete from the beginning
Delete from the end
Delete a specific node