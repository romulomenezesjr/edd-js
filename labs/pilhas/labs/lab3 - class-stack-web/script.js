import {Stack} from "./class-stack.js"

const s = new Stack()

meuForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const data = new FormData(e.target)
    console.log([...data.entries()])
    const valor = document.querySelector("#elemento").value
    s.push(valor)
    renderizar()
})
popButton.addEventListener("click", ()=>{
    const value = s.pop()
    logValue(value)
    renderizar()
})
peekButton.addEventListener("click", ()=>{
    const value = s.peek()
    logValue(`Top: ${value}`)
    renderizar()
})
isEmptyButton.addEventListener("click", ()=>{
    const value = s.isEmpty()
    logValue(`Is Empty?  ${value}`)
    renderizar()
})
sizeButton.addEventListener("click", ()=>{
    const value = s.size()
    logValue(`Size: ${value}`)
    renderizar()
})

function logValue(value){
    logger.innerHTML = `<p>${value}</p>`
    setTimeout(()=>{
        logger.innerHTML = ""
    }, 2500)
}

function renderizar(){
    const divStack = document.querySelector("#stack")
    divStack.innerHTML = ""
    const pilhaRev = [...s.pilha].reverse()
    for(let e of pilhaRev) {
        const newDiv = document.createElement("div")
        newDiv.className = "border rounded  py-2 px-3 text-gray-700"
        newDiv.innerHTML = e
        divStack.appendChild(newDiv)
    }
}