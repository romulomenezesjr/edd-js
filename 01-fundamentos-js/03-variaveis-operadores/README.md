## Variáveis

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


## Operadores


### Operadores Aritméticos 

Os operadores aritméticos em JavaScript são utilizados para realizar operações matemáticas em valores numéricos. Abaixo estão os principais operadores aritméticos em JavaScript:

1. **Adição (+):**
   - Usado para adicionar valores.

    Exemplo:
    ```javascript
    var soma = 5 + 3; // soma será 8
    ```

2. **Subtração (-):**
   - Usado para subtrair valores.

    Exemplo:
    ```javascript
    var diferenca = 10 - 4; // diferenca será 6
    ```

3. **Multiplicação (*):**
   - Usado para multiplicar valores.

    Exemplo:
    ```javascript
    var produto = 3 * 4; // produto será 12
    ```

4. **Divisão (/):**
   - Usado para dividir valores.

    Exemplo:
    ```javascript
    var quociente = 20 / 5; // quociente será 4
    ```

5. **Módulo (%):**
   - Retorna o resto da divisão entre dois valores.

    Exemplo:
    ```javascript
    var resto = 10 % 3; // resto será 1 (pois 10 dividido por 3 é 3 com 1 de resto)
    ```

6. **Incremento (++):**
   - Adiciona 1 ao valor da variável.

    Exemplo:
    ```javascript
    var x = 5;
    x++; // Agora x será 6
    ```

7. **Decremento (--):**
   - Subtrai 1 do valor da variável.

    Exemplo:
    ```javascript
    var y = 10;
    y--; // Agora y será 9
    ```

Os operadores aritméticos também podem ser combinados com a atribuição (`+=`, `-=`, `*=`, `/=`) para simplificar operações como incremento ou decremento.

### Operador de Igualdade

Em JavaScript, o operador de igualdade é utilizado para comparar valores e determinar se eles são iguais. Existem dois tipos de operadores de igualdade em JavaScript: o operador de igualdade estrita (===) e o operador de igualdade solta (ou abstrata) (==).

#### Operador de Igualdade Estrita (===):

- O operador de igualdade estrita verifica se dois valores são iguais em tipo e valor.
- Se os tipos dos valores comparados forem diferentes, o operador de igualdade estrita retornará false.
- Se os tipos dos valores comparados forem iguais, então ele verificará se os valores também são iguais.

```js
console.log(5 === 5); // true
console.log("5" === 5); // false
console.log(5 === "5"); // false
```

#### Operador de Igualdade Ampla (==):

O operador de igualdade solta converte os valores antes de compará-los. Ele tenta fazer com que os dois valores tenham o mesmo tipo antes de verificar a igualdade.
Se os tipos dos valores comparados forem diferentes, o JavaScript tentará converter um dos valores para o tipo do outro antes de fazer a comparação.
Isso pode levar a resultados inesperados, especialmente quando se trata de tipos diferentes.

```js
console.log(5 == 5); // true
console.log("5" == 5); // true, porque o JavaScript converte a string "5" para o número 5
console.log(5 == "5"); // true, por razões semelhantes
```

Sempre use === a menos que você tenha um motivo específico para usar ==. O operador de igualdade estrita é mais seguro e evita muitos dos problemas potenciais de conversão de tipos que podem surgir com o operador de igualdade solta.
Se você precisa comparar valores e garantir que eles sejam do mesmo tipo, use ===.
Evite o uso de == quando não for estritamente necessário, pois isso pode levar a resultados inesperados devido à coerção de tipos.

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
