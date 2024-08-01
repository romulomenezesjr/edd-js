# Arrays

Arrays são uma parte fundamental de qualquer linguagem de programação. No JavaScript são um dos recursos mais utilizados e que possuem diversos métodos poderosos para manipular os dados armazenados. Os Arrays são usados para armazenar coleções de múltiplos valores em uma única variável. Algumas das características mais distintivas dos arrays no Javascript são:

- Tamanho dinâmico
- São objetos
- Acessados por índice num

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

Arrays são objetos semelhantes a listas,  eles possuem as propriedades acessadas por índices e uma série de métodos embutidos para realizar operações de travessia e mutação. Os elementos de um array são somente propriedades, da mesma forma que lenght é uma propriedade. Contudo, note que tentando acessar o primeiro elemento de um array da seguinte forma causará um erro de sintaxe, pois o nome da propriedade é inválido:
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


## Características

### Tamanho
O tamanho de um array não é fixo
Tipos de elementos não são fixos, cabe ao programador escolher usar arrays tipados ou não
Arrays não tem a garantia de serem densos,  cabe ao programador escolher como utilizá-lo
Índices numéricos, mas pode-se utilizar números em strings pois serão convertidos.

## Arrays como objetos


Arrays não podem usar strings como índices (como em um array associativo), devem ser usados números inteiros. Definir ou acessar não-inteiros usando notação de colchetes (ou notação de ponto) não vai definir ou recuperar um elemento do array em si, mas sim definir ou acessar uma variável associada com a coleção de propriedades de objeto daquele array. As propriedades de objeto do array e a lista de elementos do array são separados, e as operações de travessia e mutação não podem ser aplicadas a essas propriedades nomeadas.
