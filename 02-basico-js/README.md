
### Olá Mundo

Em um navegador executando um documento HTML com Javascript embutido (uma página web), é possível escrever no documento acessando o objeto **document**, escrever em uma janela pop-up (geradando um alerta no navegador) ou no console do navegador:

```js
function output(t) {
  document.write('<p>' + t + '</p>');
}

alert('Hello, World!');
console.log('Hello, World!');
output('Hello, World!');
var name = prompt("What is your name?");
```



### Variáveis

Variáveis podem ser criadas com a declaração **var** e possuem escopo local ou global. 

```js
var num = 1; // {1}
num = 3; // {2}

var price = 1.5; // {3}
var myName = 'Packt'; // {4}
var trueValue = true; // {5}
var nullVar = null; // {6}
var und; // {7}

console.log('num: ' + num);
console.log('myName: ' + myName);
console.log('trueValue: ' + trueValue);
console.log('price: ' + price);
console.log('nullVar: ' + nullVar);
console.log('und: ' + und);
```


A declaração **let** declara uma variável local com escopo de bloco, opcionalmente inicializando-a com um valor.

Constantes têm escopo de bloco, assim como variáveis declaradas usando a palavra-chave let. O valor de uma constante não pode ser alterado por meio de reatribuição (ou seja, usando o operador de atribuição), e ela não pode ser redeclarada (ou seja, por meio de uma declaração de variável). No entanto, se uma constante for um objeto ou array, suas propriedades ou itens podem ser atualizados ou removidos.

### Escopo das variáveis

```js
// ******* Variable Scope

var myVariable = 'global';
myOtherVariable = 'global';

function myFunction() {
  var myVariable = 'local';
  return myVariable;
}

function myOtherFunction() {
  myOtherVariable = 'local';
  return myOtherVariable;
}

console.log(myVariable); //{1}
console.log(myFunction()); //{2}

console.log(myOtherVariable); //{3}
console.log(myOtherFunction()); //{4}
console.log(myOtherVariable); //{5}
```


### Operadores

```js
// @ts-check
/* eslint-disable */

/* Arithmetic operators */
var num = 0; // {1}
console.log('num value is ' + num);

num = num + 2;
console.log('New num value is ' + num);

num = num * 3;
console.log('New num value is ' + num);

num = num / 2;
console.log('New num value is ' + num);

num++;
num--;

console.log('New num value is ' + num);

console.log('num mod 2 value is ' + num % 2);

/* Assignment operators */
num += 1;
num -= 2;
num *= 3;
num /= 2;
num %= 3;

console.log('New num value is ' + num);

/* Assignment operators */
console.log('num == 1 : ' + (num == 1));
console.log('num === 1 : ' + (num === 1));
console.log('num != 1 : ' + (num != 1));
console.log('num > 1 : ' + (num > 1));
console.log('num < 1 : ' + (num < 1));
console.log('num >= 1 : ' + (num >= 1));
console.log('num <= 1 : ' + (num <= 1));

/* Logical operators */
console.log('true && false : ' + (true && false));
console.log('true || false : ' + (true || false));
console.log('!true : ' + !true);

/* Bitwise operators */
console.log('5 & 1:', 5 & 1); // same as 0101 & 0001 (result 0001 / 1)
console.log('5 | 1:', 5 | 1); // same as 0101 | 0001 (result 0101 / 5)
console.log('~ 5:', ~5); // same as ~0101 (result 1010 / 10)
console.log('5 ^ 1:', 5 ^ 1); // same as 0101 ^ 0001 (result 0100 / 4)
console.log('5 << 1:', 5 << 1); // same as 0101 << 1 (result 1010 / 10)
console.log('5 >> 1:', 5 >> 1); // same as 0101 >> 1 (result 0010 / 2)

/* typeOf */
console.log('typeof num:', typeof num);
console.log('typeof Packt:', typeof 'Packt');
console.log('typeof true:', typeof true);
console.log('typeof [1,2,3]:', typeof [1, 2, 3]);
console.log('typeof {name:John}:', typeof { name: 'John' });

/* delete */
var myObj = { name: 'John', age: 21 };
delete myObj.age;
console.log(myObj); // Object {name: "John"}
```

### Valores Verdadeiros e Falsos

```js
function testTruthy(val) {
  return val ? console.log('truthy') : console.log('falsy');
}

testTruthy(true); // true
testTruthy(false); // false
testTruthy(new Boolean(false)); // true (object is always true)

testTruthy(''); // false
testTruthy('a'); // true
testTruthy('Packt'); // true
testTruthy(new String('')); // true (object is always true)

testTruthy(1); // true
testTruthy(-1); // true
testTruthy(NaN); // false
testTruthy(new Number(NaN)); // true (object is always true)

testTruthy({}); // true (object is always true)

var obj = { name: 'John' };
testTruthy(obj); // true
testTruthy(obj.name); // true
testTruthy(obj.age); // age (property does not exist)
```

### Operador de Igualdade

```js
console.log('packt' ? true : false);
// outputs true

console.log('packt' == true);
// 1 - converts Boolean using toNumber
// 'packt' == 1
// 2 - converts String using toNumber
// NaN == 1
// outputs false

console.log('packt' == false);
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
console.log('packt' === true); // false

console.log('packt' === 'packt'); // true

var person1 = { name: 'John' };
var person2 = { name: 'John' };
console.log(person1 === person2); // false, different objects
```

### Condicionai