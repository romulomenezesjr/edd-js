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

  static metodoEstatico() {
    // Código do método que pode ser executado diretamente pela classe
  }
}

NomeDaClasse.prototype.valor = 10;
NomeDaClasse.valor = 10;

const obj = new NomeDaClasse()
console.log(obj.valor)