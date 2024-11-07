function map(f, array) {
    const result = []; // Cria um novo Array
    for (let elemento of array) { 
        result.push(f(elemento))
    }
    return result;
}
const dobrar = function (v) {
    return v * 2
}
array = [1, 2, 3]
console.log(map(dobrar, array))