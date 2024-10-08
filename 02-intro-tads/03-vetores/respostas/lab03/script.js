let meuArray = [1,2,3,10]

exibirArray()

function exibirArray(){
  // meuArray.forEach( (value) => {
  //   // Cria uma div 
  //   const novoQuadro = criarDiv(value)
  //   document.getElementById("meuArray").appendChild(novoQuadro)
  // })

  // for(const valor of meuArray){
  //   // Cria uma div 
  //   const novoQuadro = criarDiv(valor)
  //   document.getElementById("meuArray").appendChild(novoQuadro)
  // }

  // Limpa o valor da div 
  document.getElementById("meuArray").innerHTML = ""

  // Adiciona os elementos novamente na div
  meuArray.map((valor)=>{
    const novoQuadro = criarDiv(valor)
    document.getElementById("meuArray").appendChild(novoQuadro)
  })
  console.log(meuArray)

}

function pop(array){
  array.splice(array.length - 1, 1)
}

function push(array, valor) {
  array[array.length] = valor
}

function unshift(array, valor){
  for (let i = array.length; i > 0; i--) {
    array[i] = array[i-1]
  }
  array[0] = valor
}

function shift(array) {
  for (let i = 0; i < array.length; i++){
    array[i] = array[i+1]
  }
  array.splice(array.length -1 , 1)
}

function executarPop() {
  pop(meuArray)
  exibirArray()
}

function executarShift(){
  shift(meuArray)
  exibirArray()
}

function executarPush(){
    // Recupera o elemento HTML 
    const elemento = document.getElementById("elemento")
    
    // Acessa o conteúdo do elemento input
    const valor = elemento.value

    // Limpa o conteúdo do elemento
    elemento.value = ""

    // Adiciona o valor ao array
    push(meuArray, valor)

    exibirArray()
}

function executarUnshift(){
  // Recupera o elemento HTML 
  const elemento = document.getElementById("elemento")
  
  // Acessa o conteúdo do elemento input
  const valor = elemento.value

  // Limpa o conteúdo do elemento
  elemento.value = ""

  // Adiciona o valor ao array
  meuArray.unshift(valor)

  console.log(meuArray)

  exibirArray()
}

function executarInserir(){
  
  document.getElementById("meuArray").innerHTML = ""

  elementoInput = document.getElementById("elemento")
  valor = elementoInput.value
  elementoInput.value = ""

  posicaoInput = document.getElementById("posicao")
  posicao = posicaoInput.value
  posicaoInput.value = ""

  for (let i = meuArray.length; i > posicao; i--){
    meuArray[i] = meuArray[i-1]
  }

  meuArray[posicao] = parseInt(valor)

  exibirArray()
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
