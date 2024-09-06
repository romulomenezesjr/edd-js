let meuArray = [1,2,3,10, 15, 21, 22, 29, 30]

exibirArray()

function exibirArray(){
  // Limpa o valor da div 
  document.getElementById("meuArray").innerHTML = ""

  // Adiciona os elementos novamente na div
  meuArray.map((valor)=>{
    const novoQuadro = criarDiv(valor)
    document.getElementById("meuArray").appendChild(novoQuadro)
  })
  console.log(meuArray)

}

function executarPush(){
    // Recupera o elemento HTML 
    const elemento = document.getElementById("elemento")
    
    // Acessa o conteúdo do elemento input
    const valor = elemento.value

    // Limpa o conteúdo do elemento
    elemento.value = ""

    // Adiciona o valor ao array
    meuArray.push( parseInt(valor))

    exibirArray()
}

function executarSort(){
  meuArray.sort( (a,b)=>(a-b))
  exibirArray()
}

function executarPesquisa(){
  const elementoPesquisado = document.getElementById("elementoPesquisado")
  const valorPesquisado = elementoPesquisado.value
  elementoPesquisado.value = ""

  pesquisar(valorPesquisado)
}

function executarPesquisaBinaria(){
  const elementoPesquisado = document.getElementById("elementoPesquisado")
  const valorPesquisado = elementoPesquisado.value
  elementoPesquisado.value = ""

  //pesquisar_binaria(valorPesquisado)
  // pesquisa_binaria_rec(valorPesquisado, meuArray, 0, meuArray.length - 1)
  pesquisa_binaria(valorPesquisado, meuArray, 0, meuArray.length - 1)
}

function pesquisar(valorPesquisado){
  let i = 0
  let encontrou = false
  for (const elemento of meuArray) {
    i++
    if (elemento == valorPesquisado){
      encontrou = true
      break
    }
  }
  if (encontrou){
    document.getElementById("resultado").innerText = `${i} comparações. Encontrou!`
  } else {
    document.getElementById("resultado").innerText = `${i} comparações.  Não encontrou!`
  }
}

function pesquisa_binaria(valorPesquisado){
  let left = 0
  let right = meuArray.length - 1
  let middle = Math.floor((left + right)/2)
  let i = 0
  while (left <= right){
    i++
    if (valorPesquisado == meuArray[middle]) {
      document.getElementById("resultado").innerText = `${i} comparações. Encontrou!`
      return
    } else if (valorPesquisado < meuArray[middle]){
      right = middle - 1
    } else if (valorPesquisado > meuArray[middle]){
      left = middle + 1
    }  
    middle = Math.floor((left + right)/2)
  }
}

function pesquisa_binaria_rec(valorPesquisado, array, left, right){
  console.log("Comparacao")
  if (left > right) {
    document.getElementById("resultado").innerText = "Não econtrou!"

    return 
  }

  let middle = Math.floor((left + right)/2)

  if (valorPesquisado == array[middle]) {
    document.getElementById("resultado").innerText = "Econtrou!"
    return
  } else if (valorPesquisado < array[middle]){
    pesquisa_binaria_rec(valorPesquisado, array, left, middle - 1)
  } else if (valorPesquisado > array[middle]){
    pesquisa_binaria_rec(valorPesquisado, array, middle + 1, right)
  } 
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
