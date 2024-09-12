const meuArray = []

exibirArray()

function criarDiv(valor) {

  const novaDiv = document.createElement("div")
  novaDiv.className = "min-w-10 bg-blue-300 shadow-md rounded m-4 p-1"

  const texto = document.createElement("h1")
  texto.className = "text-center"
  texto.innerText = valor

  novaDiv.appendChild(texto)
  return novaDiv
}

function exibirArray() {
  const div = document.getElementById("meuArray")
  div.innerHTML = ""
  for (const valor of meuArray) {
    div.appendChild(criarDiv(valor))
  }
}
function push(array, valor) {
  const tamanho = array.length
  array[tamanho] = valor
}
function executarPush() {
  const valor = document.getElementById("elemento").value
  push(meuArray, valor)
  exibirArray()
}
function pop(array) {
  const tamanho = array.length
  array.splice(tamanho - 1, 1)
}

function executarPop() {
  pop(meuArray)
  exibirArray()
}

function shift(array) {
  const tamanho = array.length
  for (let i = 1; i < tamanho ; i++) {
    array[i-1] = array[i]
  }
  array.splice(tamanho - 1, 1)
}

function executarShift() {
  shift(meuArray)
  exibirArray()
}

function unshift(array, valor) {
  const tamanho = array.length
  for (let i = tamanho; i > 0; i--){
      array[i] = array[i-1]
  }
  array[0] = valor
}

function executarUnshift() {
  const valor = document.getElementById("elemento").value
  unshift(meuArray, valor)
  exibirArray()
}

