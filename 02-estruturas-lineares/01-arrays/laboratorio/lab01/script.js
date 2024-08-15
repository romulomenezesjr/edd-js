const meuArray = []

exibirArray()

function exibirArray(){
  const divMeuArray = document.getElementById("meuArray")
  divMeuArray.appendChild(criarDiv("texto"))
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
  // const novaDiv = `
  //   <div class='min-w-10 bg-blue-300 shadow-md rounded m-4 p-1'>
  //     <h1 class='text-center'> ${valor}</h1>
  // `
  // return novaDiv

  const novaDiv = document.createElement("div")
  novaDiv.className = "min-w-10 bg-blue-300 shadow-md rounded m-4 p-1"

  const texto = document.createElement("h1")
  texto.className = "text-center"
  texto.innerText = valor

  novaDiv.appendChild(texto)
  return novaDiv
}