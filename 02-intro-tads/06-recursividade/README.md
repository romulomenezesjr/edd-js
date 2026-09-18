# Recursividade

- Recursividade
  - Recursividade
    - Recursividade

Recursão é o processo de definir algo em termos de si mesmo e é, algumas vezes, chamado de definição circular.
O conceito de algo recursivo está dentro de si, que por sua vez está dentro de si e assim sucessivamente, infinitamente.



### Recursividade no Javascript

Uma função pode referir-se e chamar a si própria. Há três maneiras de uma função referir-se a si mesma:

    o nome da função
    arguments.callee
    uma variável no escopo que se refere a função

Por exemplo, considere a seguinte definição de função:

```js

var foo = function bar() {
  // declaracoes
};
```

Dentro do corpo da função, todos, a seguir, são equivalentes:

    bar()
    arguments.callee()
    foo()

Uma função que chama a si mesma é chamada de função recursiva. Em alguns casos, a recursividade é análoga a um laço. Ambos executam o código várias vezes, e ambos necessitam de uma condição (para evitar um laço infinito, ou melhor, recursão infinita, neste caso). Por exemplo, o seguinte laço:

```js

var x = 0;
while (x < 10) {
  // "x < 10" a condição do laço
  // faça coisas
  x++;
}
```
pode ser convertido em função recursiva e uma chamada para a função:
```js

function loop(x) {
  if (x >= 10)
    // "x >= 10" a condição de parada (equivalente a "!(x < 10)")
    return;
  // faça coisas
  loop(x + 1); // chamada recursiva
}
loop(0);
```
No entanto, alguns algoritmos não podem ser simples laços iterativos. Por exemplo, conseguir todos os nós da estrutura de uma árvore (por exemplo, o DOM) é mais fácil se feito recursivamente:
```js

function walkTree(node) {
  if (node == null)
    //
    return;
  // faça algo com o nó
  for (var i = 0; i < node.childNodes.length; i++) {
    walkTree(node.childNodes[i]);
  }
}
```
Em comparação ao laço da função, cada chamada recursiva realiza outras chamadas recursivas.

É possível converter qualquer algoritmo recursivo para um não recursivo, mas muitas vezes a lógica é muito mais complexa e exige o uso de pilhas. Na verdade a própria recursão usa pilha: a pilha de função.

O comportamento da pilha pode ser vista a seguir no exemplo:
```js

function foo(i) {
  if (i < 0) return;
  document.writeln("begin:" + i);
  foo(i - 1);
  document.writeln("end:" + i);
}
foo(3);
```
que produz:

begin:3
begin:2
begin:1
begin:0
end:0
end:1
end:2
end:3