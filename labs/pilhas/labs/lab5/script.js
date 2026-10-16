import {validarExpressao} from "./parenteses.js"
document.getElementById("expressao").addEventListener("keyup", function (e) {
    validarInput()
})
document.getElementById("meuForm").addEventListener("submit", function (e){
    e.preventDefault()

    validarInput()

    
})

function validarInput(){
    let expInput = document.getElementById("expressao")
    // Acessa o conteúdo do elemento input
    let exp = expInput.value

    let resultado = document.getElementById("resultado")

    if (validarExpressao(exp)) {
        resultado.innerHTML = "Parenteses Balanceados"
        resultado.style.color = "#9D9"
    } else {
        resultado.innerHTML = "Parenteses Não Balanceados"
        resultado.style.color = "#F00"
    }
}