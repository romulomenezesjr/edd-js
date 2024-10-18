## Estruturas de Repetição em JavaScript

As estruturas de repetição são fundamentais na programação porque permitem que você execute um conjunto de instruções várias vezes sem ter que escrever o mesmo código repetidamente. Isso economiza tempo, torna o código mais eficiente e legível, e permite que os programas lidem com tarefas repetitivas de maneira elegante.

No nosso cotidiano estamos constantemente realizando tarefas repetitivas e por vezes desejamos que o computador as faça para nós. Para calcular o total de uma lista de compras passamos para o programa uma lista de valores e ele se encarrega de somá-los um por um para obter o resultado. O governo realiza o senso a cada conjunto de anos e deve obter diversas estatíticas sobre a população (média de idade, proporção de homens/mulheres, faixa salarial) a partir das várias respostas às perguntas.

### Estruturas de Repetição em JavaScript

Em JavaScript, as estruturas de repetição são usadas para executar um bloco de código repetidamente enquanto uma determinada condição for verdadeira. Existem duas principais estruturas de repetição em JavaScript: o loop "while" e o "for".

### While

O loop "while" é usado para repetir um bloco de código enquanto uma condição for verdadeira. Ou seja, ele continua executando o bloco até que a condição se torne falsa. A sintaxe básica do loop "while" é a seguinte:

```javascript
while (condição) {
    // Bloco de código a ser executado
}
```

O bloco de código dentro do loop continuará sendo executado enquanto a "condição" for avaliada como verdadeira.

```javascript
let contador = 1;

while (contador <= 5) {
    console.log("Contador: " + contador);
    contador++;
}
```

De certa forma, o loop "while" é similar à estrutura condicional "if". Pois o bloco após a instrução será executado somente se a condição for verdadeira. No "while", o bloco será executado várias vezes. Em algum ponto dentro do bloco, a condição deve se tornar falsa ou então esta repetição irá se tornar um loop infinito.

Cuidado ao usar loops "while" para garantir que a condição eventualmente se torne falsa e não cause um loop infinito.

```javascript
let contador = 1;

while (contador <= 5) {
    console.log("Contador: " + contador);
    contador--; // Esta instrução não fará com que a condição do while seja atendida. Loop infinito.
}
```

O interpretador JavaScript não detecta quando o código possui tal instrução. Quando ocorre recursão infinita, ele ainda consegue encerrar o programa para que o sistema operacional que o estiver executando não trave.

### Exemplos do uso do while

#### Exemplo 1 - Fila no Supermercado:

Imagine que você está em uma fila no supermercado. Enquanto houver pessoas na fila (condição verdadeira), você continua esperando na fila e avança um passo de cada vez (executa o código dentro do while). Assim que a fila estiver vazia (condição falsa), você para de esperar.

```javascript
let fila = 10;

while (fila > 0) {
    console.log(`Continua esperando... [posição: ${fila}]`);
    // Simulação de espera de 2 segundos
    setTimeout(() => {}, 2000);
    fila--;
}
console.log('Sua vez chegou! Atendido!');
```

#### Exemplo 2 - Contagem Regressiva de um Foguete:

Pense em um foguete prestes a ser lançado. Enquanto a contagem regressiva não atingir zero (condição verdadeira), o lançamento é adiado e a contagem diminui a cada segundo.

```javascript
let contagemRegressiva = 10;

while (contagemRegressiva > 0) {
    console.log(`Contagem regressiva: ${contagemRegressiva}`);
    contagemRegressiva--;
}

console.log("Foguete lançado!");
```

#### Exemplo 3 - Jogo de Advinhação:

Considere um jogo de adivinhação, onde o jogador deve adivinhar um número secreto. O jogo continuará até que o jogador acerte o número secreto.

