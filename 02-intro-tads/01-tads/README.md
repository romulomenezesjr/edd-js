## Introdução

Até agora utilizamos técnicas que aplicam sequências lógicas com algumas operações, lançando mão de estruturas de decisão ou repetição, seguindo o paradigma da programação estruturada, para atingir um resultado. 

Normalmente ao se trabalhar com este paradigma utilizamos apenas dados simples, já predefinidos e utilizados ao longo da execução para manipular o que o usuário digita.

Em diversos casos necessitamos trabalhar com um conjunto de valores e manipulá-los de certa forma que faça sentido para o objetivo da aplicação. Dados simples como [inteiros, ponto flutuante, textos não são suficientes](../01-fundamentos-js/04-tipos).

## Tipos de Dados Complexos

É possível definir dados complexos de várias formas, a mais comum é utilizando classes e instanciando objetos. Mesmo em linguagens que não aplicam o paradigma orientado a objetos podemos definir estruturas para representar dados complexos.

Na linguagem [C](https://www.inf.pucrs.br/~pinho/LaproI/Structs/Structs.htm) e [Go](https://aprendagolang.com.br/o-que-sao-structs-e-como-usa-las/) temos a definição de structs para representar dados complexos.

- Exemplo na linguagem C: 
    
    ```c
    // Cria uma STRUCT para armazenar os dados de uma pessoa
    typedef struct {
        float Peso;   
        int Idade;    
        float Altura; 
    } Pessoa;
    ```



- Exemplo na linguagem Go: 

    ```go
    type Pessoa struct {
        Nome string
        Int8 Idade 
    }
    ```

Utilizando o princípio da abstração do paradigma orientado a objetos e as definições de classe podemos modelar dados complexos a partir de contextos do mundo real em nossos projetos. Ao longo dos nossos estudos iremos abordar [classes e de objetos em Javascript](../02-classes-objetos).

```js
class Pessoa{
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
    
}
```
Em situações que exigem o processamento e manipulação de diversos valores podemos utilizar os vetores (arrays). Cada elemento de um vetor poderá ser de um tipo simples ou de um tipo complexo.

## Tipos de Dados Abstratos (TAD)

Um tipo abstrato de dado (TAD) é algo abstraído de tipos e linguagens de programação. É uma forma como o programador estrutura os dados para resolução de um problema.

Essas abstrações facilitam imensamente a resolução de problemas que até poderiam ser resolvidos sem o conhecimento de algum TAD, porém de maneira mais ingenua.

Os TADs podem ser vistos como estruturas de dados que encapsulam um modelo de dados e as operações que elas suportam, e não da maneira como elas são implementadas


Para um TAD podemos ter um modelo de dados e um conjunto de operações que normalmente são realizadas. As operações definem como:
- Inserir um elemento
- Remover um elemento
- Acessar um elemento
- Pesquisar um elemento
- Encontrar o primeiro, encontrar o último, etc.

Cada uma dessas operações pode ser implementada de maneira diferente, a depender do contexto ou do problema.

Ou seja, podemos visualizar o conceito de "tipo abstrato de dado" sob uma perspectiva diferente, não em termos do que um computador pode fazer, mas em função do que o usuário quer fazer.

Os dados de um determinado programa podem ser representados como um tipo abstrato de dados (TAD), que respeita convenções definidas pela aplicação/programador. Analise as perguntas a seguir:

    Em uma aplicação é dada a permissão aos usuários modificarem qualquer dado? 

    Em uma aplicação financeira, os usuários     do sistema podem modificar os dados de contas corrente de qualquer maneira?

    Na fila de banco, o último cliente a ser inserido no sistema poderá ser atendido
    primeiro?

    A lista de contatos do celular mantém espaços em branco após apagar um contato?

## Definição de TADs


Um TAD é definido a partir de um conjunto de assinaturas de operações que especifica a sua interface. Devemos também especificar o comportamento da TAD, de forma semântica, ou seja, de maneira independente da implementação.

![alt text](https://media.geeksforgeeks.org/wp-content/uploads/20190828194629/ADT.jpg)

Em linguagens orientadas a objetos a implementação de TADs é feita por classes definidas pelo programador ou por classes nativas da linguagem. Por exemplo, na linguagem Java temos o pacote Collection com diversas classes que representam as TADs e na linguagem Python temos o módulo collections também com diversas estruturas já definidas.

Em linguagens estruturadas a implementação é feita pela definição de tipos juntamente com a implementação de funções, usando typedef e structs.

## Exemplos de TADS

### Pilhas

Uma pilha representa uma estrutura de dados que os dados são agrupados e processados apenas em uma das extremidades. Um exemplo é o histórico de edições em um editor de texto.

<div style="text-align: center; display: block">
<img src="https://www.tutorialspoint.com/data_structures_algorithms/images/stack_example.jpg" >
</div>


Outro exemplo é o controle do acesso aos sites acessados no histórico de navegação em páginas de internet.

### Fila

Uma fila represeta um conjunto de dados que devem ser processados de acordo com a ordem de chegada. Um exemplo comum é a fila de um banco para atendimento no caixa.
<div style="text-align: center; display: block">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxvVKHhkuv-ybLSqH3B3AwAsp-EECoT2WpKQ&s" />
</div>

### Listas

Uma lista é uma estrutura que aceita alteração em qualquer posição, porém não deve-se manter espaços vazios entre os elementos após uma remoção e também não é possível adicionar elementos com um espaço entre os demais. Um exemplo é a lista de contatos no seu celular.


![ ](https://play-lh.googleusercontent.com/FDErBTOMVcjcE2-B56oxo4Sjkaz1OwM2vnDgQ-mqS4_AIvv0UhkOMj8teew8IjIm2CE=w526-h296-rw)
### Árvores

Um TAD to tipo árvore é um grafo onde cada nó outros nós ligados a ele. Só pode ser atravessada em um único caminho. Árvores são usadas em diversas aplicações, um exemplo é um mapa digital. No armazenamento de dados em um mapa digital a árvore contém imagens que possuem referência à outras imagens em um nível interior.