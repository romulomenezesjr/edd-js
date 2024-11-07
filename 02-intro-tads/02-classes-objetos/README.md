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

Vejamos um exemplo a seguir para instanciar um objeto a partir de uma classe que represente um Carro.

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

let cachorro = new Cachorro("Mat");
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