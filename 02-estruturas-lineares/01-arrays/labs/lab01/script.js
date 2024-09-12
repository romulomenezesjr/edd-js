const meuArray = [1,2,3,4,5,6]

exibirArray()

function exibirArray(){
  const divMeuArray = document.getElementById("meuArray")
  divMeuArray.innerHTML = ""
  for (let i = 0; i < meuArray.length; i++){
    divMeuArray.appendChild(criarDiv(meuArray[i]))
  }
}

function executarPop() {
  meuArray.pop()
  exibirArray()
}

function executarShift(){
  meuArray.shift()
  exibirArray()
}

function executarPush(){
    let valor = document.getElementById("elemento").value
    meuArray.push(valor)
    exibirArray()
}

function executarUnshift(){
  let valor = document.getElementById("elemento").value
  meuArray.unshift(valor)
  exibirArray()
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