```javascript
// Gerar um número secreto entre 1 e 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Inicializar o contador de tentativas
let tentativas = 0;
let acertou = false;

// Iniciar o loop do jogo
while (!acertou) {
    // Solicitar ao jogador uma tentativa
    let tentativa = parseInt(prompt("Tente adivinhar o número secreto (entre 1 e 100): "));
    
    // Incrementar o contador de tentativas
    tentativas++;
    
    // Verificar se o jogador acertou
    if (tentativa === numeroSecreto) {
        console.log(`Parabéns! Você acertou o número secreto (${numeroSecreto}) em ${tentativas} tentativas.`);
        acertou = true;
    } else if (tentativa < numeroSecreto) {
        console.log("Tente um número maior.");
    } else {
        console

console.log("Tente um número menor.");
    }
}
```

A cada iteração do loop, o jogador faz uma tentativa, e o código verifica se a tentativa é igual ao número secreto, maior ou menor. Com base nisso, fornece feedback ao jogador e atualiza o contador de tentativas.

### FOR

O loop for em JavaScript é comumente usado quando você sabe antecipadamente quantas vezes deseja executar um bloco de código. O loop for é frequentemente usado com um contador para iterar através de sequências, como listas, strings e até mesmo intervalos numéricos.

```javascript
for (inicialização; condição; incremento) {
    // Bloco de código a ser executado
}
```

Onde:

- "inicialização" é a expressão executada uma vez antes da execução do bloco de código.
- "condição" é avaliada antes de cada iteração. Se for verdadeira, o bloco de código é executado. Se for falsa, a execução do loop é encerrada.
- "incremento" é executado após a execução do bloco de código em cada iteração.

Exemplo:

```javascript
const frutas = ['maçã', 'banana', 'laranja'];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
```

Neste exemplo, o loop for percorre cada elemento da lista de frutas e imprime seu valor.

Exemplo do for com Strings:

```javascript
const palavra = "JavaScript";

for (let i = 0; i < palavra.length; i++) {
    console.log(palavra[i]);
}
```

Neste exemplo, o loop for percorre cada caractere da string e imprime seu valor.

É muito comum realizarmos a repetição com uma sequência numérica, com um início, intervalo e fim. Veja o exemplo do contador de 10 a 0.

```javascript
for (let i = 10; i >= 0; i--) {
    console.log(i);
}
console.log('fim');
```

Veja que neste exemplo, a variável 'i' assume cada um dos valores da sequência numérica a cada iteração. Por fim, após o bloco do for está a instrução 'console.log('fim')'. O que aconteceria se a instrução 'console.log('fim')' estiver dentro do bloco do 'for'?

### FOR IN

A declaração for...in executa iterações a partir de uma variável específica, percorrendo todas as propriedades de um objeto. Para cada propriedade distinta, o JavaScript executará uma iteração. Segue a sintaxe: 

```js
for (variavel in objeto) {
  declaracoes
}
```
- variável: É uma variável que representará cada chave do objeto em cada iteração.
- objeto: É o objeto sobre o qual estamos iterando

Exemplo:

Vamos ver um exemplo prático de como usar o for...in com manipulação de HTML. Suponha que queremos alterar o estilo de todas as <li> (itens de lista) em uma lista não ordenada (<ul>) no HTML usando JavaScript.

HTML

```html
<ul id="minhaLista">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

```
Javascript
```js
const minhaLista = document.getElementById('minhaLista');
const itens = minhaLista.getElementsByTagName('li');

// Iterando sobre as propriedades do objeto `itens`
for (let indice in itens) {
    if (itens.hasOwnProperty(indice)) { // Garantindo que a propriedade pertence diretamente ao objeto
        itens[indice].style.color = 'blue'; // Alterando a cor do texto para azul
        itens[indice].style.fontWeight = 'bold'; // Deixando o texto em negrito
    }
}

```

É importante observar que o for...in não garante uma ordem específica para a iteração das propriedades de um objeto, especialmente em objetos não numéricos.


### FOR...OF

