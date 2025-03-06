// Importação do framework express (Node.js) -> utilizado para facilitar a criação de servidores webs e API's;
// E das routes que estão dentro da pasta routes;
const express = require("express");
const router = require("./src/routes/routes");

// Instância sendo usada para chamar o Express();
// Estou usando ela para configurar o servidor e definindo a rota sendo o port = 3000;
const app = express();
const port = 3000;

// A criação de um middleware;
// do próprio Express para a interpretação dos requisitos no formato de JSON;
// E usando o app.use(router) para que eu possa puxar as rotas que estão dentro do arquivo de routes;
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log("API está sendo rodada em ", port);
});
