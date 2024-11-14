import { Queue } from "./queue-class.js"

botaoEntrar.addEventListener("click", entrarNaFila)
botaoChamar.addEventListener("click", chamarPrimeiro)

const queue = new Queue()
function entrarNaFila(){
    console.log("entrarNaFila")
    const nome = document.querySelector("#nome").value
    queue.enqueue(nome)
}

function chamarPrimeiro(){
    console.log("chamarPrimeiro")
    const primeiro = queue.dequeue()
    document.querySelector("#primeiro").innerHTML = `<p>${primeiro}</p>`
}