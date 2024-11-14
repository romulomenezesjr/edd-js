# Objetos

Um objeto é uma coleção de dados e/ou funcionalidades relacionadas (que geralmente consistem em diversas variáveis e funções — que são chamadas de propriedades e métodos quando estão dentro de objetos).

## Definição

No JavaScript, a criação de um objeto pode ser feita com a definição e a inicialização de uma variável. Ao imprimir este objeto no console podemos ver a representação dele.

```js
const pessoa = {};
console.log(pessoa)
```
um objeto é composto de vários membros, cada um com um nome (ex.: nome e idade vistos acima), e um valor (ex.: ['Bob', 'Smith'] e 32). Cada par nome/valor deve ser separado por uma vírgula e o nome e valor, em cada caso, separados por dois pontos. A sintaxe sempre segue esse padrão:

```js
const nomeDoObjeto = {
  nomeMembro1: valorMembro1,
  nomeMembro2: valorMembro2,
  nomeMembro3: valorMembro3,
}
```
Desta forma, podemos definir objetos com atributos e métodos, da seguinte maneira:

```js
const pessoa = {
  nome: ["Bob", "Smith"],
  idade: 32,
  sexo: "masculino",
  interesses: ["música", "esquiar"],
  bio: function () {
    console.log(
      this.nome[0] +
        " " +
        this.nome[1] +
        " tem " +
        this.idade +
        " anos de idade. Ele gosta de " +
        this.interesses[0] +
        " e " +
        this.interesses[1] +
        ".",
    );
  },
  saudacao: function () {
    console.log("Oi! Eu sou " + this.nome[0] + ".");
  },
}

```

O valor de um membro do objeto pode ser praticamente qualquer coisa. Em nosso objeto pessoa, temos uma string, um número, dois arrays e duas functions. Os primeiros quatro são data items (dados) e são referenciados como propriedades do objeto. Enquanto os dois últimos itens são funções que permitem que o objeto faça algo com esses dados. São chamados de métodos do objeto.

Um objeto como esse é chamado de objeto literal — ao pé da letra, escrevemos o conteúdo do objeto conforme o criamos. Isto está em contraste com objetos instanciados de classes.

É muito comum criar um objeto usando um objeto literal quando você deseja transferir uma série de itens de dados relacionados estruturados de alguma maneira, por exemplo, enviando uma solicitação para o servidor para ser colocado em um banco de dados. Enviar um único objeto é muito mais eficiente do que enviar vários itens individualmente, e é mais fácil trabalhar com um array, quando você deseja identificar itens individuais pelo nome.

## Modificando um Objeto

Após a definição de um objeto, é possível utilizar os atributos e métodos. Também é possível definir com novos atributos e métodos. Insira alguns dos itens a seguir:

```js
console.log(pessoa.nome)
pessoa.bio()
pessoa.cidade = "Picui"
pessoa.despedida = function(){
  this.saudacao()
  console.log("Adeus, estou indo embora.")
}
```


## Notação de ponto

As propriedades de objetos e métodos são acessados usando notação de ponto. O objeto nome (pessoa) atua como namespace (espaço de nomes) — ele deve ser digitado primeiro para que você acesse qualquer valor encapsulada dentro do objeto. Depois você escreve um ponto, então o item que quer acessar — isso pode ser o nome de uma simples propriedade, um item de um array ou a chamada para um dos métodos do objeto, por exemplo:

```js
pessoa.idade;
pessoa.interesse[1];
pessoa.bio();

```
### Sub namespaces

É possível fazer o valor de um membro de um objeto ser outro objeto. Por exemplo, tente alterar o nome do membro de:

```js
nome: ['Bob', 'Smith'],
// para
nome : {
  primeiro: 'Bob',
  ultimo: 'Smith'
},

```

Aqui estamos efetivamente criando um sub-namespace. Para acessar esses itens você apenas precisa encadear mais um passo ao final de outro ponto. 

```js
console.log(pessoa.nome.primeiro)
console.log(pessoa.nome.ultimo)
```

## Notação de colchetes

Há outra forma de acessar propriedades do objeto — usando notação de colchetes. 

```js
pessoa.idade
pessoa.nome.primeiro
// pode ser acessado usando []
pessoa["idade"]
pessoa["nome"]["primeiro"]
```

