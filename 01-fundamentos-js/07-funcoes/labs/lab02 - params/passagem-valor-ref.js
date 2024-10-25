function dobrar(valor){
    valor = valor * 2
}
function duplicar(valor){
    valor.push(valor[0])
}
let v1 = 10 // simples
let v2 = [10] // objeto
dobrar(v1) // copia do valor de v1
duplicar(v2) // referencia de v2
console.log(v1)
console.log(v2)