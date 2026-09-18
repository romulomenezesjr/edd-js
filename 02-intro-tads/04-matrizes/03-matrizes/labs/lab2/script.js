 // Array de duas dimensões com os dados do quadro de medalhas
 const medalhas = [
    ["Brasil", 7, 6, 8],
    ["Estados Unidos", 39, 41, 33],
    ["China", 38, 32, 18],
    ["Japão", 27, 14, 17],
    ["Grã-Bretanha", 22, 21, 22]
];

// Seleciona o corpo da tabela
const tbody = document.querySelector("#quadro-medalhas tbody");

// Itera sobre o array e cria as linhas da tabela
medalhas.forEach(pais => {
    // Cria uma nova linha
    const tr = document.createElement("tr");

    // Adiciona o nome do país
    const tdPais = document.createElement("td");
    tdPais.textContent = pais[0];
    tr.appendChild(tdPais);

    // Adiciona as medalhas de ouro, prata e bronze
    let total = 0;
    for (let i = 1; i < pais.length; i++) {
        const tdMedalha = document.createElement("td");
        tdMedalha.textContent = pais[i];
        total += pais[i]; // Calcula o total de medalhas
        tr.appendChild(tdMedalha);
    }

    // Adiciona o total de medalhas
    const tdTotal = document.createElement("td");
    tdTotal.textContent = total;
    tr.appendChild(tdTotal);

    // Adiciona a linha à tabela
    tbody.appendChild(tr);
});