O `for...of` é uma estrutura de repetição introduzida no ECMAScript 2015 (também conhecido como ES6) que permite percorrer elementos iteráveis, como arrays, strings, mapas, conjuntos, etc. Ele oferece uma sintaxe mais simples e elegante em comparação com o `for...in` ao lidar com iteráveis, pois não percorre as propriedades de um objeto, mas sim os valores dos elementos contidos no iterável.

Aqui está a sintaxe básica do `for...of`:

```javascript
for (variável of iterável) {
    // Bloco de código a ser executado
}
```

Onde:

- `variável`: É uma variável que representará cada elemento do iterável em cada iteração.
- `iterável`: É o objeto iterável sobre o qual estamos iterando, como um array, uma string, um mapa, um conjunto, etc.

Vamos ver exemplos práticos de como usar o `for...of` com diferentes tipos de iteráveis:

### Iterando sobre um Array:

```javascript
const frutas = ['maçã', 'banana', 'laranja'];

for (const fruta of frutas) {
    console.log(fruta);
}
```

Neste exemplo, o `for...of` itera sobre cada elemento do array `frutas`, atribuindo cada elemento à variável `fruta`, que é então usada dentro do bloco de código para exibir cada fruta no console.

### Iterando sobre uma String:

```javascript
const palavra = "JavaScript";

for (const letra of palavra) {
    console.log(letra);
}
```

Neste exemplo, o `for...of` itera sobre cada caractere da string `palavra`, atribuindo cada caractere à variável `letra`, que é então usada dentro do bloco de código para exibir cada letra no console.

### Iterando sobre um Mapa:

```javascript
const mapa = new Map();
mapa.set('a', 1);
mapa.set('b', 2);
mapa.set('c', 3);

for (const [chave, valor] of mapa) {
    console.log(`${chave} : ${valor}`);
}
```

Neste exemplo, o `for...of` itera sobre cada entrada do mapa `mapa`, que é uma coleção de pares chave-valor. Cada entrada é representada por um array `[chave, valor]`, e o `for...of` atribui automaticamente o primeiro elemento (a chave) à variável `chave` e o segundo elemento (o valor) à variável `valor`.

### Iterando sobre um Conjunto:

```javascript
const conjunto = new Set([1, 2, 3, 4, 5]);

for (const numero of conjunto) {
    console.log(numero);
}
```

Neste exemplo, o `for...of` itera sobre cada elemento do conjunto `conjunto`, exibindo cada número no console.

O `for...of` é especialmente útil quando você precisa iterar sobre os valores de um iterável, sem se preocupar com a indexação ou propriedades específicas do objeto iterável. Ele simplifica muito o código e torna a iteração mais intuitiva e fácil de entender.
### Exemplos

#### Exemplo 01

A função a seguir contém uma declaração for que contará o número de opções selecionadas em uma lista (um elemento <select> permite várias seleções). Dentro do for é declarado uma váriavel i inicializada com zero. A declaração for verifica se i é menor que o número de opções no elemento <select>, executa sucessivas declaração if, e incrementa i de um em um a cada passagem pelo laço.

HTML

```html
<form name="selectForm">
  <p>
    <label for="tipoMusica"
      >Escolha alguns tipos de música, em seguida, clique no botão
      abaixo:</label
    >
    <select id="tipoMusica" name="tipoMusica" multiple="multiple">
      <option selected="selected">R&B</option>
      <option>Jazz</option>
      <option>Blues</option>
      <option>New Age</option>
      <option>Classico</option>
      <option>Ópera</option>
    </select>
  </p>
  <p><input id="btn" type="button" value="Quantos foram selecionados?" /></p>
</form>
```

Javascript

```js
function howMany(selectObject) {
    var numeroSelecionadas = 0;
    for (var i = 0; i < selectObject.options.length; i++) {
      if (selectObject.options[i].selected) {
        numeroSelecionadas++;
      }
    }
    return numeroSelecionadas;
  }

  var btn = document.getElementById("btn");
  btn.addEventListener("click", function () {
    alert(
      "Total de opções selecionadas: " +
        howMany(document.selectForm.tipoMusica),
    );
  });
```

