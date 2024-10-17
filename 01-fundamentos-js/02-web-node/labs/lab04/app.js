const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Configurar o body-parser para lidar com dados de formulários
app.use(bodyParser.urlencoded({ extended: true }));

// Rota para lidar com o formulário submetido
app.post('/submit', (req, res) => {
  const nome = req.body.nome;
  res.send(`Nome recebido: ${nome}`);
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});