// Fatorial com Recursividade

function fatorial_rep( numero) {
  if (numero === 0) {
    return 1
  }
  let total = 1
  for (let i = 2; i <= numero; i++) {
    console.log(total)
    total = total * i
  }
  console.log(total)
}

function fatorial( numero ){
  if (numero === 0) {
    return 1
  }
  return numero * fatorial( numero - 1)
}

let memo = []
function fibonacci( mes ) {
  if (mes === 0  || mes === 1) {
    return mes
  }

  if (memo[mes]) {
    console.log("reutilização do valor: " + mes)
    return memo[mes]
  } else {
    memo[mes] = fibonacci(mes -1) + fibonacci(mes - 2)
  }
  console.log(memo)
  return memo[mes]
}

// Crie uma função recursiva para obter a multiplicação a partir de operações de soma
// 4 x 2
function multiplicacao(n1, n2) {
  if (n2 == 1) {
    return n1
  }
  return n1 + multiplicacao(n1, n2 - 1)
}
// 2³ = 2 * 2² = 2 * 2 * 2¹ 
function exponenciacao(n1, n2) {
  if (n2 === 1){
    return n1
  }
  return n1 * exponenciacao(n1, n2-1)
}

console.log(fibonacci(12))