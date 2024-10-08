function gerar_array(tamanho){
    const array = []
    for (let i = 0; i < tamanho; i++){
        let num = Math.random() * 100
        array.push(Math.floor(num))
    }
    return array
}

function busca(chave, elementos) {
    let it = 0
    for (let i = 0; i < elementos.length; i++) {
        it++
        if (chave == elementos[i]) {
            return [i, it]
        }
    }
    return [-1, it] 
}

function busca_ord(chave, elementos) {
    let it = 0
    for (let i = 0; i < elementos.length; i++) {
        it++
        if (chave == elementos[i]) {
            return [i, it]
        }
        if (elementos[i] > chave){
            return [-1, it]
        }
    }
    return [-1, it] 
}

function busca_binaria(chave, elementos) {
    let inicio = 0
    let fim = elementos.length - 1
    let meio = 0
    let it = 0
    while (inicio <= fim) {
        it = it + 1
        meio = Math.floor( (inicio + fim) / 2 )
        if (chave == elementos[meio]) {
            return [meio, it]
        } else if (chave < elementos[meio]) {
            fim = meio - 1
        } else {
            inicio = meio + 1
        }
    }
    return [-1, it]
}

const chave = 300
const array = gerar_array(2000)

console.log("Busca Sequencial por ", chave)
const [pos1, iteracoes1] = busca(chave, array)
console.log("Chave encontrada em: ", pos1, " | Iterações: ", iteracoes1)

array.sort( (a,b)=> a-b)

console.log("Busca Ordenada por ", chave)
const [pos2, iteracoes2] = busca_ord(chave, array)
console.log("Chave encontrada em: ", pos2, " | Iterações: ", iteracoes2)

console.log("Busca Binária por ", chave)
const [pos3, iteracoes3] = busca_binaria(chave, array)
console.log("Chave encontrada em: ", pos3, " | Iterações: ", iteracoes3)
