function buscarDados(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((resposta) =>  resposta.json() )
            .then((dados)=> resolve(dados) )
            .catch(() => reject("Erro ao buscar os dados"))

    });
}

const urlValida = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
const urlInvalida = "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
buscarDados(urlValida)
    .then((dados) => {
        console.log(dados); // Exibe os dados após 2 segundos
    })
    .catch((erro) => {
        console.error(erro); // Lida com erros, se ocorrerem
    });
