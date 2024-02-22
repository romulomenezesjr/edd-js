## O que é Javascript

JavaScript, frequentemente abreviado como JS, é a linguagem de programação das tecnologias que fazem a World Wide Web, juntamente com HTML e CSS. Ela nos permite adicionar interatividade às páginas, por exemplo, você pode ter visto sliders, alertas, interações de clique, pop-ups, etc., em diferentes sites - tudo isso é construído usando JavaScript.

Além de ser usado no navegador, também é utilizado em outros ambientes não relacionados ao navegador, como Node.js para escrever código do lado do servidor em JavaScript, Electron para escrever aplicativos de desktop, React Native para aplicativos móveis, e assim por diante.

## História

JavaScript foi inicialmente criado por Brendan Eich da NetScape e foi anunciado pela primeira vez em um comunicado de imprensa pela Netscape em 1995. Ele tem uma história bizarra de nomes; inicialmente, foi chamado de Mocha pelo criador, que mais tarde foi renomeado para LiveScript. Em 1996, cerca de um ano após o lançamento, a NetScape decidiu renomeá-lo para JavaScript com a esperança de capitalizar a comunidade Java (embora JavaScript não tivesse nenhum relacionamento com Java) e lançou o Netscape 2.0 com suporte oficial ao JavaScript.

![historia](https://res.cloudinary.com/practicaldev/image/fetch/s--YztX6smy--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/k9it4nub7qe99wvfa8r6.jpg)

## Versões

JavaScript, alcançou o status de padrão ECMA em 1997 e adotou o nome oficial ECMAScript. Esta linguagem evoluiu através de várias versões, a saber, ES1, ES2, ES3, ES5 e a transformadora ES6. Essas atualizações desempenharam um papel crucial na melhoria e padronização do JavaScript, tornando-o amplamente utilizado e valioso no campo sempre em mudança do desenvolvimento web.

![ES6](https://res.cloudinary.com/practicaldev/image/fetch/s--R8RN3V3c--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7ow4716n1yl2o73fdak3.jpg)

## Executando

JavaScript pode ser executado no navegador incluindo o arquivo de script externo usando a tag \<script\>, escrevendo-o dentro da página HTML novamente usando a tag \<script\>, executando-o no console do navegador ou também é possível usar o Node.

### Console do Navegador

![imagem](https://javascript.info/article/devtools/chrome.png)

### Tag script

![Script](https://res.cloudinary.com/practicaldev/image/fetch/s--SgMK7138--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/99rxu59p7rxos830qxlz.png)

### Execução com o node

![Node](https://res.cloudinary.com/practicaldev/image/fetch/s--cNfT4syU--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/l65m5h5x039we52cqhb4.png)

### Olá Mundo

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

O ambiente node não foi criado para aplicações CLI e normalmente é utilizado para processamento de requisições web. Caso queira utilizar um programa em Javascript para leitura do terminal utilize o seguinte exemplo:

```js
const readline = require('node:readline')
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

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

### Manipulando Formulário

O exemplo a seguir mostra como ler os valores de entrada de um formulário HTML usando JavaScript:

HTML:

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

JavaScript (`script.js`):

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

1. Utilizando os exemplos mostrados anteriormente crie uma calculadora utilizando prompt e alert
2. Utilizando os exemplos a seguir crie uma calculadora utilizando nodejs e o módulo readline
3. Utilizando os exemplos mostrados anteriormente, crie uma calculadora utilizando manipulação de formulário.
