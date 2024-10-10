document
      .getElementById("meuFormulario")
      .addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio do formulário (recarregamento da página)
    
        // Obter os valores dos inputs
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;
    
        // Exibir os valores no console (poderia ser utilizado para enviar para um servidor, por exemplo)
        console.log("Nome:", nome);
        console.log("Email:", email);
        console.log("Mensagem:", mensagem);
      });