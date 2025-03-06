//Importanto os módulos dentro do accountService do arquivo servile
const accountService = require("../services/accountService");

// Parte de reset do estatus antes de começar os testes
const resetState = (req, res) => {
  accountService.reset();
  res.status(200).send("OK");
};

module.exports = { resetState };
