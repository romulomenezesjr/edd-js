## Javascript na Web vs Node

Existe uma diferença fundamental entre JavaScript que executamos em ambientes web (Navegador) e no Node.js: **Ambientes de Execução**

Quando executamos o JavaScript em diferentes ambientes temos acesso à recursos e APIs que não existem no outro ambiente. 


1. **JavaScript na Web:**
   - No contexto da web, JavaScript é executado nos navegadores.
   - Ele interage com o DOM (Document Object Model) para manipular elementos HTML, CSS e responder a eventos do usuário.
   - JavaScript na web tem acesso a APIs específicas do navegador, como a API de manipulação de DOM (`document`), API de manipulação de eventos (`addEventListener`, APIs de armazenamento local (`localStorage` e `sessionStorage`), entre outras.
   - É comumente usado para criar aplicações web interativas, como páginas dinâmicas, jogos, aplicativos de single-page, entre outros.

2. **JavaScript no Node.js:**
   - No Node.js, JavaScript é executado no servidor.
   - Ele não tem acesso ao DOM ou a outras APIs do navegador, uma vez que não há um navegador presente.
   - Em vez disso, o Node.js fornece APIs para interação com o sistema de arquivos (`fs`), manipulação de streams, criação de servidores HTTP, manipulação de processos, acesso a banco de dados, entre outras.
   - Node.js permite criar aplicações de servidor, como APIs RESTful, servidores web, aplicativos em tempo real, scripts de automação, microserviços, entre outros.
   - Pode ser usado para construir aplicações CLI (Command Line Interface), serviços de backend, ferramentas de linha de comando, entre outros.

O JavaScript na web é voltado para interações no navegador e manipulação de elementos HTML, CSS e eventos do usuário. 

O JavaScript no Node.js orientado para operações de I/O, manipulação de arquivos, criação de servidores e desenvolvimento de aplicações de backend.

### Input/Output na Web

Em um navegador executando um documento HTML com Javascript embutido (uma página web), é possível escrever no documento acessando o objeto **document**, escrever em uma janela pop-up (geradando um alerta no navegador) ou no console do navegador:

```js
function output(t) {
  document.write("<p>" + t + "</p>");
}

alert("Hello, World!");
console.log("Hello, World!");
output("Hello, World!");
var name = prompt("What is your name?");
```

Em um arquivo index.js escreva o mesmo código acima e o execute utilizando o interpretador nodejs. O interpretador irá verificar que o ambiente de execução não é o do navegador e irá apontar um erro nos objetos do navegador, como alert, prompt e document.

```shel
node index.js
```

Remova os objetos que existem apenas no navegador e deixe apenas o console.log().

```js
function output(t) {
  console.log(t);
}

console.log("Hello, World!");
output("Hello, World!");
```
### Input/Output no Node

O ambiente node não foi criado para aplicações CLI e normalmente é utilizado para processamento de requisições web. Caso queira utilizar um programa em Javascript para leitura do terminal devemos importar módulos do Nodejs criados para isso.  Utilize o seguinte exemplo:

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

### Acessando Elementos HTML

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

Depois de acessar os elementos HTML usando uma dessas técnicas, você pode interagir com eles, como ler ou definir atributos, modificar o conteúdo, estílo, adicionar ou remover classes, ou lidar com eventos.

### Leitura de Dados dos Elementos HTML 

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

Neste exemplo, o evento de envio do formulário (`submit`) é interceptado pelo JavaScript. Dentro do callback desse evento, os valores dos inputs são lidos usando `document.getElementById().value`. Esses valores são então exibidos no console, mas você pode fazer qualquer outra coisa com eles, como enviá-los para um servidor ou usá-los para atualizar a página. O `event.preventDefault()` é usado para impedir o envio padrão do formulário, que recarregaria a página.

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
