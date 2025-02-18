itens = []

function enfileirar(elemento) {
    itens.push(elemento)
}

function desenfileirar(){
    if (itens.length === 0) {
        return "Fila está vazia"
    }
    return itens.shift()
}
function primeiro(){
    if (itens.length === 0) {
        return "Fila está vazia"
    }
    return itens[0]
}

function ultimo(){
    if (itens.length === 0) {
        return "Fila está vazia"
    }
    return itens[itens.length - 1]
}