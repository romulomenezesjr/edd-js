// array-stack.js
elementos = []
function push(item){
    elementos.push(item)
}
function pop(){
    return elementos.pop()
}
function peek(){
    const tamanho = elementos.length
    return elementos[tamanho - 1]
}
function isEmpty(){
    if (elementos.length == 0) {
        return true
    } else {
        return false
    }
}
function size(){
    return elementos.length
}

let resultado = isEmpty()
console.log(resultado)
push(4)
push("dog")
resultado = peek()
console.log(resultado)
push(true)
resultado = size()
console.log(resultado)
resultado = isEmpty()
console.log(resultado)

push(8.4)
resultado = pop()
console.log(resultado)
resultado = pop()
console.log(resultado)
resultado = size()
console.log(resultado)

