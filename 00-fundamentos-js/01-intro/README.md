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

### Navegador

![imagem](https://javascript.info/article/devtools/chrome.png)

#### Tag script

```html
</html>
    <body>
        <form id="myForm">
            <input type="text" id="textInput" name="textInput" />
            <input type="submit" value="Submit" />
        </form>

    <script>
    document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault();
        var inputValue = document.getElementById('textInput').value;
        console.log(inputValue);
    });
    </script>
    </body>
</html>
```

### Sistema Operacional

A execução do Javascript no ambiente Node.js requer que o sistema operacional tenha o node.js instalado para que possa executar o script.

```sh
node script.js
```

```js
console.log("Hello World.")
```

Veja um diagrama da arquitetura do Node para fazer com que o código JS seja executado no sistema operacional.

![Node](https://res.cloudinary.com/practicaldev/image/fetch/s--cNfT4syU--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/l65m5h5x039we52cqhb4.png)

