import {Stack} from "./stack.js"

function binaryConverter(numeroDecimal){
    let resto, quociente, numeroBinario = ""
    const stack = new Stack()

    while(numeroDecimal > 0) {
        quociente = parseInt(numeroDecimal / 2)
        resto = parseInt(numeroDecimal % 2)
        stack.push(resto)
        numeroDecimal = quociente
    }

    while(!stack.isEmpty()) {
        numeroBinario += stack.pop()
    }

    return numeroBinario
}

export {binaryConverter}