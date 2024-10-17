// Exemplo com var
function exemploVar() {
    if (true) {
      var x = 10;
    }
    console.log(x); // x é acessível fora do bloco if
}
exemploVar(); // Saída: 10
  
// Exemplo com let
function exemploLet() {
    if (true) {
        let y = 20;
    }
    console.log(y); // y não é acessível fora do bloco if
}
exemploLet(); // Erro: y is not defined