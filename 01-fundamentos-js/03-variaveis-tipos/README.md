### Variáveis

Em JavaScript, as variáveis são usadas para armazenar dados. Elas são espaços na memória que você pode usar para guardar valores, como números, strings, objetos, entre outros tipos de dados. Ao atribuir um valor a uma variável, você pode usá-la posteriormente no seu código, alterar seu valor conforme necessário e até mesmo combiná-la com outras variáveis.

Aqui está um exemplo simples de como declarar e atribuir valores a uma variável em JavaScript:

```javascript
// Declaração de variáveis usando a palavra-chave 'let'
let nome = "João";
let idade = 25;
let altura = 1.75;
```

Neste exemplo:

- `nome` é uma variável que armazena uma string, neste caso, o nome "João".
- `idade` é uma variável que armazena um número inteiro, neste caso, a idade 25.
- `altura` é uma variável que armazena um número decimal, neste caso, a altura 1.75 metros.

Você também pode declarar variáveis sem atribuir um valor inicial a elas. Por exemplo:

```javascript
let sobrenome;
```

Depois de declarar uma variável, você pode atribuir um valor a ela usando o operador de atribuição `=`:

```javascript
sobrenome = "Silva";
```

Também é possível atualizar o valor de uma variável reatribuindo um novo valor a ela:

```javascript
idade = 26; // Atualiza o valor da variável idade para 26
```

Em JavaScript, você pode usar três palavras-chave para declarar variáveis: `var`, `let` e `const`. No entanto, `let` e `const` são as mais modernas e recomendadas. A diferença entre elas está principalmente em relação ao escopo e à mutabilidade:

- `let`: Declara uma variável com escopo de bloco e seu valor pode ser alterado.
- `const`: Declara uma variável de valor constante (ou seja, imutável), mas seu conteúdo pode ser alterado se for um objeto ou um array.

Por exemplo:

```javascript
let x = 10;
const y = 20;

x = 15; // Isso é permitido, pois x é uma variável 'let'
y = 25; // Isso resultará em um erro, pois y é uma constante e seu valor não pode ser alterado
```

É importante entender que variáveis em JavaScript são case-sensitive, ou seja, diferenciam maiúsculas de minúsculas. Por exemplo, `nome` e `Nome` são tratadas como duas variáveis diferentes.

### Escopo das variáveis

A declaração **let** declara uma variável local com escopo de bloco, opcionalmente inicializando-a com um valor.

Constantes têm escopo de bloco, assim como variáveis declaradas usando a palavra-chave let. O valor de uma constante não pode ser alterado por meio de reatribuição (ou seja, usando o operador de atribuição), e ela não pode ser redeclarada (ou seja, por meio de uma declaração de variável).

    No entanto, se uma constante for um objeto ou array, suas propriedades ou itens podem ser atualizados ou removidos.

Vamos exemplificar com alguns exemplos as diferenças entre `var` e `let` em JavaScript.

1. Escopo de Bloco:

   ```javascript
   // Exemplo com var
   function exemploVar() {
     if (true) {
       var x = 10;
     }
     console.log(x); // x é acessível fora do bloco if
   }
   exemploVar(); // Saída: 10

   // Exemplo com let
   function exemploLet() {
     if (true) {
       let y = 20;
     }
     console.log(y); // y não é acessível fora do bloco if
   }
   exemploLet(); // Erro: y is not defined
   ```

   No exemplo acima, com `var`, a variável `x` é acessível fora do bloco condicional `if`, o que pode levar a comportamentos inesperados e dificuldades de depuração. Com `let`, a variável `y` é limitada ao escopo do bloco `if`, evitando possíveis problemas.

2. Redeclaração:

   ```javascript
   var a = 5;
   var a = 10;
   console.log(a); // Saída: 10

   let b = 15;
   let b = 20; // Isso resultará em um erro de sintaxe
   ```

   Com `var`, você pode redeclarar uma variável sem causar erro. Já com `let`, tentar redeclarar uma variável resultará em um erro de sintaxe.