Fica muito parecido com a maneira que acessamos itens de um array, e, na realidade, segue o mesmo princípio. Só que ao invés de usarmos um número de índice para selecionar um item, usamos o nome associado a cada valor. Não é por menos que objetos às vezes são chamados de arrays associativos — eles mapeiam strings a valores do mesmo modo que arrays mapeiam números a valores.

## Entendendo o this

Você pode ter reparado o uso do this ao definir o método despedida. A palavra-chave this se refere ao objeto atual em que o código está sendo escrito — nesse caso o this se refere a pessoa. Vamos ilustrar o que queremos dizer com um par de objetos pessoa:

```js
const pessoa1 = {
  nome: "Chris",
  saudacao: function () {
    alert("Oi! Meu nome é " + this.nome + ".");
  },
}

const pessoa2 = {
  nome: "Brian",
  saudacao: function () {
    alert("Oi! Meu nome é " + this.nome + ".");
  },
}

```

Neste caso, pessoa1.saudacao() gerará "Oi! Meu nome é Chris."; No entanto, pessoa2.saudacao() retornará "Oi! Meu nome é Brian.", mesmo que os códigos dos métodos sejam idênticos. Como dissemos antes, o this é igual ao código do objeto dentro dele — não é exatamente útil quando estamos escrevendo objetos literais na mão, mas é realmente incrível quando adicionamos objetos gerados dinamicamente (por exemplo usando construtores)

## Você vem usando objetos o tempo todo

Enquanto passava por esses exemplos, você provavelmente andou pensando que essa notação de ponto que estamos usando é muito familiar. Isso é porque você vem usando isso. 

 Todas as vezes que trabalhamos num exemplo que usa uma API interna do navegador ou objetos Javascript, estamos usando objetos, porque esses recursos são construídos usando exatamente o mesmo tipo de estrutura de objetos. 

 Então quando usamos métodos de strings como split, estamos usando um método disponível na instância da class String. Toda vez que você cria uma string em seu código, essa string é automaticamente criada como uma instância de String, e, portanto, possui vários métodos e propriedades comuns que estão disponíveis para ela.

 ```js
 const minhaString = "1,2,3,4"
 minhaString.split(",");
 ```

Quando você acessa o DOM (document object model) você está usando métodos disponíveis na instância da class Document. Cada vez que a página é recarrecada, uma instância de Document é criada, chamando document, que representa a estrutura inteira da página, conteúdo e outros recursos como sua URL. Isso significa que ela tem vários métodos e propriedades disponíveis nela.


```js
const minhaDiv = document.createElement("div")
const meuVideo = document.querySelector("video")

```

Objetos/APIs embutidos nem sempre criam instâncias de objetos automaticamente. Por exemplo, a API de Notificações — que permite que navegadores modernos disparem notificações de sistema — requerem que você inicialize uma nova instância de objeto usando o construtor para cada notificação que queira disparar. Tente entrar o seguinte no seu console Javascript:

```js
const minhaNotificacao = new Notification("Hello!")
```

    A partir desta estrutura para criar objetos seria possível criar uma função possa construir um objeto a partir de parametros fornecidos? 


# Prototipos de Objetos

O JavaScript é frequentemente descrito como uma linguagem baseada em protótipos — para fornecer herança, os objetos podem ter um objeto de protótipo, que atua como um objeto de modelo do qual herda métodos e propriedades. 

As propriedades e os métodos são definidos na propriedade prototype nas funções construtoras dos Objetos, não nas próprias instâncias do objeto.

Vamos ver o exemplo do construtor Person() a instância de objeto person1:

```js
function Person(first, last, age, gender, interests) {
  // property and method definitions
  this.first = first
  this.last = last
  //...
}
const person1 = new Person("Bob", "Smith", 32, "male", ["music", "skiing"])
```

Ao chamar o método **valueOf()** em person1, temos a execução do método herdado da classe Object.

## A propriedade prototype: Onde os membros herdados são definidos

As propriedades e os métodos herdados são definidos na propriedade **prototype**. Ao observar a página de referência do Object, verá, à esquerda, um grande número de propriedades e métodos, 

Você pode conferir as propriedades de protótipo existentes para si mesmo:

```js
Person.prototype;
```


# Classes


## Introdução
 

