function fora() {
    var x = 10;
    function dentro(x) {
      return x;
    }
    return dentro;
  }
  result = fora()(20); // retorna 20 em vez de 10
  console.log(result)