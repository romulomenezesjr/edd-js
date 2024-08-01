# Arrays

Arrays são uma parte fundamental de qualquer linguagem de programação. No JavaScript são um dos recursos mais utilizados e que possuem diversos métodos poderosos para manipular os dados armazenados. Os Arrays são usados para armazenar coleções de múltiplos valores em uma única variável. Algumas das características mais distintivas dos arrays no Javascript são:

- Tamanho dinâmico
- São objetos
- Acessados por índice numérico

## Criando um array
É possível criar um array de várias maneiras:

- Usando colchetes:

Arrays são contruídas de colchetes, os quais contém uma lista de itens separada por vírgulas. Vamos supor que queremos armazenar uma lista de compras em uma array 

```js
let frutas = ['maçã', 'banana', 'laranja'];
```

- Usando o construtor Array, passando os elementos:

Podemos passar no construtor da classe Array a lista de elementos separados por vírgula. Veja o exemplo a seguir com uma lista de números e uma lista de nomes

```js
let numeros = new Array(1, 2, 3, 4, 5);

let array = new Array("Casa", "Comida", "Roupa lavada")

```

- Usando o construtor Array, passando o tamanho:

Também podemos passar no construtor da classe Array o tamanho. Veja o exemplo a seguir com um Array com tamanho 5. 


```js
let array = new Array(5)
console.log(array.length);
```

Observe que utilizando apenas um parametro nós definimos o tamanho. Caso seja usado dois ou mais nós estaremos passando a sequencia de elementos.

```js
let array = new Array(5,6)
for (let num of array){
    console.log(num);
}
```

## Acessando Elementos

Os elementos em um array são acessados usando o índice, que começa em 0.

```js
let frutas = ['maçã', 'banana', 'laranja'];
let primeiraFruta = frutas[0]; // 'maçã'
let segundaFruta = frutas[1];  // 'banana
```

Quando você acessa uma posição em um array que não foi definida em JavaScript, o valor retornado será undefined. Isso ocorre porque a posição solicitada não possui um valor atribuído.

```js
let array = [1, 2, 3];
console.log(array[5]); // undefined
```
No exemplo acima, array[5] retorna undefined porque o array array tem apenas 3 elementos (índices 0, 1 e 2). O índice 5 não foi definido.

Quando você cria um array com um comprimento específico sem inicializar os elementos, os espaços não preenchidos são considerados empty slots (espaços vazios) e retornarão undefined quando acessados.

```js
let arrayFixo = new Array(5);
console.log(arrayFixo[2]); // undefined
```

Em outras linguagens isso poderia ocasionar um erro/excessão que causaria o encerramento do programa caso não for tratado. Ainda assim, no Javascript é possível testar se determinado valor está presente em um array, veja o exemplo a seguir:

```js
let array = [1, 2, 3];

console.log(4 in array); // false
console.log(array.hasOwnProperty(4)); // false

array[4] = 5;

console.log(4 in array); // true
console.log(array.hasOwnProperty(4)); // true
```

Observe que no exemplo acima o array foi criado com tamanho 3, com os elementos [1,2,3] e em seguida foi definido uma posição 4 com o elemento 5. Isso implica que o tamanho de um array não é fixo.

## Arrays são objetos

Arrays são objetos semelhantes a listas,  eles possuem as propriedades acessadas por índices e uma série de métodos embutidos para realizar operações de travessia e mutação. Os elementos de um array são somente propriedades, da mesma forma que length é uma propriedade. Contudo, note que tentando acessar o primeiro elemento de um array da seguinte forma causará um erro de sintaxe, pois o nome da propriedade é inválido:
```js
console.log(arr.0); // um erro de sintaxe
```

Não há nada de especial a respeito de arrays JavaScript e suas propriedades que causam isso. As propriedades JavaScript que começam com um dígito não podem ser referenciadas com notação de ponto. Elas necesitam usar notação de colchetes para poderem ser acessadas. Por exemplo, se você tivesse um objeto com a propriedade "3d", também teria que ser referenciá-la usando notação de colchetes. Por exemplo:

```js
let objeto = {}
objeto.nome = "Woody"
console.log(objeto.nome)

//objeto.3d = "modelo 3d" // erro
objeto["3d"] = "modelo 3d"
console.log(objeto["3d"])
```

## Iterando no Array

Existem várias maneiras de iterar sobre um array. Aqui estão algumas das mais comuns:
 
### 1. Usando um Loop `for`

O loop `for` é uma das formas mais tradicionais de iterar sobre um array.

```javascript
let array = ['maçã', 'banana', 'laranja'];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
```

### 2. Usando um Loop `for...of`

O loop `for...of` é uma maneira moderna e mais legível de iterar sobre os elementos de um array.

```javascript
let array = ['maçã', 'banana', 'laranja'];

for (let fruta of array) {
    console.log(fruta);
}
```

### 3. Usando o Método `forEach`

O método `forEach` executa uma função fornecida uma vez para cada elemento do array.

```javascript
let array = ['maçã', 'banana', 'laranja'];

array.forEach(function(fruta, indice) {
    console.log(indice, fruta);
});
```

### 4. Usando o Loop `while`

Você também pode usar um loop `while` para iterar sobre um array.

```javascript
let array = ['maçã', 'banana', 'laranja'];
let i = 0;

while (i < array.length) {
    console.log(array[i]);
    i++;
}
```

### 5. Usando o Loop `do...while`

O loop `do...while` é similar ao `while`, mas garante que o bloco de código seja executado pelo menos uma vez.

```javascript
let array = ['maçã', 'banana', 'laranja'];
let i = 0;

do {
    console.log(array[i]);
    i++;
} while (i < array.length);
```

