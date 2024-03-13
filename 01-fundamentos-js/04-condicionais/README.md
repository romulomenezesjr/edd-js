### Instrução de seleção simples (if):  

A instrução "if" é utilizada em JavaScript para executar um bloco de código se uma condição for avaliada como verdadeira. A sintaxe básica é a seguinte:
```js
if (condição) {
    // código a ser executado se a condição for verdadeira
}
```

Se a condição for verdadeira, o código dentro do bloco "if" será executado. Caso contrário, o bloco será ignorado e a execução continuará com o próximo bloco de código.

```js
/* Example 01 - if */
var num = 1;
if (num === 1) {
  console.log('num is equal to 1');
}
```
 No exemplo a seguir o código do bloco do if foi ignorado e nenhuma mensagem é apresentada no console.
 
```js
/* Example 02 - if */
var num = 2;
if (num === 1) {
  console.log('num is equal to 1');
}
```

O if avalia um valor booleano, podendo surgir de uma expressão lógica ou relacional. Nos exemplos anteriores mostramos o uso do operador relacional de igualdade estrita, o qual retorna um valor booleano. 

```js
/* Example 03 - if */
let idade = 18;
if (idade >= 18) {
    console.log("Você pode votar.");
}

```

Veja outros exemplos a seguir e o uso de operadores lógicos, como o operador lógico &&:

```js
/* Example 04 - if */
let idade = 25;
let temCarteiraDeMotorista = true;

if (idade >= 18 && temCarteiraDeMotorista) {
    console.log("Você pode dirigir.");
} else {
    console.log("Você não pode dirigir.");
}

```

Alguns métodos e funções também podem resultar em resultado booleano. Veja o exemplo a seguir com o método includes de arrays.

```js
/* Example 05 - if */
let coresPreferidas = ["azul", "vermelho", "verde"];
let corEscolhida = prompt("Digite sua cor preferida: ");

if (coresPreferidas.includes(corEscolhida)) {
    console.log("Essa cor está na lista das suas cores preferidas.");
} 

```

### IF ELSE

A instrução "if/else" permite executar um bloco de código quando uma condição é verdadeira e outro bloco de código quando a condição é falsa. A sintaxe é a seguinte:

```js
/* Example 01 - if-else */
if (condição) {
    // código a ser executado se a condição for verdadeira
} else {
    // código a ser executado se a condição for falsa
}

```

Veja o exemplo a seguir:

```js
/* Example 02 - if-else */
var num = 0;
if (num === 1) {
  console.log('num is equal to 1');
} else {
  console.log('num is not equal to 1, the value of num is ' + num);
}
```

### IF ELSE IF ELSE SEQUENCIAL

A instrução "if/else/else if" é usada para testar várias condições em sequência. A palavra-chave "else if" permite verificar condições adicionais após o primeiro "if". A sintaxe é a seguinte. Veja sintaxe a seguir: 

```js
if (condição1) {
    // código a ser executado se a condição1 for verdadeira
} else if (condição2) {
    // código a ser executado se a condição2 for verdadeira
} else if (condição3) {
    // código a ser executado se a condição3 for verdadeira
} else {
    // código a ser executado se nenhuma das condições anteriores for verdadeira
}

```

Veja os exemplos a seguir: 

```js
/* Example 01 - if-else-if-else... */
let nota = 75;
if (nota >= 90) {
    console.log("Aprovado com nota A.");
} else if (nota >= 80) {
    console.log("Aprovado com nota B.");
} else if (nota >= 70) {
    console.log("Aprovado com nota C.");
} else {
    console.log("Reprovado.");
}
```


### IF ELSE ANINHADO IF ELSE

As instruções if/else aninhadas permitem criar estruturas de decisão mais complexas, onde condições adicionais são testadas dentro dos blocos de código associados aos comandos if e else. Isso é útil quando você precisa verificar múltiplas condições em sequência para determinar o fluxo do programa.

Aqui está a estrutura geral de instruções if/else aninhadas em JavaScript:

```js
if (condição1) {
    // código a ser executado se a condição1 for verdadeira
} else {
    if (condição2) {
        // código a ser executado se a condição1 for falsa e a condição2 for verdadeira
    } else {
        // código a ser executado se a condição1 e a condição2 forem falsas
    }
}

```

