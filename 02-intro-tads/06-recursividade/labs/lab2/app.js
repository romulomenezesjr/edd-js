class Conta {
    #saldo; // Propriedade privada

    constructor(saldo) {
      this.#saldo = saldo; // Acesso permitido
    }

    verSaldo() {
      return this.#saldo; // Acesso permitido
    }
  }

const c = new Conta(10)
console.log(c.verSaldo())