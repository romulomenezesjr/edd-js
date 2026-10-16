import { Stack } from "./stack.js"

function validarExpressao(exp) {
    let pilha = new Stack()

    for (let i = 0; i < exp.length; i++) {
        if (exp[i] === "("){
            pilha.push(exp[i])
        }

        if (exp[i] === ")" ){

            if (pilha.isEmpty()) {
                return false
            }
            pilha.pop()
        }
    }

    return pilha.isEmpty()
}

export {validarExpressao}