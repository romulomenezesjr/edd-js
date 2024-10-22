import {Queue} from "./class-queue.js"

const q = new Queue()

meuForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const valor = document.querySelector("#elemento").value
    q.enqueue(valor)
    renderizar()
})
dequeueButton.addEventListener("click", ()=>{
    const value = q.dequeue()
    logValue(value)
    renderizar()
})
frontButton.addEventListener("click", ()=>{
    const value = q.front()
    logValue(`Front: ${value}`)
    renderizar()
})
rearButton.addEventListener("click", ()=>{
    const value = q.rear()
    logValue(`Rear: ${value}`)
    renderizar()
})
isEmptyButton.addEventListener("click", ()=>{
    const value = q.isEmpty()
    logValue(`Is Empty?  ${value}`)
    renderizar()
})
sizeButton.addEventListener("click", ()=>{
    const value = q.size()
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
    const divStack = document.querySelector("#queue")
    divStack.innerHTML = ""
    const queueRev = [...q.items]
    for(let e of queueRev) {
        const newDiv = document.createElement("div")
        newDiv.className = "border rounded  py-2 px-3 text-gray-700"
        newDiv.innerHTML = e
        divStack.appendChild(newDiv)
    }
}