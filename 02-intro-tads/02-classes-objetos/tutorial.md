## Tutorial

Neste tutorial você irá realizar a leitura dos parágrafos a seguir e aplicá-los no arquivo 'tutorial.html' para ao final visualizar o resultado  diretamente no navegador. 


1. Objetos em Javascript

Em javascript os objetos podem ser criados dinamicamente, sem a necessidade prévia de classes. Observe que podemos criar 
um objeto chamado aluno que possua as propriedades nome, idade e curso. 
```js
const aluno = {
  nome: "Carlos",
  idade: 20,
  curso: "Engenharia"
};
```

**Crie um objeto professor com as propriedades nome, disciplina, tempoDeExperiencia.**

2. Acesso às propriedades

Para acessar as propriedades podemos utilizar duas notações: notação com ponto e notação com colchetes

```js
console.log(aluno.nome);        // Ponto
console.log(aluno["nome"]);     // Colchetes
```

**No seu objeto professor, acesse o valor da disciplina do objeto professor usando os dois métodos e altere os valores de nome e tempo de experiência.**

3. Propriedades dinâmicas nos objetos

É possível definir e remover uma propriedade a qualquer momento em um objeto, basta atribuir um valor à ela ou utilizar a função 'delete'. Obs: Algumas vezes podemos ter um objeto e acessar uma propriedade que não existe.
Utilize o método hasOwnProperty() em uma condicional para visualizar as propriedades dos objetos.

```js
aluno.matriculado = true;
delete aluno.idade

```

**Adicione ao objeto professor a propriedade emSala com valor false e remova a propriedade tempoDeExperiencia. Para visualizá-las com o console.log utilize uma condicional em conjunto com o método hasOwnProperty()**

4. Definindo objetos

Para definir objetos de uma maneira mais estruturada podemos utilizar um bloco com chaves e diversas propriedades com valores ou funções atribuídas.

```js
const livro = {
  titulo: "1984",
  autor: "George Orwell",
  ano: 1949,
  exibirInfo() {
    console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Ano: ${this.ano}`);
  }
};
```
**Crie um objeto artigo com titulo, autor, ano e método exibirDados()**

5. Arrays de objetos

Podemos definir arrays contendo diversos objetos utilizando colchetes para abrir e fechar o array e chaves para iniciar e finalizar o objeto:

```js
const biblioteca = [
  { titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899 },
  { titulo: "Capitães da Areia", autor: "Jorge Amado", ano: 1937 },
  { titulo: "O Cortiço", autor: "Aluísio Azevedo", ano: 1890 }
];

```
**Crie um array contendo pelo menos 3 artigos diferentes.**

6. Percorrendo os arrays

A partir de um array de objetos é possível percorrê-lo com for..of ou forEach

```js
biblioteca.forEach(livro => {
  console.log(`${livro.titulo} - ${livro.autor} (${livro.ano})`);
});

for (let livro of biblioteca){
  console.log(`${livro.titulo} - ${livro.autor} (${livro.ano})`);
}
```
**Percorra o array de artigos para imprimir todas as informações**

7. Função construtora

Uma função construtora Pessoa(nome, idade)  cria objetos com essas propriedades e um método falar() que imprime "Olá, meu nome é <nome>"

```js
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.falar = function() {
    console.log(`Olá, meu nome é ${this.nome}`);
  };
}

const joao = new Pessoa("João", 35);
joao.falar();

```
**Seguindo este processo, crie funções construtoras para Aluno, Professor, Livro e Artigo.**

8. Classes

A partir do ES6 podemos utilizar classes, tal qual outras linguagens.

```js
class Aluno {
  constructor(nome, matricula, curso) {
    this.nome = nome;
    this.matricula = matricula;
    this.curso = curso;
    this.livrosEmprestados = [];
  }

  apresentar() {
    console.log(`Meu nome é ${this.nome}, matrícula ${this.matricula}, curso: ${this.curso}.`);
  }

  emprestarLivro(livro) {
    this.livrosEmprestados.push(livro);
  }
```

**Crie as classes para Professor, Livro e Artigo.**

9. Manipular Formulário

Utilizando dados de um formulário HTML podemos criar objetos a partir da interação com o usuário.

```html
<form id="formLivro">
    <label>Título: <input type="text" id="titulo" required></label><br>
    <label>Autor: <input type="text" id="autor" required></label><br>
    <label>Ano: <input type="number" id="ano" required></label><br>
    <button type="button" onclick="criarLivro()">Cadastrar</button>
</form>
<h3>Livros Cadastrados:</h3>
<ul id="listaLivros"></ul>
<script>
    const livros = [];

    function criarLivro() {
      const titulo = document.getElementById("titulo").value;
      const autor = document.getElementById("autor").value;
      const ano = document.getElementById("ano").value;

      const livro = {
        titulo,
        autor,
        ano: parseInt(ano)
      };

      livros.push(livro);
      exibirLivros();
      document.getElementById("formLivro").reset();
    }

    function exibirLivros() {
      const lista = document.getElementById("listaLivros");
      lista.innerHTML = livros.map(l => `<li>${l.titulo} - ${l.autor} (${l.ano})</li>`).join('');
    }
  </script>
```

**Crie múltiplos formulários para cadastrar professor, aluno, livro e artigo.**


10. Herança
O exemplo a seguir está  mostrando como reaproveitar propriedades e métodos utilizando o extends e como especializar o comportamento nas subclasses

```js
// Superclasse Pessoa
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

// Subclasse Aluno
class Aluno extends Pessoa {
  constructor(nome, idade, curso) {
    super(nome, idade); // chama o construtor da classe Pessoa
    this.curso = curso;
  }

  apresentar() {
    console.log(`Sou o aluno ${this.nome}, tenho ${this.idade} anos e curso ${this.curso}.`);
  }
}
```
**Utilize esta estrutura para as classes professor. Também utilize esta estrutura para Livros, Artigo e uma superclasse chamada MaterialDidatico.**