Você pode adicionar mais blocos "else" aninhados para testar condições adicionais. Os blocos serão executados sequencialmente, de cima para baixo, até que uma condição seja verdadeira ou até que todos os blocos tenham sido verificados.

Vamos ver um exemplo para entender melhor:

```js
let idade = 25;
let temCarteiraDeMotorista = true;
let temPassagemAerea = false;

if (idade >= 18) {
    if (temCarteiraDeMotorista) {
        console.log("Você pode dirigir.");
    } else {
        console.log("Você não pode dirigir sem carteira de motorista.");
    }
} else {
    if (temPassagemAerea) {
        console.log("Sua viagem está confirmada.");
    } else {
        console.log("Você não pode viajar sem ser maior de idade ou sem passagem aérea.");
    }
}

```

As instruções if/else aninhadas podem se tornar mais complexas à medida que você adiciona mais condições, mas são muito úteis para implementar lógica condicional mais elaborada em seus programas. Lembre-se de manter a estrutura de indentação correta para evitar erros de sintaxe em JavaScript.

Você pode substituir as estruturas aninhadas com operadores booleanos. Faça isso no exemplo anterior.

### SWITCH CASE

O switch é uma estrutura de controle em JavaScript que permite avaliar uma expressão e executar diferentes blocos de código com base no valor dessa expressão. É útil quando você tem várias condições diferentes para verificar e executar ações correspondentes para cada caso.

Sintaxe:

```js
switch (expressao) {
    case valor1:
        // código a ser executado se expressao for igual a valor1
        break;
    case valor2:
        // código a ser executado se expressao for igual a valor2
        break;
    // Adicione quantos casos (cases) forem necessários
    default:
        // código a ser executado se nenhum dos casos ant

```


- A expressão é avaliada uma vez.
- O valor da expressão é comparado com os valores de cada caso.
- Se houver uma correspondência, o bloco de código associado a esse caso é executado.
- A instrução break é usada para sair do switch após a execução do bloco de código correspondente. Se o break for omitido, a execução continuará com o próximo caso, resultando em um comportamento indesejado.
- O bloco default é opcional e será executado se nenhum dos casos corresponder ao valor da expressão

Aqui está um exemplo de switch em JavaScript:



```js
/* Example 04 - switch */
let diaDaSemana = 5;
let mensagem;

switch (diaDaSemana) {
    case 1:
        mensagem = "Hoje é segunda-feira.";
        break;
    case 2:
        mensagem = "Hoje é terça-feira.";
        break;
    case 3:
        mensagem = "Hoje é quarta-feira.";
        break;
    case 4:
        mensagem = "Hoje é quinta-feira.";
        break;
    case 5:
        mensagem = "Hoje é sexta-feira.";
        break;
    case 6:
        mensagem = "Hoje é sábado.";
        break;
    case 7:
        mensagem = "Hoje é domingo.";
        break;
    default:
        mensagem = "Dia inválido.";
}

console.log(mensagem);

```

Neste exemplo, a variável diaDaSemana é comparada com diferentes valores em cada caso, e a variável mensagem é atribuída de acordo com o dia correspondente. Se o diaDaSemana não corresponder a nenhum dos casos, a mensagem "Dia inválido" será atribuída, pois não há um bloco de código correspondente ao valor.

O switch é útil quando você precisa de uma estrutura de controle com várias condições para verificar e executar diferentes blocos de código com base em uma única expressão. No entanto, em muitos casos, estruturas de controle como if/else if/else são mais flexíveis e fáceis de entender.

### TERNARIO

O operador ternário é uma forma concisa de escrever uma instrução de seleção simples. Ele permite avaliar uma condição e retornar um valor com base no resultado da condição, tudo em uma única linha. A sintaxe é a seguinte:

```js
condição ? valor_se_verdadeiro : valor_se_falso;

```
Neste exemplo a variável num será decrementada se for igual a 1 ou será incrementada caso contrário.

```js
/* Example 01 - ternary operator - if..else */
if (num === 1) {
  num--;
} else {
  num++;
}

// is the same as
num === 1 ? num-- : num++;
```


Neste exemplo, a variável "mensagem" receberá o valor "Maior de idade" se a idade for maior ou igual a 18, caso contrário, receberá o valor "Menor de idade".

```js
/* Example 02 - ternary operator - if..else */

let idade = 20;
let mensagem = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(mensagem);

```
