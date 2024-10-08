const meuArray = new Array(10)

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

  meuArray.map((valor)=>{
    const novoQuadro = criarDiv(valor)
    document.getElementById("meuArray").appendChild(novoQuadro)
  })
}

function executarPop() {
  // Limpa o valor da div 
  document.getElementById("meuArray").innerHTML = ""
  meuArray.pop()
  exibirArray()
}

function executarShift(){
  // Limpa o valor da div 
  document.getElementById("meuArray").innerHTML = ""
  meuArray.shift()
  exibirArray()
}

function executarPush(){
    // Limpa o valor da div 
    document.getElementById("meuArray").innerHTML = ""

    // Recupera o elemento HTML 
    const elemento = document.getElementById("elemento")
    
    // Acessa o conteúdo do elemento input
    const valor = elemento.value

    // Limpa o conteúdo do elemento
    elemento.value = ""

    // Adiciona o valor ao array
    meuArray.push(valor)

    console.log(meuArray)

    exibirArray()
}

function executarUnshift(){
  // Limpa o valor da div meuArray
  document.getElementById("meuArray").innerHTML = ""

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

function criarDiv(valor){ 
  const novaDiv = document.createElement("div")
  novaDiv.className = "min-w-10 bg-blue-300 shadow-md rounded m-4 p-1"

  const texto = document.createElement("h1")
  texto.className = "text-center"
  texto.innerText = valor

  novaDiv.appendChild(texto)
  return novaDiv
}