#### Exemplo 02 - Utilizando o loop for para exibir uma lista de números na página HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Exemplo de Loop For</title>
</head>
<body>

<h2>Números de 1 a 5:</h2>
<ul id="numeros"></ul>

<script>
// Selecionando o elemento ul onde os números serão exibidos
var numerosList = document.getElementById("numeros");

// Loop for para adicionar números de 1 a 5 na lista
for (var i = 1; i <= 5; i++) {
    var li = document.createElement("li"); // Criando elemento li
    li.textContent = i; // Definindo o texto do elemento li
    numerosList.appendChild(li); // Adicionando o elemento li à lista ul
}
</script>

</body>
</html>

```


#### Exemplo 03: Utilizando o loop while para exibir uma lista de cores na página HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Exemplo de Loop While</title>
</head>
<body>

<h2>Cores:</h2>
<ul id="cores"></ul>

<script>
// Selecionando o elemento ul onde as cores serão exibidas
var coresList = document.getElementById("cores");

// Lista de cores
var cores = ["vermelho", "verde", "azul", "amarelo", "laranja"];

// Índice inicial
var i = 0;

// Loop while para adicionar cores à lista
while (i < cores.length) {
    var li = document.createElement("li"); // Criando elemento li
    li.textContent = cores[i]; // Definindo o texto do elemento li
    coresList.appendChild(li); // Adicionando o elemento li à lista ul
    i++; // Incrementando o índice
}
</script>

</body>
</html>

```

#### Exemplo 04: Utilizando o loop do-while para exibir uma lista de frutas na página HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Exemplo de Loop Do-While</title>
</head>
<body>

<h2>Frutas:</h2>
<ul id="frutas"></ul>

<script>
// Selecionando o elemento ul onde as frutas serão exibidas
var frutasList = document.getElementById("frutas");

// Lista de frutas
var frutas = ["maçã", "banana", "laranja", "uva", "morango"];

// Índice inicial
var i = 0;

// Loop do-while para adicionar frutas à lista
do {
    var li = document.createElement("li"); // Criando elemento li
    li.textContent = frutas[i]; // Definindo o texto do elemento li
    frutasList.appendChild(li); // Adicionando o elemento li à lista ul
    i++; // Incrementando o índice
} while (i < frutas.length);
</script>

</body>
</html>
```

## Exercício
Para as questões práticas utilize este [modelo](https://codepen.io/R-mulo-Costa-de-Menezes-J-nior/pen/qBzEYyo)

1. Nos exemplos acima substitua os laços de repetição por for...of...
   
2. Crie uma página web que solicite um número e mostre em uma lista numerada todos os números pares de 0 até o número lido utilizando um loop "for"
   
3. Crie uma página web que solicite um número e, em seguida, imprima a tabuada desse número (de 1 a 10) utilizando um loop "for".
   
4. Crie uma página web que peça ao usuário para digitar uma frase e, em seguida, conte quantas vogais (a, e, i, o, u) existem na frase utilizando um loop "for".
   
5. Crie uma página web que peça ao usuário para digitar uma palavra e, em seguida, imprima a palavra ao contrário utilizando um loop "for"
   
6. Crie uma página web que peça ao usuário para adivinhar um número secreto entre 1 e 100. O programa deve informar se o palpite é muito alto, muito baixo ou correto. Continue pedindo ao usuário para adivinhar até que ele acerte o número utilizando um loop "while".
   
8. Crie uma página web que peça ao usuário para adivinhar uma palavra de 5 letras (por exemplo: termo). A página deve contar a quantidade de tentativa. Continue pedindo ao usuário para adivinhar até que ele acerte.
   
9. Crie uma página web que leia um número n (número de termos de uma progressão aritmética), a1 ( o primeiro termo da progressão) e r (a razão da progressão) e escreva os n termos desta progressão, bem como a soma dos elementos.
