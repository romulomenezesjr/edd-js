# Ambientes Javascript

Existe uma diferença fundamental entre JavaScript que executamos em ambientes web (Navegador) e no Node.js: Os **Ambientes de Execução**

Quando executamos o JavaScript em diferentes ambientes podemos ter acesso à recursos e APIs que não existem no outro ambiente. 


## Ambiente JavaScript na Web

O JavaScript na web é voltado para interações no navegador e manipulação de elementos de páginas HTML, arquivos CSS e eventos do usuário. 

  - No contexto da web, JavaScript é executado nos navegadores, desta forma é possível ter acesso à várias API's dos navegadores: Manipulação de DOM (`document`), API de manipulação de eventos `addEventListener`, APIs de armazenamento local (`localStorage` e `sessionStorage`), API de geolocalização, entre outras.
  - O uso principal do JavaScript no navegador é para interagir com o DOM (Document Object Model) para manipular elementos HTML, CSS e responder a eventos do usuário, comumente usado para criar aplicações web interativas, como páginas dinâmicas, jogos, aplicativos de single-page, entre outros.


### Exemplos 1: Acessando o DOM e interagindo com o navegador

Em um navegador executando um documento HTML com Javascript embutido (uma página web) é possível manipular a janela, o conteúdo do documento e usar o console acessando os métodos dos objetos **window**, **document** e **console**. 

```js
document.write("<p>" + t + "</p>");
window.alert("Hello, World!");
console.log("Hello, World!");
```
### Exemplo 2: Recuperando Dados

Além de exibir informações é possível recuperar dados do usuário no Javascript por meio de diversos métodos destes objetos (**window.prompt**: gera um alerta na página web e retorna o valor digitado pelo usuário, **document.getElementById('')**: recupera os dados em elementos HTML, como inputs, selects, textarea ou qualquer outro elemento HTML). Ainda existem outras formas usando outras API's (eventos, storage, etc.). 

```html
<html>
  <body>
    <input type="text" id="sobrenome">
  </body>
</html>
```
```js
var nome = prompt("Qual o seu nome?")
var sobrenome = document.getElementById("sobrenome").value
```

### Exemplo 3: Forma comum de acessar dados (document)

Normalmente não utilizandos a função **prompt()** do Javascript para leitura de dados. Fazemos isso acessando elementos input de um formulário HTML. O exemplo a seguir mostra como acessar os valores de entrada de um formulário HTML usando JavaScript.

- HTML (index.html): O código HTML a seguir possui um formulário com input's e um botão submit.

    ```html
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Formulário com JavaScript</title>
      </head>
      <body>
        <form id="meuFormulario">
          <label for="nome">Nome:</label>
          <input type="text" id="nome" name="nome" /><br /><br />
    
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" /><br /><br />
    
          <label for="mensagem">Mensagem:</label><br />
          <textarea id="mensagem" name="mensagem" rows="4" cols="50"></textarea
          ><br /><br />
    
          <input type="submit" value="Enviar" />
        </form>
    
        <script src="script.js"></script>
      </body>
    </html>
    ```
- JavaScript (`script.js`): O código JS a seguir acessa o documento, recupera o formulário e aguarda submit acontecer. Quando isso acontece, ele executa uma função.

    ```javascript
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
    ```

Explicação: No exemplo o evento de envio do formulário (`submit`) é interceptado pelo JavaScript. Dentro do **callback** desse evento, os valores dos inputs são lidos usando `document.getElementById().value`. Esses valores são então exibidos no console, mas você pode fazer qualquer outra coisa com eles, como enviá-los para um servidor ou usá-los para atualizar a página. O `event.preventDefault()` é usado para impedir o envio padrão do formulário, que recarregaria a página.

### Outros métodos para acessando elementos HTML

É possível acessar elementos HTML a partir do Javascript utilizando os métodos disponíveis no **document**. Veja os exemplos a seguir:

1. **getElementById():**
   Você pode acessar um elemento HTML pelo seu atributo `id` usando `document.getElementById()`. Isso retorna uma referência para o elemento com o ID especificado.

   ```javascript
   const elemento = document.getElementById("id_do_elemento");
   ```

