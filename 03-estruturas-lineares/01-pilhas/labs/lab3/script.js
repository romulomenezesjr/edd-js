import {Stack} from "./class-stack.js"

const s = new Stack()

const pushButton = document.querySelector("#push")
pushButton.addEventListener("click", ()=>{
    const valor = document.querySelector("#elemento").value
    s.push(valor)
    renderizar()
})

function renderizar(){
    const divStack = document.querySelector("#stack")
    divStack.innerHTML = ""
    for(let e in s.pilha) {
        const newDiv = document.createElement("div")
        newDiv.innerHTML = e
        divStack.appendChild(newDiv)
    }
}