3. Hoisting:

   ```javascript
   console.log(x); // Saída: undefined
   var x = 5;

   console.log(y); // Erro: y is not defined
   let y = 10;
   ```

   Com `var`, a variável é "içada" (hoisted) para o topo do escopo em que foi declarada, o que significa que a declaração é movida para o topo, mas a atribuição permanece no lugar original. Com `let`, a variável não é inicializada até que a declaração seja alcançada no código, resultando em um erro se você tentar acessá-la antes da declaração.

4. Escopo de Função:

   ```javascript
   function exemploVar() {
     var x = 5;
     if (true) {
       var x = 10;
       console.log(x); // Saída: 10
     }
     console.log(x); // Saída: 10, a variável x é reatribuída no escopo da função
   }
   exemploVar();

   function exemploLet() {
     let y = 5;
     if (true) {
       let y = 10;
       console.log(y); // Saída: 10
     }
     console.log(y); // Saída: 5, a variável y é limitada ao escopo do bloco if
   }
   exemploLet();
   ```

Com `var`, a redeclaração dentro do bloco condicional afeta o escopo da função inteira. Com `let`, a variável é limitada ao escopo do bloco, portanto, não afeta o valor da variável fora dele.

Vamos ver alguns exemplos que ilustram as diferenças entre `let` e `const` em JavaScript.

1. Mutabilidade:

   ```javascript
   let numero = 5;
   numero = 10; // Permitido, pois 'let' permite a reatribuição de valores
   console.log(numero); // Saída: 10

   const constante = 15;
   constante = 20; // Isso resultará em um erro, pois 'const' não permite a reatribuição de valores
   console.log(constante); // Essa linha não será alcançada devido ao erro anterior
   ```

   Neste exemplo, a variável `numero`, declarada com `let`, pode ter seu valor reatribuído. Já a variável `constante`, declarada com `const`, não pode ter seu valor reatribuído, resultando em um erro de sintaxe.

2. Escopo:

   ```javascript
   {
     let x = 5;
     console.log(x); // Saída: 5
   }

   console.log(x); // Erro: x is not defined, pois 'let' tem escopo de bloco

   {
     const y = 10;
     console.log(y); // Saída: 10
   }

   console.log(y); // Erro: y is not defined, pois 'const' também tem escopo de bloco
   ```

   Ambos `let` e `const` têm escopo de bloco, o que significa que eles só são acessíveis dentro do bloco em que foram declarados. Tentar

   acessá-los fora desse bloco resultará em um erro de variável não definida (`undefined`).

3. Inicialização:

   ```javascript
   let a;
   console.log(a); // Saída: undefined

   const b;
   console.log(b); // Erro: Missing initializer in const declaration
   ```

   Com `let`, você pode declarar uma variável e atribuir um valor a ela posteriormente ou deixá-la não inicializada, resultando em `undefined`. No entanto, ao declarar uma constante (`const`), você deve atribuir um valor a ela imediatamente, caso contrário, ocorrerá um erro de sintaxe.

4. Arrays e Objetos (mutabilidade parcial):

   ```javascript
   const array = [1, 2, 3];
   array.push(4); // Permitido, pois 'const' não impede a mutação de arrays ou objetos
   console.log(array); // Saída: [1, 2, 3, 4]

   const objeto = { nome: "João", idade: 30 };
   objeto.nome = "Maria"; // Permitido, pois 'const' não impede a mutação de arrays ou objetos
   console.log(objeto); // Saída: { nome: "Maria", idade: 30 }
   ```

   Embora `const` impeça a reatribuição direta de um array ou objeto a uma nova referência, isso não impede a mutação de seus elementos. Você pode adicionar, remover ou modificar elementos de um array, bem como adicionar, remover ou modificar propriedades de um objeto.

   Esses exemplos ilustram as diferenças fundamentais entre `let` e `const` em JavaScript, destacando a imutabilidade de `const` e a permissão de reatribuição de `let`. Essa distinção é útil para escrever código mais seguro e previsível.

### Operadores

