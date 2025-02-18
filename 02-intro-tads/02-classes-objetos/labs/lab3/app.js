class Conta {
    #saldo
    constructor(saldo) {
      this.#saldo = saldo; // Propriedade privada por convenção
    }
  }
const c1 = new Conta(100)
c1.#saldo = "a"
console.log(c1.#saldo)