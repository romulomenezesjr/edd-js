const array = [1, 2, 3];
array.push(4); // Permitido, pois 'const' não impede a mutação de arrays ou objetos
console.log(array); // Saída: [1, 2, 3, 4]

const objeto = { nome: "João", idade: 30 };
objeto.nome = "Maria"; // Permitido, pois 'const' não impede a mutação de arrays ou objetos
console.log(objeto); // Saída: { nome: "Maria", idade: 30 }