```js
// @ts-check
/* eslint-disable */

/* Arithmetic operators */
var num = 0; // {1}
console.log("num value is " + num);

num = num + 2;
console.log("New num value is " + num);

num = num * 3;
console.log("New num value is " + num);

num = num / 2;
console.log("New num value is " + num);

num++;
num--;

console.log("New num value is " + num);

console.log("num mod 2 value is " + (num % 2));

/* Assignment operators */
num += 1;
num -= 2;
num *= 3;
num /= 2;
num %= 3;

console.log("New num value is " + num);

/* Assignment operators */
console.log("num == 1 : " + (num == 1));
console.log("num === 1 : " + (num === 1));
console.log("num != 1 : " + (num != 1));
console.log("num > 1 : " + (num > 1));
console.log("num < 1 : " + (num < 1));
console.log("num >= 1 : " + (num >= 1));
console.log("num <= 1 : " + (num <= 1));

/* Logical operators */
console.log("true && false : " + (true && false));
console.log("true || false : " + (true || false));
console.log("!true : " + !true);

/* Bitwise operators */
console.log("5 & 1:", 5 & 1); // same as 0101 & 0001 (result 0001 / 1)
console.log("5 | 1:", 5 | 1); // same as 0101 | 0001 (result 0101 / 5)
console.log("~ 5:", ~5); // same as ~0101 (result 1010 / 10)
console.log("5 ^ 1:", 5 ^ 1); // same as 0101 ^ 0001 (result 0100 / 4)
console.log("5 << 1:", 5 << 1); // same as 0101 << 1 (result 1010 / 10)
console.log("5 >> 1:", 5 >> 1); // same as 0101 >> 1 (result 0010 / 2)

/* typeOf */
console.log("typeof num:", typeof num);
console.log("typeof Packt:", typeof "Packt");
console.log("typeof true:", typeof true);
console.log("typeof [1,2,3]:", typeof [1, 2, 3]);
console.log("typeof {name:John}:", typeof { name: "John" });

/* delete */
var myObj = { name: "John", age: 21 };
delete myObj.age;
console.log(myObj); // Object {name: "John"}
```

### Valores Verdadeiros e Falsos

```js
function testTruthy(val) {
  return val ? console.log("truthy") : console.log("falsy");
}

testTruthy(true); // true
testTruthy(false); // false
testTruthy(new Boolean(false)); // true (object is always true)

testTruthy(""); // false
testTruthy("a"); // true
testTruthy("Packt"); // true
testTruthy(new String("")); // true (object is always true)

testTruthy(1); // true
testTruthy(-1); // true
testTruthy(NaN); // false
testTruthy(new Number(NaN)); // true (object is always true)

testTruthy({}); // true (object is always true)

var obj = { name: "John" };
testTruthy(obj); // true
testTruthy(obj.name); // true
testTruthy(obj.age); // age (property does not exist)
```

### Operador de Igualdade

```js
console.log("packt" ? true : false);
// outputs true

console.log("packt" == true);
// 1 - converts Boolean using toNumber
// 'packt' == 1
// 2 - converts String using toNumber
// NaN == 1
// outputs false

console.log("packt" == false);
// 1 - converts Boolean using toNumber
// 'packt' == 0
// 2 - converts String using toNumber
// NaN == 0
// outputs false

console.log([0] == true);
// 1 - converts Boolean using toNumber
// [0] == 1
// 2 - converts Object using toPrimitive
// 2.1 - [0].valueOf() is not primitive
// 2.2 - [0].toString is 0
// 0 == 1
// outputs false

//* ****************************** ===
console.log("packt" === true); // false

console.log("packt" === "packt"); // true

var person1 = { name: "John" };
var person2 = { name: "John" };
console.log(person1 === person2); // false, different objects
```

## Conversões de tipos

Em JavaScript, a conversão de tipos é um processo fundamental, já que JavaScript é uma linguagem fracamente tipada, o que significa que as variáveis podem conter diferentes tipos de dados e podem ser convertidas implicitamente ou explicitamente de um tipo para outro. Aqui estão os principais métodos de conversão de tipos em JavaScript:

### Conversão Implícita:

