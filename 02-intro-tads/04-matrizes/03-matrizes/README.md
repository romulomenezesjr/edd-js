# Matrizes

Por padrão, os arrays em javascript são apenas unidimensionais. Porém, é possível criar arrays com mais de uma dimensão, isso é conhecido como Matriz/Aarrays multidimensionais. Para isso é necessário criar arrays que contêm outros arrays como seus elementos. 

Isso permite a criação de estruturas mais complexas, como estruturas 2D (tabelas de dados ou imagens), 3D (modelos 3d) e 4d (vídeos com múltiplos canais). O caso mais comum é a matriz bidimensional, que é essencialmente uma "tabela" de dados.

## Criando uma Matriz Bidimensional (2D)

Uma matriz 2D em JavaScript pode ser representada como um array onde cada elemento é outro array. Um exemplo básico é uma tabela com 3 linhas e 3 colunas. No exemplo a seguir a **matriz2D** contém três arrays, cada um com três elementos.

```js

let matriz2D = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

```

## Acessando/Modificando Elementos de uma Matriz

Para acessar um elemento em uma matriz multidimensional, você precisa de um índice para cada dimensão. Neste caso o primeiro índice representa a linha e o segundo índice representa a coluna.

```javascript

console.log(matriz2D[0][0]);  // Saída: 1 (primeira linha, primeira coluna)
console.log(matriz2D[1][2]);  // Saída: 6 (segunda linha, terceira coluna)
console.log(matriz2D[2][1]);  // Saída: 8 (terceira linha, segunda coluna)

```


Para modificar os elementos de uma matriz 2D basta atribuir um valor da mesma forma que acessa, usando os índices da linha e da coluna:

```javascript

matriz2D[1][2] = 10;  // Modifica o elemento da segunda linha, terceira coluna para 10
console.log(matriz2D[1][2]);  // Saída: 10

```
## Iterando sobre uma Matriz Multidimensional

Você pode usar um laço for para percorrer uma matriz multidimensional. No caso de uma matriz 2D, são necessários dois loops: um para as linhas e outro para as colunas.

Exemplo de iteração em uma matriz 2D:

```javascript

for (let i = 0; i < matriz2D.length; i++) {
  for (let j = 0; j < matriz2D[i].length; j++) {
    console.log(matriz2D[i][j]);
  }
}

```
Neste exemplo, o laço externo (i) percorre as linhas da matriz e o laço interno (j) percorre as colunas de cada linha.

### Função para definir uma matriz

Podemos extender a classe nativa Array do javascript para acrescentar uma função que gere uma matriz com **n** linhas e **m** colunas da seguinte forma: 

```js

Array.matrix = function(n, m, initial=0) {
 let arr = [];
 for (let i = 0; i < n; ++i) {
  let columns = [];
    for (let j = 0; j < m; ++j) {
      columns[j] = initial;
    }
  arr[i] = columns;
 }
 return arr;
 }

```

## Matriz Tridimensional (3D)

Da mesma forma que uma matriz 2D é uma "array de arrays", uma matriz 3D é um array onde cada elemento é um array 2D. Por exemplo, imagine um cubo com 2 camadas, cada uma sendo uma matriz 2D de 3x3:

```javascript

let matriz3D = [
  [  // Primeira camada
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ],
  [  // Segunda camada
    [10, 11, 12],
    [13, 14, 15],
    [16, 17, 18]
  ]
];
```

Para acessar elementos em uma matriz 3D, você precisará de três índices: um para a camada, um para a linha e outro para a coluna.

```javascript

console.log(matriz3D[1][2][1]);  // Saída: 17 (segunda camada, terceira linha, segunda coluna)

```

Você pode iterar sobre uma matriz tridimensional usando três laços for aninhados:

```javascript

for (let i = 0; i < matriz3D.length; i++) {
  for (let j = 0; j < matriz3D[i].length; j++) {
    for (let k = 0; k < matriz3D[i][j].length; k++) {
      console.log(matriz3D[i][j][k]);
    }
  }
}
```

## Matrizes Multidimensionais 

Você pode criar uma matriz multidimensional de forma dinâmica, especialmente se o tamanho não for conhecido antecipadamente. Aqui está um exemplo de como criar uma matriz 2D de 3x3 preenchida com zeros:

```javascript

let linhas = 3;
let colunas = 3;
let matriz = new Array(linhas);

for (let i = 0; i < linhas; i++) {
  matriz[i] = new Array(colunas).fill(0);
}

console.log(matriz);  // Saída: [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

```