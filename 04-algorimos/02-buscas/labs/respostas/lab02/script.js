let meuArray = [10,2,3,-1]

exibirArray()

function exibirArray(){
  document.getElementById("meuArray").innerHTML = ""

  meuArray.map((valor)=>{
    const novoQuadro = criarDiv(valor)
    document.getElementById("meuArray").appendChild(novoQuadro)
  })
  console.log(meuArray)

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

function executarSort(){
  alert("Ordena os elementos in-place")
  meuArray = meuArray.sort((a, b) => a - b)
  //meuArray.sort()
  exibirArray()
}

function executarFilter(){
  alert("Filtrando valores maiores que zero e retorna em outro array")
  meuArray = meuArray.filter( (valor) =>{
    return valor > 0
  })
  exibirArray()
}

function executarMap(){
  alert("Duplicando o valor de cada elemento e retorna em outro array")
  meuArray = meuArray.map( (valor) =>{
    return valor*2
  })
  exibirArray()
}

function executarFind(){
  alert("Busca e retorna o primeiro valor comparando os elementos")
  resultado = meuArray.find( (valor) =>{
    return valor % 2 === 0
  })
  alert(resultado)
  exibirArray()
}


function executarReduce(){
  alert("Realiza uma acao para cada elemento e retorna no acumulador")
  resultado = meuArray.reduce( (acc, valor) =>{
    return acc + valor
  })
  alert(resultado)
  exibirArray()
}