2. **getElementsByClassName():**
   Se você tem vários elementos com a mesma classe, pode usar `document.getElementsByClassName()` para acessá-los. Isso retorna uma coleção HTML de elementos que têm a classe especificada.

   ```javascript
   const elementos = document.getElementsByClassName("nome_da_classe");
   ```

   Note que isso retorna uma coleção de elementos, então você precisará iterar sobre eles se quiser fazer algo com cada um individualmente.

3. **getElementsByTagName():**
   Para acessar elementos por sua tag HTML, você pode usar `document.getElementsByTagName()`. Isso retorna uma coleção HTML de todos os elementos com a tag especificada.

   ```javascript
   const elementos = document.getElementsByTagName("tag_html");
   
   ```
4. **querySelector(seletor):**
   Retorna o primeiro elemento HTML que corresponde ao seletor passado. O seletor possui as regras usadas ao definir estílos.
   ```js
   const el = document.querySelector(".myclass");

   ```

O retorno destes métodos permite obter os elementos HTML em formato de objetos para interagir com eles (ler, definir atributos, modificar o conteúdo, estílo, adicionar ou remover classes, ou lidar com eventos).


## Ambiente JavaScript no Node

O JavaScript no Node.js orientado para operações de I/O, manipulação de arquivos, criação de servidores e desenvolvimento de aplicações de backend.

  - No Node.js, JavaScript é executado no servidor.
  - Ele não tem acesso ao DOM ou a outras APIs do navegador, uma vez que não há um navegador presente.
  - Em vez disso, o Node.js fornece APIs para interação com o sistema de arquivos (`fs`), manipulação de streams, criação de servidores HTTP, manipulação de processos, acesso a banco de dados, entre outras.
  - Node.js permite criar aplicações de servidor, como APIs RESTful, servidores web, aplicativos em tempo real, scripts de automação, microserviços, entre outros.
  - Pode ser usado para construir aplicações CLI (Command Line Interface), serviços de backend, ferramentas de linha de comando, entre outros.


### Exemplo 4: Criando um pequeno servidor.

O ambiente node não foi criado para aplicações CLI que interagem com o usuário. Normalmente ele é utilizado para processamento de requisições web. Para o exemplo a seguir é necessário instalar pacotes express e body-parser.

```sh
npm init
npm i express body-parser
```

Após a configuração de um projeto node e instalação das dependências temos como resultado um arquivo package.json que configura um projeto node. O código a seguir deve ser salvo em um arquivo na mesma pasta para ser executado pelo node.

```js
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

```

### Exemplo 5: Interação no Terminal com Node

Caso queira utilizar um programa em Javascript para leitura do terminal devemos importar módulos do Nodejs criados para isso.  Utilize o seguinte exemplo:

```js
// Importando módulos do node para leitura do terminal. Estas são funções que não existem no Javascript
const readline = require('node:readline')
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

// A função question imprime um texto no output e executa uma função (callback) quando o dado é lido
rl.question('Digite um número ', (n) => {
    console.log(n)
    rl.close();
  });


```



## Exercício
  1. Calculadora utilizando prompt e alert:
      - Crie uma calculadora simples que solicite dois números através do prompt.
      - Permita que o usuário escolha a operação a ser realizada (adição, subtração, multiplicação, divisão).
      - Exiba o resultado da operação em um alert.

  2. Calculadora utilizando Node.js e o módulo readline:
      - Crie uma calculadora que utilize o módulo readline do Node.js para ler entrada do usuário a partir do terminal.
      - Permita que o usuário insira dois números e escolha a operação a ser realizada (adição, subtração, multiplicação, divisão).
      - Exiba o resultado da operação no terminal.

  3. Calculadora utilizando manipulação de formulário HTML:
      - Crie um formulário HTML com campos para o usuário inserir dois números e selecionar a operação desejada.
      - Utilize JavaScript para interceptar o envio do formulário e realizar a operação selecionada.
      - Após a submissão do formulário, exiba o resultado da operação na própria página HTML.
