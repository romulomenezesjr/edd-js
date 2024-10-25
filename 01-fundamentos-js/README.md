
# Fundamentos JS

Nesta página você encontrará conceitos básicos de programação aplicados na linguagem Javascript

1. [Introdução](./01-intro/)
2. [Diferença entre Web x Node](./02-web-node/)
3. [Variáveis e Operadores](./03-variaveis-operadores/)
4. [Tipos](./04-tipos/)
5. [Condicionais](./05-condicionais/)
6. [Repetições](./06-repeticoes/)
7. [Funções](./07-funcoes/)

# Exercícios

Para as questões práticas, crie sua resposta utilizando o [modelo](https://codepen.io/R-mulo-Costa-de-Menezes-J-nior/pen/qBzEYyo)

1 - Quais são os principais métodos para criar, editar e remover elementos HTML usando Javascript?

2 - Descreva a diferença entre o Javascript executado no navegador e o executado no Nodejs.

3 - Escreva um programa que solicite ao usuário o seu nome e a sua idade, armazenando esses valores em variáveis. Em seguida, remova o formulário e escreva uma mensagem de boas vindas, mostrando o nome e a idade do usuário.

4 - Escreva um programa que solicite ao usuário dois números inteiros e armazene-os em variáveis. Em seguida, calcule e imprima a soma, subtração, multiplicação e divisão desses números.

5 - Escreva um programa que solicite ao usuário o raio de um círculo e calcule a área e o perímetro desse círculo. Imprima os resultados formatados.

6 - Escreva um programa que solicite ao usuário uma temperatura em graus Celsius e converta-a para Fahrenheit. Imprima o resultado formatado.

7 - Escreva um programa que solicite ao usuário o seu salário mensal e o número de meses trabalhados no ano. Calcule e imprima o salário anual.

8 - Escreva um programa que solicite ao usuário um número e verifique se ele é par ou ímpar. Imprima uma mensagem informando o resultado.

9 - Escreva um programa que solicite ao usuário dois valores booleanos (True ou False) e armazene-os em variáveis. Em seguida,aplique os operadores lógicos "and", "or" e "not" entre essas variáveis e imprima os resultados.

10 - Escreva um programa que solicite ao usuário duas strings e verifique se elas são iguais. Imprima uma mensagem informando o resultado da comparação.

11 - Escreva um programa que solicite ao usuário dois números e verifique se o primeiro número é maior que o segundo. Imprima uma
mensagem informando o resultado da comparação.

12 - Escreva um programa que solicite ao usuário a sua idade e verifique se ele é maior de idade (idade igual ou superior a 18 anos). Imprima uma mensagem informando o resultado.

13 - Descreva o que é o objeto **document** presente no ambiente do javascript

14 - Descreva o que o ambiente de execução do javascript na web é diferente do ambiente no node.

15 - Escreva um programa que solicite ao usuário um número e calcule a sua raiz quadrada. Mostre o resultado na tela.

16 - Escreva um programa que solicite ao usuário um número e imprima a sua tabuada de multiplicação até 10.

17 - Escreva um programa que solicite ao usuário três números e verifique qual é o maior entre eles. Imprima uma mensagem informando o resultado.

18 - Escreva um programa que solicite ao usuário uma frase e conte quantas palavras essa frase contém. Imprima o resultado.

19 - Escreva um programa que solicite ao usuário um número e verifique se ele é primo. Imprima uma mensagem informando o resultado.

20 - Escreva um programa que solicite ao usuário um ano e verifique se é um ano bissexto. Imprima uma mensagem informando o resultado.

21 - Escreva um programa que solicite ao usuário um número inteiro positivo e imprima todos os números ímpares de 1 até esse número.

22 - Escreva um programa que solicite ao usuário uma string e verifique se ela é um palíndromo (lê-se da mesma forma de trás para frente). Imprima uma mensagem informando o resultado.

23 - Escreva um programa que solicite ao usuário um texto e conte quantas vezes a letra 'a' (maiúscula ou minúscula) aparece nesse texto. Imprima o resultado.

24 - Escreva um programa que solicite ao usuário uma lista de números separados por vírgula e calcule a média desses números. Imprima o resultado formatado.

25 - Escreva um programa que solicite ao usuário uma palavra e conte quantas vogais (a, e, i, o, u) existem nessa palavra. Imprima o resultado.

## Exercícios: Funções

### Definição

Escreva uma função chamada multiplyAndAdd que receba três parâmetros e retorne o resultado da multiplicação dos dois primeiros, somado ao terceiro, usando definição de função, usando expressão de função e usando uma arrow function.
```js
// Exemplo de uso:
console.log(multiplyAndAdd(2, 3, 4)); // (2 * 3) + 4 = 10
```
### Callback

**Criando uma função que use callback**: Crie uma função chamada saudar que receba um nome e uma função de callback. O callback deve exibir uma saudação com o nome. Em seguida, chame saudar passando uma função que imprime "Olá, {nome}!".
```js
// Exemplo de uso:
saudar("Alice", function(nome) {
  console.log("Olá, " + nome + "!");
});
```

**Filtro de Array com Callback**: Crie uma função chamada filtrar que receba um array e uma função de callback que define o critério de filtro. Teste a função para filtrar apenas números pares, maiores que 10, etc.
```js
// Exemplo de uso:
let numeros = [1, 12, 5, 8, 130, 44];
let pares = filtrar(numeros, function(numero) {
  return numero % 2 === 0;
});
console.log(pares); // Deve retornar [12, 8, 130, 44]

```


**Callback com Funções Assíncronas - Simulando um Timer**: Crie uma função chamada executarComDelay que recebe um callback e um tempo (em milissegundos). A função deve chamar o callback após o tempo especificado usando setTimeout.
```js
// Exemplo de uso:
executarComDelay(function() {
  console.log("Executado após 2 segundos");
}, 2000);

```

**Transformação em Array de Objetos com Callback**: Crie uma função chamada criarObjetos que recebe um array de nomes e um callback que converte cada nome em um objeto com uma propriedade nome. A função deve retornar o novo array de objetos.

```js
// Exemplo de uso:
let nomes = ["Alice", "Bob", "Carlos"];
let objetos = criarObjetos(nomes, function(nome) {
  return { nome: nome };
});
console.log(objetos); // Deve retornar [{nome: "Alice"}, {nome: "Bob"}, {nome: "Carlos"}]

```

**Manipulação de Arrays de Objetos com Callback**: Crie uma função chamada filtrarProdutos que receba um array de objetos representando produtos (com propriedades nome e preco) e um callback que define o critério de filtro (como produtos com preco maior que 20). A função deve retornar um array de produtos filtrados.

```js

// Exemplo de uso:
let produtos = [
  { nome: "Camiseta", preco: 25 },
  { nome: "Calça", preco: 50 },
  { nome: "Meias", preco: 5 }
];
let produtosFiltrados = filtrarProdutos(produtos, function(produto) {
  return produto.preco > 20;
});
console.log(produtosFiltrados); // Deve retornar [{nome: "Camiseta", preco: 25}, 
```
### Parametros

**Passagem de Parâmetro por Valor - Números:** Crie uma função chamada incrementNumber que recebe um número como parâmetro e tenta incrementar esse valor em 1. Fora da função, chame-a com um número e imprima o valor antes e depois da chamada. O número foi alterado fora da função?

```js
// Exemplo de uso:
let num = 5;
incrementNumber(num);
console.log(num); // Deve imprimir 5
```

**Passagem de Parâmetro por Valor - Strings:** Crie uma função chamada appendString que receba uma string e tente adicionar um valor a ela. Chame essa função passando uma string e verifique se a string foi alterada fora da função.

```js

// Exemplo de uso:
let str = "Hello";
appendString(str, " World");
console.log(str); // Deve imprimir "Hello"
```

**Passagem de Parâmetro por Referência - Objetos:** Crie uma função chamada updatePerson que receba um objeto person com as propriedades name e age, e altere o valor de age. Fora da função, imprima o objeto antes e depois de chamar a função. O valor do objeto mudou fora da função?

```js

// Exemplo de uso:
let person = { name: "Alice", age: 25 };
updatePerson(person);
console.log(person.age); // Deve refletir a mudança feita na função
```
**Passagem de Parâmetro por Referência - Arrays :** Crie uma função chamada addItem que recebe um array e um valor, e adiciona esse valor ao final do array. Fora da função, imprima o array antes e depois de chamar a função. O array foi alterado fora da função?

```js

// Exemplo de uso:
let numbers = [1, 2, 3];
addItem(numbers, 4);
console.log(numbers); // Deve incluir o novo item [1, 2, 3, 4]
```

**Imutabilidade de Tipos Primitivos**: Crie uma função chamada changePrimitive que recebe um número, altera o valor dentro da função e depois retorna o novo valor. Fora da função, veja se o número original foi modificado. O valor original mudou?

```js

// Exemplo de uso:
let x = 10;
changePrimitive(x);
console.log(x); // Deve imprimir 10
```
**Cópia de Objetos para Manter Imutabilidade**: Crie uma função chamada updatePersonCopy que receba um objeto person e altere o valor de uma de suas propriedades, mas primeiro faça uma cópia do objeto. Fora da função, verifique se o objeto original foi alterado.

```js

// Exemplo de uso:
let person = { name: "Bob", age: 30 };
updatePersonCopy(person);
console.log(person.age); // Deve imprimir 30
```

**Copiando Arrays para Manter Imutabilidade**: Crie uma função chamada addToCopy que receba um array e um valor. A função deve adicionar o valor a uma cópia do array e retornar essa cópia sem modificar o array original. Verifique se o array original foi alterado.

```js

// Exemplo de uso:
let originalArray = [1, 2, 3];
let newArray = addToCopy(originalArray, 4);
console.log(originalArray); // Deve imprimir [1, 2, 3]
console.log(newArray); // Deve imprimir [1, 2, 3, 4]
```

**Função de Alteração de Objetos Profundos**: Crie uma função chamada updateNestedProperty que receba um objeto com uma estrutura aninhada e altere uma propriedade dentro do objeto aninhado. Observe se a alteração persiste fora da função.

```js

// Exemplo de uso:
let user = { name: "Carol", details: { age: 28 } };
updateNestedProperty(user);
console.log(user.details.age); // Deve refletir a alteração feita na função
```
**Clonagem Profunda para Objetos Aninhados**: Crie uma função chamada deepCloneUpdate que receba um objeto aninhado e altere uma de suas propriedades após fazer uma cópia profunda. Fora da função, verifique se o objeto original foi alterado.

```js

    // Exemplo de uso:
    let product = { name: "Laptop", specs: { ram: "8GB" } };
    deepCloneUpdate(product);
    console.log(product.specs.ram); // Deve imprimir "8GB"
```

**Alteração em Arrays Multidimensionais***
Crie uma função chamada modifyMatrix que receba uma matriz (array de arrays) e altere um de seus valores internos. Verifique se a matriz original foi alterada fora da função.

```js

// Exemplo de uso:
let matrix = [[1, 2], [3, 4]];
modifyMatrix(matrix);
console.log(matrix); // Deve refletir a alteração feita na função
```
### Arrow Functions

Escreva uma arrow function chamada add que receba dois números como parâmetros e retorne a soma deles.
```js
// Exemplo de uso:
console.log(add(5, 3)); // 8
```

Crie uma arrow function chamada greet que receba um nome como parâmetro e retorne a mensagem "Hello, [nome]!"
```js
// Exemplo de uso:
console.log(greet("Alice")); // "Hello, Alice!"
```

Dado um array de números, use filter() e uma arrow function para retornar um novo array contendo apenas os números ímpares.
```js
// Exemplo de uso:
const numbers = [1, 2, 3, 4, 5, 6, 7];
const oddNumbers = numbers.filter(/* arrow function aqui */);
console.log(oddNumbers); // [1, 3, 5, 7]

```
### Módulos

**Criação de Módulo Básico (CommonJS)**: Crie um módulo em CommonJS chamado saudacao.js que exporta uma função saudar(nome), que recebe um nome e retorna uma saudação (por exemplo, "Olá, {nome}!"). Em seguida, importe esse módulo em outro arquivo e chame a função.

**Criação de Módulo Básico (ESM)**
Crie um módulo em ESM chamado saudacao.mjs que exporta uma função saudar(nome) como uma export default. Importe o módulo em outro arquivo .mjs e execute a função.

**Exportação e Importação de Vários Itens (CommonJS)**: Crie um módulo CommonJS chamado math.js que exporta duas funções: somar(a, b) e multiplicar(a, b). Importe o módulo em outro arquivo e use ambas as funções.

**Exportação e Importação de Vários Itens (ESM)**: Crie um módulo ESM chamado math.mjs que exporta duas funções: somar(a, b) e multiplicar(a, b) usando export nomeado. Em outro arquivo .mjs, importe as duas funções e execute-as.

**Criando e Usando um Módulo de Configuração (CommonJS):** Crie um módulo config.js em CommonJS que exporte um objeto de configurações com uma chave nomeDoProjeto e um valor (por exemplo, "Meu Projeto"). Importe o módulo em app.js e exiba o valor de nomeDoProjeto.

**Criando um Módulo Utilitário com Várias Funções (ESM)**
Crie um módulo util.mjs que exporta múltiplas funções úteis (somaArray, maiorValor, menorValor). Importe todas as funções no app.mjs usando import * as util.

**Importação Dinâmica com ESM**
No app.mjs, use import() para importar dinamicamente um módulo mensagem.mjs que exporta uma função exibirMensagem. A função deve ser importada e chamada quando uma condição (ex.: uma variável carregarMensagem) for true.

**Conversão de Módulos CommonJS para ESM**
Comece com um módulo mathCommonJS.js em CommonJS que exporta duas funções (adicionar e subtrair). Converta-o para um módulo ESM mathESM.mjs com os mesmos métodos e use import para testá-lo em um arquivo app.mjs.
```js
// mathCommonJS.js
module.exports = {
  adicionar: (a, b) => a + b,
  subtrair: (a, b) => a - b
};
```
### Promise
**Criando uma Promise Simples**: Crie uma função verificarNumeroPar(numero) que retorna uma Promise. A promessa deve ser resolvida se o número for par e rejeitada se for ímpar.

**Consumindo uma Promise com .then e .catch**
Use a função verificarNumeroPar() do exercício anterior para verificar se um número é par ou ímpar. Chame a função e exiba o resultado com .then() para o sucesso e .catch() para o erro.

**Encadeamento de Promises**
Crie duas funções que retornem promessas: dobrarNumero(numero) (que dobra o número) e incrementarNumero(numero) (que incrementa o número em 1). Encadeie essas duas promessas para dobrar e depois incrementar o número inicial.

**Usando Async/Await com Promises** Crie uma função assíncrona processarNumero(numero) que usa dobrarNumero() e incrementarNumero() (do exercício 3) para dobrar e, em seguida, incrementar o número usando await.