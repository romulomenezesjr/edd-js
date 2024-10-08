const readline = require('node:readline')
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

// A função question imprime um texto no output e executa uma função (callback) quando o dado é lido
rl.question('Digite um número ', (n) => {
    console.log(n)
    rl.close();
  });
