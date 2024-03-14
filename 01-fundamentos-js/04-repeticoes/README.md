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
