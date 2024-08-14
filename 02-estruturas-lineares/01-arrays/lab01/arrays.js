let turma_g1 = ["João", "Maria"]
let turma_g2 = ["Marcelo", "Ana"]
let turma_todos = turma_g1.concat(turma_g2)

let turma_parcial = turma_todos.splice(1,3)
console.log(turma_parcial)