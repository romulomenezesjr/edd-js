document.getElementById("meuForm").addEventListener("submit", function (e){
    e.preventDefault()
    // Recuperar o elemento HTML
    let nomeInput = document.getElementById("nome")
    // Acessa o conteúdo do elemento input
    let nome = nomeInput.value

    // Remove um elemento
    document.getElementById("meuForm").remove()

    // Adiciona um conteúdo HTML à um elemento
    document.getElementById("main").innerHTML = `
    <div class='min-w-80 bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col'>
        <h1 class='font-bold '> 
          Resultado: 
        </h1>
        <p>${nome} </p>
        </div>
        `
})