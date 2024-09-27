# Tipos

No JavaScript, os tipos de dados são as categorias de valores que as variáveis podem armazenar. Eles são divididos em dois grandes grupos: tipos primitivos e tipos de objetos. 

## Tipos Primitivos

1. **Number**
   - Representa números tanto inteiros quanto de ponto flutuante.
   - Exemplos: `42`, `3.14`, `-7`
   - Há valores especiais como `Infinity`, `-Infinity`, e `NaN` (Not-a-Number).

   ```javascript
   let age = 25;
   let price = 19.99;
   let negative = -5;
   ```

2. **String**
   - Representa uma sequência de caracteres.
   - Pode ser delimitada por aspas simples (`'`), aspas duplas (`"`), ou crases (`` ` ``) para strings literais (template literals).

   ```javascript
   let name = "Alice";
   let greeting = 'Hello, world!';
   let template = `My name is ${name}`;
   ```

3. **Boolean**
   - Representa um valor lógico: `true` ou `false`.

   ```javascript
   let isActive = true;
   let isCompleted = false;
   ```

4. **Undefined**
   - Uma variável que foi declarada mas não inicializada tem o valor `undefined`.

   ```javascript
   let uninitialized;
   console.log(uninitialized); // undefined
   ```

5. **Null**
   - Representa a ausência intencional de um valor.

   ```javascript
   let emptyValue = null;
   ```

6. **Symbol** (introduzido no ES6)
   - Representa um valor único e imutável.
   - Utilizado principalmente para criar identificadores únicos.

   ```javascript
   let uniqueId = Symbol('id');
   ```

7. **BigInt** (introduzido no ES2020)
   - Representa números inteiros maiores que `Number.MAX_SAFE_INTEGER`.

   ```javascript
   let bigNumber = 9007199254740991n;
   ```

## Tipos de Objetos

1. **Object**
   - É a estrutura mais geral para armazenar dados mais complexos.
   - Objetos são coleções de pares chave-valor.

   ```javascript
   let person = {
     name: "John",
     age: 30,
     isStudent: false
   };
   ```

2. **Array**
   - Um tipo especial de objeto para armazenar listas ordenadas de valores.

   ```javascript
   let colors = ["red", "green", "blue"];
   ```

3. **Function**
   - Também um tipo especial de objeto que é executável.

   ```javascript
   function greet() {
     console.log("Hello!");
   }
   ```

4. **Date**
   - Representa uma data e hora.

   ```javascript
   let now = new Date();
   ```

5. **RegExp**
   - Representa expressões regulares.

   ```javascript
   let pattern = /ab+c/;
   ```

### Exemplos e Operações Básicas sobre os tipos

- **Strings**
  - Concatenação: `let fullName = firstName + ' ' + lastName;`
  - Template literals: ``let greeting = `Hello, ${name}`;``

- **Numbers**
  - Operações matemáticas: `let sum = 10 + 20;`

- **Booleans**
  - Operadores lógicos: `&&` (AND), `||` (OR), `!` (NOT)

- **Objetos**
  - Acesso a propriedades: `person.name` ou `person['name']`
  - Adição de propriedade: `person.address = "123 Main St";`

- **Arrays**
  - Acesso a elementos: `colors[0]` (primeiro elemento)
  - Métodos comuns: `push`, `pop`, `shift`, `unshift`, `map`, `filter`, `reduce`

### Typeof Operador

O operador `typeof` pode ser usado para verificar o tipo de uma variável:

```javascript
console.log(typeof 42); // "number"
console.log(typeof "Hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (isto é uma peculiaridade do JavaScript)
console.log(typeof Symbol("id")); // "symbol"
console.log(typeof 123n); // "bigint"
console.log(typeof {}); // "object"
console.log(typeof []); // "object"
console.log(typeof function(){}); // "function"
```

Compreender esses tipos de dados e como manipulá-los é fundamental para programar em JavaScript.

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

    ### Veja mais exemplos:
    
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

## Observações :

- A conversão de tipos em JavaScript pode levar a resultados inesperados, então é importante entender como ela funciona para evitar comportamentos indesejados em seu código.
- É sempre uma boa prática usar conversões explícitas quando a intenção é clara para tornar o código mais legível e menos propenso a erros.
- Além desses métodos e operadores mencionados, há outras nuances de conversão de tipos em JavaScript, como a conversão automática de tipos em operações aritméticas, comparações e outras operações. É útil entender essas nuances para escrever código robusto e prever o comportamento de suas operações.