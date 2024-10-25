function imprimirTamanho(array){
    console.log(array.length)
}
const a = ["Jogos", "Internos"]
a.map(imprimirTamanho)
// ---------------------
const b = ["Jogos", "Internos"]
b.map( (elemento) => console.log(elemento.length))