1. **Conversão Numérica Implícita:**

   - Ocorre quando operações numéricas são realizadas entre diferentes tipos de dados. Por exemplo:

   ```javascript
   var x = 10;
   var y = "5";
   var resultado = x + y; // resultado será "105" (concatenação de strings)
   ```

2. **Conversão Booleana Implícita:**

   - Acontece quando um valor é avaliado em um contexto booleano, como em uma estrutura de controle condicional (`if`, `while`, etc.). Qualquer valor pode ser convertido em booleano. Por exemplo:

   ```javascript
   var x = "Hello";
   if (x) {
     console.log("x é verdadeiro");
   } else {
     console.log("x é falso"); // Isso será impresso, porque uma string não vazia é avaliada como verdadeira
   }
   ```

### Conversão Explícita:

1. **Métodos de Conversão de Tipos:**

   - JavaScript fornece métodos para converter explicitamente valores de um tipo para outro.
   - `parseInt()` e `parseFloat()` convertem strings em números inteiros ou de ponto flutuante, respectivamente.
   - `String()` converte outros tipos em strings.
   - `Number()` converte valores em números.
   - `Boolean()` converte valores em booleanos.

   ```javascript
   var x = "10";
   var y = parseInt(x); // y será 10 (um número inteiro)
   var z = String(y); // z será "10" (uma string)
   ```

2. **Operador de Coerção de Tipos:**

   - O operador de coerção de tipos (`+`) pode ser usado para concatenar strings ou para converter valores em números.

   ```javascript
   var x = "10";
   var y = 5;
   var z = x + y; // z será "105" (concatenação de strings)
   var w = +x + y; // w será 15 (adição numérica)
   ```

### Observações Importantes:

- A conversão de tipos em JavaScript pode levar a resultados inesperados, então é importante entender como ela funciona para evitar comportamentos indesejados em seu código.
- É sempre uma boa prática usar conversões explícitas quando a intenção é clara para tornar o código mais legível e menos propenso a erros.
- Além desses métodos e operadores mencionados, há outras nuances de conversão de tipos em JavaScript, como a conversão automática de tipos em operações aritméticas, comparações e outras operações. É útil entender essas nuances para escrever código robusto e prever o comportamento de suas operações.

## Exercícios

1. Quais são os principais métodos para criar, editar e remover elementos HTML usando Javascript?

2. Descreva a diferença entre o Javascript executado no navegador e o executado no Nodejs.

3. Escreva um programa que solicite ao usuário o seu nome e a sua idade, armazenando esses valores em variáveis. Em seguida, remova o formulário e escreva uma mensagem de boas vindas, mostrando o nome e a idade do usuário.

4. Escreva um programa que solicite ao usuário dois números inteiros e armazene-os em variáveis. Em seguida, calcule e imprima a soma, subtração, multiplicação e divisão desses números.

5. Escreva um programa que solicite ao usuário o raio de um círculo e calcule a área e o perímetro desse círculo. Imprima os resultados formatados.

6. Escreva um programa que solicite ao usuário uma temperatura em graus Celsius e converta-a para Fahrenheit. Imprima o resultado formatado.

7. Escreva um programa que solicite ao usuário o seu salário mensal e o número de meses trabalhados no ano. Calcule e imprima o salário anual.

8. Escreva um programa que solicite ao usuário um número e verifique se ele é par ou ímpar. Imprima uma mensagem informando o resultado.

9. Escreva um programa que solicite ao usuário dois valores booleanos (True ou False) e armazene-os em variáveis. Em seguida, aplique os operadores lógicos "and", "or" e "not" entre essas variáveis e imprima os resultados.

10. Escreva um programa que solicite ao usuário duas strings e verifique se elas são iguais. Imprima uma mensagem informando o resultado da comparação.

11. Escreva um programa que solicite ao usuário dois números e verifique se o primeiro número é maior que o segundo. Imprima uma mensagem informando o resultado da comparação.

12. Escreva um programa que solicite ao usuário a sua idade e verifique se ele é maior de idade (idade igual ou superior a 18 anos). Imprima uma mensagem informando o resultado.
