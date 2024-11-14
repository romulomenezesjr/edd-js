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

  console.log(pessoa.nome)
  pessoa.bio()
  pessoa.cidade = "Picui"
  pessoa.informarDados = function(){
    console.log("Dados da uma pessoa: ")
    this.bio()
  }
  pessoa.informarDados()