### 6. Usando o Método `map`

Embora o método `map` seja mais frequentemente usado para transformar arrays, ele também pode ser usado para iterar.

```javascript
let array = ['maçã', 'banana', 'laranja'];

array.map(function(fruta) {
    console.log(fruta);
});
```

### 7. Usando o Método `for...in`

O loop `for...in` é usado para iterar sobre propriedades enumeráveis de um objeto. Para arrays, ele pode ser usado, mas não é recomendado porque pode iterar sobre propriedades herdadas.

```javascript
let array = ['maçã', 'banana', 'laranja'];

for (let indice in array) {
    console.log(array[indice]);
}
```

#### Comparação 

- **`for` e `while`**: Flexíveis e permitem controle total sobre o loop, mas podem ser verbosos.
- **`for...of`**: Mais legível e fácil de usar para a maioria dos casos de iteração de arrays.
- **`forEach`**: Simples e direto, mas não pode ser interrompido (break).
- **`map`**: Ideal para transformar arrays, mas pode ser usado para iteração simples.
- **`for...in`**: Não recomendado para arrays, mais apropriado para objetos.

### Métodos 

Iterar com métodos sobre arrays em JavaScript é uma prática comum, pois eles são menos verbosos e possuem sintaxe simples. Vamos ver alguns exemplos de como podemos utilizá-los: 

1. Processamento de Dados

Ao iterar sobre um array, você pode aplicar alguma operação a cada elemento, como transformação, filtragem ou agregação de dados.

Exemplo: Transformação de Dados
Suponha que você tenha um array de números e queira criar um novo array com cada número multiplicado por 2.

```js
let numeros = [1, 2, 3, 4, 5];
let numerosDobrados = numeros.map(function(numero) {
    return numero * 2;
});
console.log(numerosDobrados); // [2, 4, 6, 8, 10]
```

2. Filtragem de Dados

Você pode iterar sobre um array para criar um novo array que contenha apenas os elementos que atendem a certos critérios.

Exemplo: Filtragem de Dados
Suponha que você queira obter todos os números maiores que 2

```js
let numeros = [1, 2, 3, 4, 5];
let numerosMaioresQueDois = numeros.filter(function(numero) {
    return numero > 2;
});
console.log(numerosMaioresQueDois); // [3, 4, 5]
```

3. Busca de Dados

A iteração permite encontrar elementos específicos dentro de um array.

Exemplo: Busca de Dados
Suponha que você queira encontrar o primeiro número maior que 2.
```js
let numeros = [1, 2, 3, 4, 5];
let primeiroMaiorQueDois = numeros.find(function(numero) {
    return numero > 2;
});
console.log(primeiroMaiorQueDois); // 3
```

4. Agregação de Dados

Iterar sobre um array permite acumular valores para calcular totais, médias, ou outros agregados.

Exemplo: Soma de Elementos
Suponha que você queira calcular a soma de todos os números no array.
```js
let numeros = [1, 2, 3, 4, 5];
let soma = numeros.reduce(function(total, numero) {
    return total + numero;
}, 0);
console.log(soma); // 15
```

5. Atualização de Elementos

Você pode iterar sobre um array para atualizar os elementos com base em alguma lógica.

Exemplo: Atualização de Elementos
Suponha que você queira adicionar 1 a cada número no array.

```js
let numeros = [1, 2, 3, 4, 5];
numeros.forEach(function(numero, indice, array) {
    array[indice] = numero + 1;
});
console.log(numeros); // [2, 3, 4, 5, 6]
```

7. Criação de Estruturas Derivadas

A iteração permite criar novas estruturas de dados baseadas nos elementos do array original.

Exemplo: Criação de Objetos
Suponha que você queira transformar um array de nomes em um array de objetos.
```js
let nomes = ['Ana', 'João', 'Maria'];
let pessoas = nomes.map(function(nome) {
    return { nome: nome };
});
console.log(pessoas);
// [{ nome: 'Ana' }, { nome: 'João' }, { nome: 'Maria' }]

```

8. Executar Ações Baseadas em Condições

Iterar sobre um array permite executar ações condicionais em cada elemento.

Exemplo: Ações Condicionais
Suponha que você queira logar apenas os números pares do array.
```js
let numeros = [1, 2, 3, 4, 5];
numeros.forEach(function(numero) {
    if (numero % 2 === 0) {
        console.log(numero);
    }
});
// Output: 2, 4
```

9. Ordenação de Elementos
   
Você pode iterar sobre um array para implementar algoritmos de ordenação personalizados.

Exemplo: Ordenação
Embora o método sort faça a maior parte do trabalho, você pode precisar de iteração para algoritmos de ordenação complexos.
```js
let numeros = [5, 2, 9, 1, 5, 6];
numeros.sort(function(a, b) {
    return a - b;
});
console.log(numeros); // [1, 2, 5, 5, 6, 9]
```

## Exercício
Implemente as seguintes funções usando o loop for:

dobrarNumeros(array): Recebe um array de números e retorna um novo array com cada número dobrado.
filtrarMaioresQueDois(array): Recebe um array de números e retorna um novo array com os números maiores que 2.
encontrarPrimeiroMaiorQueDois(array): Recebe um array de números e retorna o primeiro número maior que 2.
somarElementos(array): Recebe um array de números e retorna a soma de todos os elementos.
adicionarUm(array): Recebe um array de números e adiciona 1 a cada número do array original (modificando o array original).
criarObjetos(array): Recebe um array de strings e retorna um novo array de objetos, onde cada objeto tem uma propriedade nome com o valor correspondente da string.
logarPares(array): Recebe um array de números e loga no console apenas os números pares.
