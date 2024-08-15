const meuArray = []

exibirArray()

function exibirArray(){
  
}

function pop(array){
}

function push(array, valor) {
}

function unshift(array, valor){
  
}

function shift(array) {
  
}

function executarPop() {
  
}

function executarShift(){
 
}

function executarPush(){
    
}

function executarUnshift(){
 
}

function criarDiv(valor){ 
  const novaDiv = document.createElement("div")
  novaDiv.className = "min-w-10 bg-blue-300 shadow-md rounded m-4 p-1"

  const texto = document.createElement("h1")
  texto.className = "text-center"
  texto.innerText = valor

  novaDiv.appendChild(texto)
  return novaDiv
}