Um conceito fundamental da programação orientada a objetos (OOP) são as classes. Elas permitem que você crie abstrações e com isso instancie objetos com propriedades e métodos. Esta funcionalidade aliada com o paradigma facilita a organização e a reutilização do código.

### Definição

Uma classe é uma definição de um tipo. A partir deste tipo podemos criar objetos. A classe pode especificar propriedades (também chamadas de atributos) e métodos (funções associadas à classe).

### Sintaxe Básica

Em JavaScript, a sintaxe básica para declarar uma classe consiste no uso da palavra chave **class** antes do nome da classe. O corpo da classe fica dentro das chaves {}. Neste espaço se define os membros da classe, como construtores e métodos. O método construtor é definido com o nome **constructor**. O método constructor é um tipo especial de método para criar e iniciar um objeto criado pela classe. Só pode existir um método especial com o nome "constructor" dentro da classe. 

```js
class NomeDaClasse {

  // Construtor da classe
  constructor(parametros) {
    // Inicialização de propriedades
    this.propriedade = parametros;
  }

  // Método da classe
  metodo() {
    // Código do método
  }

}

```

### Métodos Estáticos e Propriedades Estáticas

A palavra-chave static define um método estático de uma classe. Métodos estáticos são chamados sem a instanciação da sua classe e não podem ser chamados quando a classe é instanciada. Métodos estáticos são geralmente usados para criar funções de utilidades por uma aplicação.

Propriedades de instâncias devem ser definidas dentro dos métodos da classe. Propriedades de dados estáticos e propriedades de dados prototipados (prototype) devem ser definidos fora da declaração do corpo da classe.

```js
class NomeDaClasse {

  // Construtor da classe
  constructor(parametros) {
    // Inicialização de propriedades
    this.propriedade = parametros;
  }

  // Método da classe
  metodo() {
    // Código do método
  }

  static metodoEstatico(){
    // Código do método que pode ser executado diretamente pela classe
  }
}

NomeDaClasse.prototype.valor = 10
NomeDaClasse.valor = 10
```

### Criando classes com expressões

Também é possível criar classes como uma expressão, de forma similar à funções:

```js

const NomeDaClasse = class {
  constructor(parametros) {
    this.propriedade = parametros;
  }
};
```

### Instanciando objetos

O exemplo a seguir irá instanciar um objeto a partir de uma classe que represente um Carro.

```js
class Carro {
  // Construtor da classe
  constructor(marca, modelo) {
    this.marca = marca; // Propriedade de instância
    this.modelo = modelo; // Propriedade de instância
  }

  // Método da classe
  mostrarInfo() {
    console.log(`Carro: ${this.marca} ${this.modelo}`);
  }
}

// Criando uma instância da classe Carro
const meuCarro = new Carro('Toyota', 'Corolla');
meuCarro.mostrarInfo(); // Output: Carro: Toyota Corolla

```
### Herança


A palavra-chave extends é usada em uma declaração de classe, ou em uma expressão de classe para criar uma classe como filha de uma outra classe. Se existir um contrutor nas subclasses, é necessário primeiro chamar super() antes de usar a keyword "this".

```js
class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(this.nome + " emite um barulho.");
  }
}

class Cachorro extends Animal {
  falar() {
    console.log(this.nome + " latidos.");
  }
}

let cachorro = new Cachorro("Rex");
cachorro.falar();

```

### Propriedades Privadas

Propriedades privadas podem ser definidas de duas maneiras:

- Com o uso de um sublinhado (_):

  Essa é uma convenção de nomenclatura que indica que a propriedade é considerada privada. É apenas uma convenção e não impede que o código fora da classe acesse a propriedade. Por exemplo

  ```js
  class Conta {
    constructor(saldo) {
      this._saldo = saldo; // Propriedade privada por convenção
    }
  }
  ```

- Com o símbolo de hash (#):

  Essa é a sintaxe moderna para definir propriedades privadas, que realmente restringe o acesso a essas propriedades fora da classe. Somente métodos dentro da própria classe podem acessar propriedades definidas dessa forma. Por exemplo:
  ```js
  class Conta {
    #saldo; // Propriedade privada

    constructor(saldo) {
      this.#saldo = saldo; // Acesso permitido
    }

    verSaldo() {
      return this.#saldo; // Acesso permitido
    }
  }
  ```


### Get Set

### Herança