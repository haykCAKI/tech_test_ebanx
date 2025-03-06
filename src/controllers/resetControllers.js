const accountService = require("../services/accountService");

//Retorna Resposta 200 "OK" para resetar as contas
const resetState = (req, res) => {
  accountService.reset();
  res.status(200).send("OK");
};

//Importação do Módulo resetState
module.exports = { resetState };
